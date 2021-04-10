import { ENTRYPOINT } from '../config/entrypoint';
import axios from "axios";

export const getPhones = async () => {
    return await axios.get( `${ENTRYPOINT}/phones.json`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getPhone = async (id) => {
    return await axios.get(`${ENTRYPOINT}/phones/${id}.json`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        })
}

export const createPhone = async (data) => {
    console.log(data.imageFileName);
    const parseData = {
        "name": data.phoneName,
        "manufacturer": data.manufacturer,
        "description": data.description,
        "color": data.color,
        "price": parseFloat(data.price),
        "imageFileName": data.imageFileName,
        "screen": data.screen,
        "processor": data.processor,
        "ram": parseInt(data.ram)
    }
    return await axios.post(`${ENTRYPOINT}/phones`, parseData)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error)
        })
}

export const deletePhone = async (id) => {
    return await axios.delete(`${ENTRYPOINT}/phones/${id}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        })
}

export const updatePhone = async (data) => {
    return await axios.put(`${ENTRYPOINT}/phones/${data['id']}`, data)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        })
}
