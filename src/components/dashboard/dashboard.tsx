import React, { useEffect, useState } from 'react';
import { IStatistics } from '../../model/IStatistics';
import { EQUIPMENT_SERVICE } from '../../config/constants';
import axios from 'axios';
import { Header } from '../header/header';

export const Dashboard = () => {
    const [operationalCount, setOperationalCount] = useState(0);
    const [nonOperationalCount, setNonOperationalCount] = useState(0);
    const [data, setData] = useState(null);
    const [label, setLabel] =useState(null);

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

    useEffect(() => {
        getEquipmentStats();
        console.log(label);
        console.log(data);
    }, []);

    

    return (
        <>
        <Header></Header>
        </>
    )
}
export default Dashboard;
