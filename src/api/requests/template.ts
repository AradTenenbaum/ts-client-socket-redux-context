import axios from "axios";
import { URL } from "../serverDetails";

const headers = (token: string) => {
  return { "auth-token": token };
};
// Get
export const fecthExamples = (token: string) =>
  axios.get(`${URL}/example/all`, { headers: headers(token) });
// Post
export const addExample = (token: string, newExample: any) =>
  axios.post(`${URL}/example/add`, newExample, { headers: headers(token) });
// Delete
export const removeExample = (token: string, id: string) =>
  axios.delete(`${URL}/example/remove/${id}`, { headers: headers(token) });
