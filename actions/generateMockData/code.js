function generateDataPoints(start, end, valuesRangeStart, valuesRangeEnd) {
  const dataPoints = [];
  let currentDate = new Date(start);
  while (currentDate <= end) {
    dataPoints.push({
      time: currentDate.toISOString().split('T')[0],
      value: Math.floor(Math.random() * (valuesRangeEnd - valuesRangeStart + 1)) + valuesRangeStart,
      previousPeriodValue: Math.floor(Math.random() * (valuesRangeEnd - valuesRangeStart + 1)) + valuesRangeStart,
      
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dataPoints;
}

function extractDataForPeriod(data, endingDate, period) {
  const startDate = new Date();
  startDate.setDate(endingDate.getDate() - period);
  const endDate = new Date(endingDate);
  const filterByPeriod = (dataPoint) => {
    const dataPointDate = new Date(dataPoint.time);
    return dataPointDate >= startDate && dataPointDate <= endDate;
  };
  return {
    timePeriod: period + 'd',
    charts: data.map((chart) => ({
      title: chart.title,
      dataPoints: chart.dataPoints.filter(filterByPeriod),
    })),
  };
}

function generateChartsData(start, end) {
  const RANGES = {
    grossRevenue: {
      start: 20000,
      end: 30000,
    },
    netRevenue: {
      start: 20000,
      end: 30000,
    },
    MRR: {
      start: 1000,
      end: 1100,
    },
    newCustomers: {
      start: 20,
      end: 50,
    },
    numberOfPayments: {
      start: 2000,
      end: 2500,
    },
    revenuePerCustomer: {
      start: 20,
      end: 30,
    },
  };
  const charts = [
    {
      title: 'Gross revenue',
      dataPoints: generateDataPoints(start, end, RANGES.grossRevenue.start, RANGES.grossRevenue.end),
    },
    {
      title: 'Net revenue',
      dataPoints: generateDataPoints(start, end, RANGES.netRevenue.start, RANGES.netRevenue.end),
    },
    {
      title: 'MRR',
      dataPoints: generateDataPoints(start, end, RANGES.MRR.start, RANGES.MRR.end),
    },
    {
      title: 'New customers',
      dataPoints: generateDataPoints(start, end, RANGES.newCustomers.start, RANGES.newCustomers.end),
    },
    {
      title: 'Number of payments',
      dataPoints: generateDataPoints(start, end, RANGES.numberOfPayments.start, RANGES.numberOfPayments.end),
    },
    {
      title: 'Revenue per customer',
      dataPoints: generateDataPoints(start, end, RANGES.revenuePerCustomer.start, RANGES.revenuePerCustomer.end),
    },
  ];
  return charts;
}
const endDate = new Date();
const startDate = new Date(endDate);
startDate.setFullYear(endDate.getFullYear() - 1);

const chartData = generateChartsData(startDate, endDate);
const generatedData = {
  timePeriod: '1y',
  charts: chartData,
};

{{state.mockChartData.push(generatedData)}};
{{state.mockChartData.push(extractDataForPeriod(chartData,endDate, 30))}};
{{state.mockChartData.push(extractDataForPeriod(chartData,endDate, 7))}};