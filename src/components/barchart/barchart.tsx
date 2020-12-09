import React, { useEffect, useState } from 'react';
import { HorizontalBar, defaults } from 'react-chartjs-2';
import './barchart.scss'

type Props = {
    dataList: any;
    labels: any;
    title: string;
}

defaults.global.defaultFontFamily = 'Oswald';
defaults.global.defaultFontSize = 14;

export const BarChart = (props: Props) => {

    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.title,
                backgroundColor: 'rgba(22, 116, 64,0.4)',
                borderColor: 'rgba(22, 116, 64,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(22, 116, 64,0.8)',
                hoverBorderColor: 'rgba(22, 116, 64,1)',
                data: props.dataList,
                categoryPercentage: 0.5,
                barPercentage: 1.0,
            }
        ]
    };

    return (
        <div className="ed-barchart">
            <HorizontalBar height={200}
                type='horizontalBar'
                data={data}
                options={{
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                autoSkip: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                autoSkip: false
                            }
                        }],
                        maintainAspectRatio: false,
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
            >
            </HorizontalBar>
        </div>
    )
}

export default BarChart;