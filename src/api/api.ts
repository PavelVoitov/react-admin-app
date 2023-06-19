import axios from "axios";

export const apiUrl = 'http://3.65.149.62';

export const instance = axios.create({
	baseURL: apiUrl
})