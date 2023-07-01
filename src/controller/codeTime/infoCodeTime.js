import api from "./api";

async function getCodeTimeToday() {
    
    return await api().then((response) => {
        return response;
    }).catch((error) => {
        console.log(error);
    })
    
}

export default getCodeTimeToday;