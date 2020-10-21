import axios from 'axios';
import { ROOT_URL } from '../Config/settings';

const api = {
  login: {
    async signIn(userData) {
      const url = '/api/login';

      try {
        const response = await axios.post(`${ROOT_URL}${url}`, userData);

        return response;
      } catch (e){
        return e.response;
      }
    },
    async register(userData) {
      const url = '/api/register';

      try {
        const response = await axios.post(`${ROOT_URL}${url}`, userData);

        return response;
      } catch (e){
        return e.response;
      }
    }
  }
}

export default api;