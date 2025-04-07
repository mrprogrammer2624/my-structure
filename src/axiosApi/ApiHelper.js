import { axiosApi } from "@/axiosApi";

async function request(method, url, data) {
  try {
    const response = await axiosApi[method](`${url}`, data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return response.data;
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} request to ${url}:`, error);
    throw error;
  }
}

/* API Demo */
// export const postDemo = (data) => request("post", "/api/demo", data);
// export const getDemo = () => request("get", "/api/demo");
// export const putDemo = (data) => request("put", "/api/demo", data);
// export const deleteDemo = () => request("delete", "/api/demo");
// export const deleteDemo = () => request("delete", "/api/demo");
// export const deleteDemo = (data,id) => request("post", `/api/demo/${id}`,data);
// export const deleteDemo = (id) => request("get", `/api/demo/${id}`);
