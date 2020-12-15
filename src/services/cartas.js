import { api } from "./index";

export const PegaCartas = () => {
  return new Promise((resolve, reject) =>{
    api
    .get("cartas").then(resp => {
      resolve(resp)
    }).catch(e => {
      reject(e)
    })
  })
}