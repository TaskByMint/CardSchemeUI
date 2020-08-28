import {
 GROUPS, SINGLE_GROUP
} from "./types";
import axios from "axios";
export const groups = (token) => (dispatch) => {
  axios
    .get(`http://54.194.183.10:5000/byteproof-service/api/v1/bpgroup/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({
        type: GROUPS,
        payload: res.data.result,
      });
    });
};

export const singleGroup = (token, id) => (dispatch) => {
  console.log(id);
  axios
    .get(`http://54.194.183.10:5000/byteproof-service/api/v1/bpgroup/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({
        type: SINGLE_GROUP,
        payload: res.data.result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};



