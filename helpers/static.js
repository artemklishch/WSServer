const monthNames = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const dummyMetricData = {
  metricData: [
    {
      Price: Math.trunc(Math.random() * 10000),
      "Previos Price": Math.trunc(Math.random() * 10000),
      month: monthNames[new Date().getMonth()],
    },
    {
      Price: Math.trunc(Math.random() * 10000),
      "Previos Price": Math.trunc(Math.random() * 10000),
      month: monthNames[new Date().getMonth() + 1],
    },
    {
      Price: Math.trunc(Math.random() * 10000),
      "Previos Price": Math.trunc(Math.random() * 10000),
      month: monthNames[new Date().getMonth() + 2],
    },
  ],
};

module.exports = { monthNames, dummyMetricData };
