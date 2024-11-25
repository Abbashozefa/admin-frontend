import axios from "axios"

//get contacts
export const getContacts=async()=>{
    const response=await axios.get("https://adminbackend-fawn.vercel.app/api/contact/get")
    return response
}