const { monthNames } = require("./static");

exports.getTransformedData = (metricData) => {
  return metricData.map((data) => {
    return {
      id: data.id,
      metricData: [
        {
          Price: data.Price1,
          "Previos Price": data.PreviosPrice1,
          month: data.month1,
        },
        {
          Price: data.Price2,
          "Previos Price": data.PreviosPrice2,
          month: data.month2,
        },
        {
          Price: data.Price2,
          "Previos Price": data.PreviosPrice2,
          month: data.month2,
        },
      ],
    };
  });
};

exports.getUpdatedMetricsData = (metricsData) => {
  const monthIndex = new Date().getMonth();
  const month1 = monthNames[monthIndex];
  const month2 = monthNames[monthIndex + 1];
  const month3 = monthNames[monthIndex + 2];
  const updatedMetricsData = metricsData.map((data, index) => {
    const updatedData = { ...data };
    updatedData.PreviosPrice1 = updatedData.Price1;
    updatedData.Price1 = Math.trunc(Math.random() * 10000);
    updatedData.month1 = month1;
    updatedData.PreviosPrice2 = updatedData.Price2;
    updatedData.Price2 = Math.trunc(Math.random() * 10000);
    updatedData.month2 = month2;
    updatedData.PreviosPrice3 = updatedData.Price3;
    updatedData.Price3 = Math.trunc(Math.random() * 10000);
    updatedData.month3 = month3;
    return updatedData;
  });
  return updatedMetricsData;
};
