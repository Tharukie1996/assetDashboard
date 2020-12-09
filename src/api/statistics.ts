import axios from 'axios';
import { EQUIPMENT_SERVICE } from '../config/constants';

const request = axios.create({
    baseURL: EQUIPMENT_SERVICE
});

export const getEquipmentStats = async () => {
    const response = await request.get(`/equipment/stat`);
    return response.data;
}