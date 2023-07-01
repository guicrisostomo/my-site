import fetchJsonp from "fetch-jsonp";

async function api() {

    const response = await fetchJsonp(
        process.env.REACT_APP_VERCEL_WAKATIME,
        {
            
        }
    ).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json.days);
        return json;
    }).catch((error) => {
        console.log(error);
    });

    return response.days;
}

export default api;