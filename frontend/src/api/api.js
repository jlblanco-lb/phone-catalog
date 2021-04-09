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
