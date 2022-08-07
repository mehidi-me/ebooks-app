import client from "../client";

const login = async (userInfo) => {
  return await client.post("/account/auth", userInfo);
};

export default { login };
