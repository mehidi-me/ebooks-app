import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://stag.cloud-one.live/mediaContent",
  //baseURL: 'http://192.168.0.104:3002/api/v1',
});

apiClient.addAsyncRequestTransform(async (req) => {
  const authToken = localStorage.getItem("token");

  if (!authToken) return;

  req.headers["Authorization"] = `Bearer ${authToken}`;
  // req.headers['contentType'] = 'application/json; charset=utf-8';
});

export default apiClient;
