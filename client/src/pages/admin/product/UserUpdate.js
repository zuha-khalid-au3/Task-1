import React, { useState, useEffect} from 'react';
import AdminNav from '../../../components/Navbar/AdminNav';
import {toast} from 'react-toastify';
import { useSelector } from 'react-redux';
import {getProduct,updateProduct } from '../../../functions/user';
import FileUpload from '../../../components/forms/FileUpload';
import {LoadingOutlined} from '@ant-design/icons'
import UserUpdateForm from '../../../components/forms/UserUpdateForm'

const initialState = {
    name:'',
    email:'',
    phone:'',
    images:[],
}


const ProductUpdate = ({match,history}) => {
const[values,setValues] =useState(initialState);
const [loading, setLoading]=useState(false);
    const {user} =useSelector((state) => ({ ...state }));

    let {slug} =match.params;

    useEffect(() => {
        loadProduct();
       
    }, []);

    const loadProduct = () =>{
        getProduct(slug).then((p)=>{
            setValues({...values,...p.data});
        });
    };


    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true);

        updateProduct(slug,values,user.token)
        .then((res)=>{
            setLoading(false);
            toast.success(`" User ${res.data.name}" is updated` );
            history.push('/admin/products');
        })
        .catch((err)=>{
            setLoading(false)
            toast.error(err.res.data.err);
        })
    }

    const handleChange=(e) =>{
        setValues({...values,[e.target.name]:e.target.value})
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
             ):(<h4> Product Update </h4>
             )}
            
             <div className="p-3">
         <FileUpload 
         values={values}
          setValues={setValues} 
          setLoading={setLoading}/>
         </div> 
         <br/>
             <UserUpdateForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setValues={setValues}
        values={values}      />
                 <hr/>
                 
             </div>
             </div>
    </div>
)
}
export default ProductUpdate;