import axios from "axios"

//get products
export const getProduct=async()=>{
    const response = await axios.get("https://adminbackend-fawn.vercel.app/api/products/get")
    return response
}

//add products
export const addProduct=async(title:string,description:string,file:File,file2?:File,file3?:File)=>{
    const formData=new FormData()
    formData.append("title",title)
    formData.append("description",description)
    formData.append("files",file)
    if(file2)formData.append("files",file2)
    if(file3)formData.append("files",file3)
    const response = await axios.post("https://adminbackend-fawn.vercel.app/api/products/create",formData,{
        headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        }
    })
    return response
}
//delete products
export const deleteProduct=async(id:number)=>{
    const response=await axios.delete(`https://adminbackend-fawn.vercel.app/api/products/delete/${id}`)
    return response
}

//update products
export const updateProduct=async(id:number,title?:string,description?:string,file?:File,file2?:File,file3?:File)=>{
    const formData=new FormData()
    if(title)formData.append("title",title)
    if(description)formData.append("description",description)
    if(file)formData.append("image1",file)
    if(file2)formData.append("image2",file2)
    if(file3)formData.append("image3",file3)
    const response=await axios.put(`https://adminbackend-fawn.vercel.app/api/products/update/${id}`,formData,{
        headers: {
            'Content-Type': 'multipart/form-data', 
        }
    })
    return response
}