import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

interface Report {
  id: string;
  value: 'ACTIVE' | 'INACTIVE';
  timestamp: Date;
}

interface Status {
  hired_id: string;
  report: Report[];
}

interface TimelineChartProps {
  status: Status;
}

const TimelineChart: React.FC<TimelineChartProps> = ({ status }) => {

  const timelineData = status.report.map(report => ({
    x: new Date(report.timestamp),
    y: report.value === 'ACTIVE' ? 1 : 0,
  }));

  const data = {
  };

  const options: ChartOptions<'line'> = {
  };

  return <Line data={data} options={options} />;
};

export default TimelineChart;
