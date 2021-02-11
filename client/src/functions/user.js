import axios from 'axios';
export const createProduct=async (product,authtoken) =>
    
    await axios.post(`${process.env.REACT_APP_API}/userInternal`,product,{
        headers:{
        authtoken,
},
})   


export const getProductsByCount=async (count) =>
     await axios.get(`${process.env.REACT_APP_API}/userInternals/${count}`);

export const removeProduct=async (slug,authtoken)=>{
    await axios.delete(`${process.env.REACT_APP_API}/userInternals/${slug}`,{
        headers:{
        authtoken,
    },
    });
 }


 export const getProduct=async (slug) =>
 await axios.get(`${process.env.REACT_APP_API}/userInternal/${slug}`);



 export const updateProduct=async (slug,product,authtoken) =>
    
    await axios.put(`${process.env.REACT_APP_API}/userInternal/${slug}`,product,{
        headers:{
        authtoken,
},
})   


export const getProducts=async (sort,order,page) =>
    
    await axios.post(`${process.env.REACT_APP_API}/userInternals`,{
        sort,order,page
})   


export const getProductsCount=async () =>
    await axios.get(`${process.env.REACT_APP_API}/userInternals/total`); 