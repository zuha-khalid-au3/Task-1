import React,{useEffect} from 'react'
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Header from './components/Navbar/Header'
import RegisterComplete from './pages/auth/RegisterComplete'
import ForgotPassword from './pages/auth/ForgotPassword'
import UserRoute from './components/routes/UserRoute';
import AdminRoute from './components/routes/AdminRoutes';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {currentUser} from './functions/auth';
import History from './pages/user/History';
import Password from './pages/user/Password';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProductCreate from './pages/admin/product/UserCreate';
import AllProducts from './pages/admin/product/AllUsers';
import ProductUpdate from './pages/admin/product/UserUpdate';
import Product from './pages/Product'

const App=() =>{
  const dispatch=useDispatch();

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged(async(user)=>{
      if(user){
        const idToken=await user.getIdTokenResult();
        console.log(user)
        currentUser(idToken.token)
        .then((res)=>{
            dispatch({
                type:"LOGGED_IN_USER",
                payload:{
                    name:res.data.name,
                    email:res.data.email,
                    token:idToken.token,
                    role:res.data.role,
                    _id:res.data._id,
                },
            });
        }).catch(err=>console.log(err));
      }
    })
    return ()=>unsubscribe();
  },[dispatch])
  return (
    <>
    <Header/>
    <ToastContainer/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/register/complete" component={RegisterComplete}/>
      <Route exact path="/forgot/password" component={ForgotPassword}/>
      
      <UserRoute exact path="/user/history" component={History}/>
      <UserRoute exact path="/user/password" component={Password}/>
    
      <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
      <AdminRoute exact path ="/admin/product" component ={ProductCreate} />
      <AdminRoute exact path ="/admin/products" component ={AllProducts} />
      <AdminRoute exact path ="/admin/product/:slug" component ={ProductUpdate} />
      <Route exact path="/product/:slug" component={Product}/>
    </Switch>
    </>
  );
}

export default App;
