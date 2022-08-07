import client from "./client";

const getContent = async () => {
  return await client.get("/mediaContent");
};

export default { getContent };
