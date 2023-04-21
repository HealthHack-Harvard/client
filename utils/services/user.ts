import axios from "axios";
import cookie from "react-cookies";

const PORT = 3001;
const HOST = "localhost";
const API_URL = `http://10.254.18.177/v1/user`

const UserService = {
  findByID: async (id: String) => {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.load("token")}`,
      },
    };

    try {
      const response = await axios.get(`${API_URL}/user/info/${id}`, config);
      return response
    } catch (error: any) {
      return error.response.data
    }
  },
  auth: async (email: string, pass: string) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth`, {
        email: email,
        password: pass
      })
      return response
    }
    catch (error: any) {
      return error.response.data
    }
  },
};

export default UserService;
