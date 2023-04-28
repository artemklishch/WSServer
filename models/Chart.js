const { v4: uuidv4 } = require("uuid");
const { getDb } = require("../util/database");
const { monthNames } = require("../helpers/static");
const {
  getMetricsUpdateMeta,
  getSaveNewChartMeta,
  getEditChartMeta,
} = require("../util/dbhelpers");

module.exports = class Chart {
  constructor(name, priceColor, prevPriceColor, description) {
    this.id = uuidv4();
    this.name = name;
    this.priceColor = priceColor;
    this.prevPriceColor = prevPriceColor;
    this.description = description;
    this.priceTitle = "Price";
    this.prevPriceTitle = "Previos Price";
    this.isReserved = "false";
    this.metricDataKey = "month";
    this.createdAt = new Date().toISOString();
    const monthIndex = new Date().getMonth();
    this.metricData = new Array(3).fill(null).map((_, index) => ({
      Price: Math.trunc(Math.random() * 10000),
      "Previos Price": 0,
      month: monthNames[monthIndex + index],
    }));
  }
  static getAllData(cb) {
    try {
      const db = getDb();
      const sql_commondata = "SELECT * FROM commondata";
      const sql_metricdata = "SELECT * FROM metricdata";
      db.all(sql_commondata, (err, commondatarows) => {
        if (err) {
          console.error(err);
          throw "Error occured";
        }
        db.all(sql_metricdata, (err, metricdatarows) => {
          if (err) {
            console.error(err);
          }
          cb({ commondatarows, metricdatarows });
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
  static updateMetricData(updatedMetricData) {
    try {
      const db = getDb();
      for (let i = 0; i <= updatedMetricData.length - 1; i++) {
        const { sql, data } = getMetricsUpdateMeta(updatedMetricData[i]);
        db.run(sql, data, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  save() {
    try {
      const db = getDb();
      const { sql_commondata, commondata, sql_metricdata, metricdata } =
        getSaveNewChartMeta(this);
      db.run(sql_commondata, commondata, (err) => {
        if (err) {
          console.error(err);
          throw "Error occured";
        }
        db.run(sql_metricdata, metricdata, (err) => {
          if (err) {
            console.error(err);
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
  static edit(id, updatedData) {
    try {
      const db = getDb();
      const { sql, data } = getEditChartMeta(id, updatedData);
      db.run(sql, data, function (err) {
        console.error(err);
      });
    } catch (err) {
      console.error(err);
    }
  }
  static delete(id) {
    try {
      const db = getDb();
      db.run("DELETE FROM commondata WHERE id=?", [id], function (err) {
        if (err) {
          console.error(err);
          throw "Error occured";
        }
        db.run("DELETE FROM metricdata WHERE id=?", [id], function (err) {
          if (err) {
            console.error(err);
          }
        });
      });
    } catch (err) {
      console.error("Failed to delete!", err);
    }
  }
  static getInterval() {
    return new Promise((res, rej) => {
      const sql = "SELECT * FROM interval";
      const db = getDb();
      db.all(sql, function (err, data) {
        if (err) {
          rej("Error occured - failed to get interval!");
        } else {
          res(data[0].interval);
        }
      });
    });
  }

  static setInterval({ interval }) {
    return new Promise((res, rej) => {
      const db = getDb();
      const sql = "UPDATE interval SET interval=? WHERE intId=?";
      const data = [+interval, "interval"];
      db.run(sql, data, function (err) {
        if (err) {
          rej("Failed to set new  interval!");
        } else {
          res("Interval was updated successfully!");
        }
      });
    });
  }
};
