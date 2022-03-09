import { api } from "./index";

export const GetCollection = () => {
  return new Promise((resolve, reject) =>{
    api
    .get("cartas").then(resp => {
      resolve(resp)
    }).catch(e => {
      reject(e)
    })
  })
}