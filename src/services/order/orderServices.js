import * as request from '~/utils/request';
import { getToken } from "~/components/Layout/components/Api/useToken";

const token = getToken();
export const GetList = async () => {
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
export const GetOrder = async(id) =>{
    try{
        const response = await request.get(`orders/${id}`,{
            headers: {
                'Accept': 'application/json',
                "Authorization": "Bearer " + token,
            }
        });
        return response;
    }
    catch(error){
        console.log(error);
    }
}

export const Update = async(data, id) => {
    try{
        const response = await request.put(`orders/${id}`,data,{
            headers: {
                'Accept': 'application/json',
                "Authorization": "Bearer " + token,
            }
        });
        return response;
    }
    catch(error){
        console.log(error);
    }
}
export const Delete = async(id) => {
    try{
        const response = await request.destroy(`orders/${id}`,{
            headers: {
                'Accept': 'application/json',
                "Authorization": "Bearer " + token,
            }
        });
        return response;
    }
    catch(error){
        console.log(error);
    }
}
