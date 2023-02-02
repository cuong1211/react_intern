import * as httpRequest from '~/utils/httpRequest';

export const search = async(search) => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                search
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

// function get data from api and return data axios

// function get