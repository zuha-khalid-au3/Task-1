import React, { useState, useEffect} from 'react';
import AdminNav from '../../../components/Navbar/AdminNav';
import {toast} from 'react-toastify';
import { useSelector } from 'react-redux';
import {createProduct } from '../../../functions/user';
import UserCreateForm from '../../../components/forms/UserCreateForm';
import FileUpload from '../../../components/forms/FileUpload';
import {LoadingOutlined} from '@ant-design/icons'


const ProductCreate = () => {
    const initialState = {
        name:'',
        email:'',
        phone:'',
        images:[],
    }
    const [values,setValues] =useState(initialState);
    const [loading, setLoading]=useState(false);

    const {user} =useSelector((state) => ({ ...state }));
    useEffect(() => {
    },[]);
    
 
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        createProduct(values,user.token)
        .then(res =>{
            window.alert(`User ${res.data.name} is created`);
            window.location.reload();
        })
        .catch(err =>{
            console.log(err)
            
            toast.error(err.response.data.err);
        })

    }


    const handleChange=(e) =>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleCategoryChange=(e) =>{
        e.preventDefault();
        setValues({...values,subs:[],category:e.target.value});
    }


return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <AdminNav />
                </div>
            <div className="col-md-10">
             {loading? (<LoadingOutlined 
             className="text-danger h1"/>
             ):(<h4> User create </h4>
             )}       
                 <hr/>
                 
     <div className="p-3">
         <FileUpload 
         values={values}
          setValues={setValues} 
          setLoading={setLoading}/>
         </div>            
    <UserCreateForm 
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    values={values}
    setValues={setValues}
    handleCategoryChange={handleCategoryChange}
 />
                </div>    
        </div>
    </div>
)
}
export default ProductCreate;