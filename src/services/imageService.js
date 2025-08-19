// import axios from 'axios'

// const API_BASE = 'http://localhost:3000/api/image' // Keep this consistent
// const getAuthHeader = (token) => ({
//   headers: { Authorization: `${token}` },
// })

// // 📏 Resize Image
// export const resizeImage = (file, width, height, token) => {
//   const form = new FormData()
//   form.append('image', file)
//   form.append('width', width)
//   form.append('height', height)
//   return axios.post(`${API_BASE}/resize`, form, getAuthHeader(token))
// }

// // 🔄 Convert Image Format
// export const convertImage = (file, format, token) => {
//   const form = new FormData()
//   form.append('image', file)
//   form.append('format', format)
//   return axios.post(`${API_BASE}/convert`, form, getAuthHeader(token))
// }

// // 🗜️ Compress Image
// export const compressImage = (file, token, userId) => {
//   const form = new FormData()
//   form.append('image', file)
//   form.append('user_id', userId)
//   return axios.post(`${API_BASE}/compress`, form, getAuthHeader(token))
// }

// // ✂️ Crop Image (Base64 Upload + Crop Coords)
// export const cropImage = (file, x, y, width, height, token, userId) => {
//   const form = new FormData()
//   form.append('image', file)
//   form.append('x', x)
//   form.append('y', y)
//   form.append('width', width)
//   form.append('height', height)
//   form.append('user_id', userId)
//   console.log(form);
//   return axios.post(`${API_BASE}/crop`, form, getAuthHeader(token))
// }

import axios from 'axios' 
const API_BASE = `http://localhost:3000/api/image` 
const getAuthHeader = (token) => (
{ headers: { 
  Authorization: `${token}` 
}, 
  })
export const resizeImage = (file, width, height, token, _id) => {
   const form = new FormData() 
   form.append('image', file) 
   form.append('width', width) 
   form.append('height', height) 
   form.append('user_id', _id) 
   console.info(form);
   return axios.post(`${API_BASE}/resize`, form, getAuthHeader(token)) } 

export const convertImage = (file, format, token, _id) => { 
const form = new FormData() 
form.append('image', file) 
form.append('format', format)
form.append('user_id', _id)  
console.log(form); 
return axios.post(`${API_BASE}/convert`, form, getAuthHeader(token)) 
}
export const compressImage = (file, token, _id) => {
const form = new FormData()
form.append('image', file) 
form.append('user_id', _id) 
console.log(form) 
return axios.post(`${API_BASE}/compress`, form, getAuthHeader(token)) }

export const DisplayImages = (token, _id)=>{

  return axios.get(`${API_BASE}/display/${_id}`, getAuthHeader(token))
}