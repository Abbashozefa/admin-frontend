import axios from "axios";

//login
export const loginFn=async(username:string,password:string)=>{
    const response=await axios.post("https://adminbackend-fawn.vercel.app/api/auth/login",{
        username:username,
        password:password
    })
    if(response.status==200){
        localStorage.setItem('token',response.data.token)
    }
    console.log(response.data.token)
    return response
}
export const logout=async()=>{
    const response=await axios.post("https://adminbackend-fawn.vercel.app/api/auth/logout")
    if(response.status==200){
        localStorage.removeItem('token')
    }
    return response
}