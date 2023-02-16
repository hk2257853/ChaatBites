import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1300" }); // server url

API.interceptors.request.use((req) => {
    // will run for each request to send token to server (to know if user is logged in or not)
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).response.token
      }`;
      // console.log(JSON.parse(localStorage.getItem("profile")).response.token)
    }
    return req;
  });

export const getMenuItems = () => API.get("/menu"); // http://localhost:1300 + /admin concatinated
export const createMenuItem = (newMenuItem) => API.post("/menu", newMenuItem);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const fetchCartItem =()=>API.get("/cart");
export const addCartItem =(newCartItem)=>API.post("/cart",newCartItem)
export const deleteCartItem =()=>API.delete("/cart");

export const getParkingStatus = () => API.get("/parking"); // http://localhost:1300 + /admin concatinated
export const updateParkingStatus = (id, updatedData) => API.patch(`/parking/${id}`, updatedData);
