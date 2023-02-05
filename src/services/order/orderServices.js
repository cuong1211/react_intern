import * as request from '~/utils/request';
import { getToken } from "~/components/Layout/components/Api/useToken";

export const GetList = async () => {
    const token = getToken();
    try {
        const response = await request.get("orders", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            }
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const Create = async (data) => {
    const token = getToken();
    try {
        const response = await request.post("orders", data, {
            headers: {
                'Accept': 'application/json',
                "Authorization": "Bearer " + token,
            }
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}
