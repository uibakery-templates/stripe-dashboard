const selectedTimePeriod = {{params}} || '7d';
return {{state.mockChartData.find(chartTimePeriod => chartTimePeriod.timePeriod === selectedTimePeriod).charts}};