import axios from 'axios';
import apiKeys from '../apiKeys.json';
// import Axios from 'axios';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((result) => {
      const allPinsObject = result.data;
      const pins = [];
      if (allPinsObject !== null) {
        Object.keys(allPinsObject).forEach((pinId) => {
          const newPin = allPinsObject[pinId];
          newPin.id = pinId;
          pins.push(newPin);
        });
      }
      resolve(pins);
    })
    .catch((err) => reject(err));
});


const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);
// const getSingleBoard = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

const savePin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

export default { getPinsByBoardId, deletePin, savePin };
