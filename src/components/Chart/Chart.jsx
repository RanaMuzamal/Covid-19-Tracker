import React,{useState,useEffect} from 'react';
import { fetchDailyData } from '../../api/index';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart=({data, country})=> {
    const [dailyData,setDailydata]=useState([])
    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailydata(await fetchDailyData()); 
        }
        console.log(dailyData);
        fetchAPI();
    })
    const lineChart = (
        dailyData.length
          ?  (
            <Line
            data = {{
                labels: dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }]
            }}
                
            />):null
    )
    const barChart = (
        data ? (
               <Bar
                   data = {{
                       labels:['Infected','Recoveries','Deaths'],
                       datasets:[{
                           label:'People',
                           backgroundColor:['rgba(0,0,255,0.5)',
                                           'rgba(0,255,0,0.5)',
                                           'rgba(255,0,0,0.5)',
                        ],
                        data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                       }]

                   }}
                   options={{
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                   }}

               />  ):null
    )
   
          if(!data){
            return "loading..."
          }
          return (
        <div className={styles.container}>
            {(country ==="global") ? lineChart : barChart}
        </div>
    );
          }
          
            

export default Chart;
