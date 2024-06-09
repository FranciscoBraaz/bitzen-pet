import axios from "axios"

const BASE_URL = "https://api.bitzen-pet.homologacao.bitzenwebsites.net"

export const api = axios.create({
  baseURL: BASE_URL,
})
