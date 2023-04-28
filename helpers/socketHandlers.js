const socketConnection = require("../socket");
const Chart = require("../models/Chart");
const {
  getUpdatedMetricsData,
  getTransformedData,
} = require("./transformFuncs");
const { dummyMetricData } = require("./static");

let chartGeneratingTimer = null;
const startChartData = async () => {
  const interval = await Chart.getInterval();
  if (!interval || typeof interval !== "number") {
    interval = 5000;
  }
  const socket = socketConnection.getIO();
  chartGeneratingTimer = setInterval(async () => {
    Chart.getAllData((data) => {
      const chartsData = data.commondatarows || [];
      if (!Array.isArray(chartsData)) {
        socket.emit("getchartdata", []);
      } else {
        const updatedMetricsData = getUpdatedMetricsData(data.metricdatarows);
        Chart.updateMetricData(updatedMetricsData);
        const transformedMetricData = getTransformedData(updatedMetricsData);
        const updatedChartsData = chartsData.map((chart) => {
          const transformedMetric = transformedMetricData.find(
            (data) => data.id === chart.id
          );
          let updatedChart;
          if (!transformedMetric) {
            updatedChart = { ...chart, ...dummyMetricData };
          } else {
            updatedChart = { ...chart, ...transformedMetric };
          }
          return updatedChart;
        });
        updatedChartsData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        socket.emit("getchartdata", updatedChartsData);
      }
    });
  }, interval);
};

const clearChartData = () => {
  clearInterval(chartGeneratingTimer);
  chartGeneratingTimer = null;
};

const setSockets = (socket) => {
  startChartData();
  socket.on("connect", startChartData);
  socket.on("disconnect", clearChartData);
};

module.exports = { setSockets, startChartData, clearChartData };
