import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Report, Status} from '../hooks/useFetchStatuses'

Chart.register(...registerables);


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

  return <div></div>
};

export default TimelineChart;
