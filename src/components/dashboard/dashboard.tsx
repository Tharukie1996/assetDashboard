import React, { useEffect, useState } from 'react';
import { EQUIPMENT_SERVICE } from '../../config/constants';
import axios from 'axios';
import { Header } from '../header/header';
import { BarChart } from '../barchart/barchart';
import './dashboard.scss';

export const Dashboard = () => {
    const [operationalCount, setOperationalCount] = useState(0);
    const [nonOperationalCount, setNonOperationalCount] = useState(0);
    const [data, setData] = useState(null as any);
    const [label, setLabel] =useState(null as any);

    const request = axios.create({
        baseURL: EQUIPMENT_SERVICE
    });

    const getEquipmentStats = async () => {
        await request.get(`/equipment/stat`)
        .then(response => {
            setNonOperationalCount(response.data.noOfNonOperationalEquip);
            setOperationalCount(response.data.noOfOperationalEquip);
            setLabel(response.data.labelList);
            setData(response.data.dataList);
        });
    }
    const getBarChart = () => {
        let x = data
        return(
            <BarChart dataList={data} labels={label} title="Assets"></BarChart>
        )
    }

    useEffect(() => {
        getEquipmentStats();
        console.log(label);
        console.log(data);
    }, []);

    return (
        <>
        <Header></Header>
        <div className="ed-desc-p">
            <p>Operational equipment count: {operationalCount}</p>
            <p>Non-operational equipment count: {nonOperationalCount}</p>
        </div>
        <BarChart dataList={data} labels={label} title="Equipment Count"></BarChart>
        </>
    )
}
export default Dashboard;
