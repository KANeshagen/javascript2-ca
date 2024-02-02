import {REGISTER_URL, LOGIN_URL} from "../common/constants.js";
import {useFetch} from "./useFetch.js";
import {LOCAL_KEY_NAME} from "../common/constants.js";
import {createLocal} from './useStorage.js';

export const register = async (email, password, name, avatar = null, banner = null) => {
  try {
    const body = {
      name,
      email,
      password,
      "avatar": avatar ? avatar : null,
      "banner": banner ? banner : null
    };
    const res = await useFetch('POST', REGISTER_URL, false, body);
    console.log('Register Response', res);
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

export const login = async (email, password) => {
  try {
    const body = {
      email,
      password
    };
    const res = await useFetch('POST', LOGIN_URL, false, body);
    console.log('Login Response', res);
    createLocal(LOCAL_KEY_NAME, res);
  } catch (error) {
    console.error('Error posting data:', error);
  }
};