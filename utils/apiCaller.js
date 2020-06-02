import axios from 'axios';
import {getToken} from "./auth";

export  function callApi(url, method = 'GET', body){
    return axios({
        method: method,
        url:  url,
        data: body
    }).catch(err => {
        console.log(err);
    });
};


export  function callApiToken(url, method = 'GET', body){
    return (
        axios({
            method: method,
            url:  url,
            data: body,
            headers: {'Authorization' : "Bearer " + getToken('token')}
        }).catch(err => {
            console.log(err);
        })
    )
};


