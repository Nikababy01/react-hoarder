import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbItems = response.data;
      const items = [];
      if (fbItems) {
        Object.keys(fbItems).forEach((fbId) => {
          fbItems[fbId].id = fbId;
          items.push(fbItems[fbId]);
        });
      }
      resolve(items);
    })
    .catch((err) => reject(err));
});

export default { getItemsByUid };
