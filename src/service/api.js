import axios from "axios";

const url = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while addUser API", error);
  }
};

export const getUsers = async () => {
  try {
    let res = await axios.get(`${url}/users`);

    return res.data;
  } catch (error) {
    console.log("Error while calling getUsers api", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API", error);
  }
};

export const getConversation = async (data) => {
  try {
    let res = await axios.post(`${url}/conversation/get`, data);
    return res.data;
  } catch (error) {
    console.log("Error while calling getConversation API", error);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error while calling getMessages API", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile Api", error.message);
  }
};
