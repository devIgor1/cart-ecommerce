import axios from "axios"

export const api = axios.create({
  baseURL: "https://json-cart-ecommerce.vercel.app/",
})
