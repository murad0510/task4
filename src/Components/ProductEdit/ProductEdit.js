import React from 'react'
import { useState } from "react";

var nextId = 0;

export default function ProductEdit({addProduct,selectedProduct}) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");

  const [products, setProducts] = useState([]);

  // if (selectedFood!=null) {
  //   setName(selectedFood.name);
  //   // setPrice(selectedFood.price || "");
  //   // setDiscount(selectedFood.discount || "");
  //   // setImage(selectedFood.image || "");
  // }

  console.log(selectedProduct.name);
  // if(selectedFood!=null){
  // }

  function AddProduct() {
     var product=([
      {
        id: ++nextId,
        name: name,
        price:price,
        discount:discount,
        image:image
      },
      ...products
    ]);
    
    // console.log(d);

    addProduct(product);

    
    setName("");
    setDiscount("");
    setPrice("");
    setImage("");
    
  }

  return (
    <div style={{width:"50%",border:"10px solid black"}}>
      <ul style={{listStyle:"none",margin:"auto",display:"inline-block"}}>
        <li style={{width:"100%"}}>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type='text'></input>
        </li>
        <li>
        <label>Price</label>

          <input value={price} onChange={(e) => setPrice(e.target.value)} type='text'></input>
        </li>
        <li>
         <label>Desciption</label>

          <input value={discount} onChange={(e) => setDiscount(e.target.value)} type='text'></input>
        </li>
        <li>
          <label>Image Url</label>

          <input value={image} onChange={(e) => setImage(e.target.value)} type='text'></input>
        </li>
        <li>
          <button style={{margin:"auto",border:"1px solid black"}} onClick={AddProduct}>Add</button>
          <button style={{width:"100%",margin:"auto",border:"1px solid black"}}>Update</button>
        </li>
      </ul>
    </div>
  )
}