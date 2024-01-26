import axios from "axios";

export const fetchUser = async (userName: any) => {
  const response = await axios.get(`https://api.github.com/users/${userName}`);
  return response;
};
