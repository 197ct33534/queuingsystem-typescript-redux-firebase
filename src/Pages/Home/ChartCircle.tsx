import React from 'react';
import { Doughnut } from 'react-chartjs-2';
interface IDatafunc {
  datasets: {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
}
interface IOption {
  legend: { display: Boolean };
  responsive: Boolean;
  maintainAspectRatio: Boolean;
  cutoutPercentage: number;
}
interface IProps {
  option: IOption;
  dataFunc: (arraydata: number[], arraycolor: string[]) => IDatafunc;
  arraydata: number[];
  arraycolor: string[];
}
const ChartCircle = (props: IProps) => {
  const { option, dataFunc, arraydata, arraycolor } = props;
  return (
    <Doughnut
      options={option}
      data={dataFunc(arraydata, arraycolor)}
    ></Doughnut>
  );
};

export default ChartCircle;
