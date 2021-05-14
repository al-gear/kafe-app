import axios from "axios";

const url = "https://kafe-app.herokuapp.com/products";


export const fetchProducts = () => axios.get(url);
export const createProduct = (newProduct) => axios.post(url, newProduct);