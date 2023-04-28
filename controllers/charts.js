const Chart = require("../models/Chart");
const { getDb } = require("../util/database");
const { startChartData, clearChartData } = require("../helpers/socketHandlers");

const MAX_CHARTS_AMOUNT = 10;

exports.createNewChart = (req, res) => {
  let errorText = "Failed to save!";
  try {
    const db = getDb();
    db.all("SELECT COUNT(*) FROM commondata", function (err, data) {
      if (err || !data || !"COUNT(*)" in data[0]) {
        throw new Error();
      }
      const tableRows = data[0]["COUNT(*)"];
      if (tableRows === MAX_CHARTS_AMOUNT) {
        errorText =
          "Impossible to add more than 10 charts! You can delete any chart and add new one.";
        res.status(500).json({ message: errorText });
        return;
      }
      const { name, priceColor, prevPriceColor, description } = req.body;
      const chart = new Chart(name, priceColor, prevPriceColor, description);
      chart.save();
      res.status(200).json(chart);
    });
  } catch (err) {
    res.status(500).json({ message: errorText });
  }
};

exports.deleteChart = (req, res) => {
  let errorMessage = "Failed to delete!";
  try {
    const id = req.params.id;
    const db = getDb();
    db.all(
      `SELECT isReserved FROM commondata WHERE id=?`,
      [id],
      function (err, data) {
        if (err || !data) {
          throw new Error();
        }
        const deletingChart = data[0];
        if (!deletingChart) {
          errorMessage = "This chart has already been deleted!";
        }
        if (deletingChart.isReserved === "true") {
          errorMessage = "This chart is reserved and can not be deleted!";
        }
        if (!deletingChart || deletingChart.isReserved === "true") {
          res.status(500).json({ message: errorMessage });
          return;
        }
        Chart.delete(id);
        res.status(200).json({ message: "Chart was deleted successfully!" });
      }
    );
  } catch (err) {
    res.status(500).json({ message: errorMessage });
  }
};

exports.editChart = (req, res) => {
  try {
    const id = req.params.id;
    Chart.edit(id, req.body);
    res.status(200).json({ message: "Edited successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to edit!" });
  }
};

exports.getInterval = async (req, res) => {
  try {
    let interval = await Chart.getInterval();
    if (!interval || typeof interval !== "number") {
      interval = 5000;
    }
    res.status(200).json({ interval: interval });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error occured - failed to get interval value!" });
  }
};

exports.setInterval = async (req, res) => {
  try {
    await Chart.setInterval(req.body);
    clearChartData();
    startChartData();
    res.status(201).json("Interval updated!");
  } catch (err) {
    res.status(500).json({ message: "Failed to update interval!" });
  }
};
