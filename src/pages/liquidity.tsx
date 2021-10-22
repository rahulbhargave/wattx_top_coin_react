import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from "react-router";
import IPage from '../types/route';
import ReactApexChart from 'react-apexcharts';

export interface ChartSeries{
    name:string;
    data:any;
}
const LiquidityPage: React.FC<IPage & RouteComponentProps<any>> = props =>{
    const [series,setSeries] = useState([] as ChartSeries[]);
    const [options,setOptions] = useState({});

    const generateData = (baseval:any, count:number, yrange:{min:number,max:number})=> {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      
          series.push([x, y, z]);
          baseval += 86400000;
          i++;
        }
        return series;
      }

    useEffect(() => {
        setSeries([{
            name: 'Product1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 5, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Product2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 5, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Product3',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 5, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Product4',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 5, {
              min: 10,
              max: 60
            })
          }]);
        setOptions({
            chart: {
              height: 350,
              type: 'bubble',
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              type: 'gradient',
            },
            title: {
              text: '3D Bubble Chart'
            },
            xaxis: {
              tickAmount: 10,
              type: 'category',
            },
            yaxis: {
              max: 70
            },
            theme: {
              palette: 'palette2'
            }
          });
    }, [])
    console.log(series);
    return(
        <>
        <div>Liquidity Component</div>
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bubble" height={350} />
        </div>
        </>
    )
}

export default LiquidityPage;