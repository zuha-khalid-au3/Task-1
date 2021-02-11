import React from 'react'
import {Card} from 'antd';
import {EyeOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
const {Meta} =Card;
const UserCard=({product})=>{

    const {images,name,slug,email,phone}=product;
return(
<Card
cover={
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
    src={images&& images.length?images[0].url:"img"}
    style={{height:"150px",objectFit:"cover"}}
    className="p-1"
    />
}
actions={[
    <Link to={`/admin/product/${slug}`}>
        <EyeOutlined className="text-warning"/>
        <br/> View Details
    </Link>
]}
>
    <Meta
    title={name}
    description={`${email && email.substring(0,40)}
    ${phone} `}
    />
    </Card>
)
}

export default UserCard