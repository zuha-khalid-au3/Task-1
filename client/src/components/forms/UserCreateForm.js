import React from 'react';

const UserCreateForm =({handleSubmit,handleChange,values,
handleCategoryChange,
subOptions,
setValues,
showSub})=>{
    const {name,email,phone} =values;
    return(
   <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>name</label>
                    <input type="text"name="name" className="form-control" value={name} 
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input type="text"name="email" className="form-control" value={email} 
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>phone</label>
                    <input type="text"name="phone" className="form-control" value={phone} 
                    onChange={handleChange}/>
                </div>
                
                <br/>


<button className="btn btn-outline-info">Save</button>
            </form>
    )};

  export default UserCreateForm;