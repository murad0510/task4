import React from 'react'

export default function Product({selectedProduct,id,name,price,discount,image}) {

  var product={
    id:id,
    name:name,
    price:price,
    discount:discount,
    image:image
  }

  return (
    <div key={id} onClick={() => selectedProduct(product)} className='product' style={{borderRadius:"5px",width:"80%",margin:"auto",display:"inline-block",padding:"5px",marginTop:"10px"}}>
        <div  style={{width:"90%",border:"1px solid black",margin:"auto"}}>
         <img src={image} style={{width:"100%",height:"100%"}} alt='img'></img>   
        </div>

        <h2>Product Name : {name}</h2>
        <h2>Product Price : {price}</h2>
        <h2>Product Desciption : {discount}</h2>
    </div>
  )
}