import {FETCH_TERMINALS, SINGLE_TERMINAL, BULK_TERMINAL, DELETE_TERMINAL, SHOW_BULK,SHOW_TERMINAL} from './types'
import axios from 'axios'
const token=sessionStorage.getItem('token')
export const terminals = (token) => dispatch =>  {
    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).
    then((res)=> {
        console.log(res.data)
        dispatch({
            type : FETCH_TERMINALS,
            payload: res.data
        })
    })
    
};


export const showTerminal = (token,id) => dispatch => {
    console.log(id)
    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal/${id}`,{
        headers:{
            Authorization : `Bearer ${token}`
        }
    }).
    then((res)=> {
        dispatch({
            type: SHOW_TERMINAL,
            payload: res.data.result
        })
    }).
    catch((err) => {
        console.log(err)
    })
}

export const singleTerminal = (token, data) => dispatch =>  {
    axios.post(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal/single`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).
    then((res)=> {
        dispatch({
            type : SINGLE_TERMINAL,
            payload: res.data.result
        })
    })
    
};

export const showTerminalBulk = (token,id) => dispatch => {
    console.log(id)
    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal/${id}`,{
        headers:{
            Authorization : `Bearer ${token}`
        }
    }).
    then((res)=> {
        dispatch({
            type: SHOW_BULK,
            payload: res.data.result
        })
    }).
    catch((err) => {
        console.log(err)
    })
}


export const deleteTerminal = (token, id) => dispatch => {
    axios.delete(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal/${id}`, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }).
    then((res) => {
        console.log(res.data.result)
        dispatch({
            type: DELETE_TERMINAL,
            payload: res.data
        })
    })
}