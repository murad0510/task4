import './App.css';
import Product from './Components/Products/Product';
import ProductEdit from './Components/ProductEdit/ProductEdit';
import { useState } from "react";

var key=0;

function App() {
  const productss=[
    {
      id:0,
      name:"Lays",
      price:2.00,
      discount:0.50,
      image:"https://orderexoticsnacks.com/cdn/shop/files/Lays-chips-magic-masala_1024x1024.png?v=1696917607"
    },
    {
      id:1,
      name:"Lays",
      price:2.00,
      discount:0.50,
      image:"https://orderexoticsnacks.com/cdn/shop/files/Lays-chips-magic-masala_1024x1024.png?v=1696917607"
    }
  ];

  const [id, setId] = useState();
  const [products, setProducts] = useState(productss);
  const [selectedFood, setSelectedFood] = useState({ name: '', price: 0 ,discount:0,image:""});
  const [product, setProduct] = useState();


  function AddProduct(e){
    setProducts([
      ...e,
      {
        id: e.id,
        name: e.name,
        price:e.price,
        discount:e.discount,
        image:e.image
      },
      ...products
    ]);
  }

  function ProductUpdate(){

  }

  function selectedProduct(product){
    setSelectedFood(product);
    console.log(selectedFood);
    
    // setProduct(products.filter(product=>product.id==id));
  }

  // const handleFoodClick = (food) => {
  // };

  return (
    <div className="App" style={{width:"100%",backgroundColor:"red"}}>
      <div style={{display:"flex",justifyContent:"space-between",width:"40%",backgroundColor:"purple"}}>
          <ProductEdit selectedProduct={selectedFood} addProduct={AddProduct}></ProductEdit>
        <div style={{border:"3px solid black",width:"50%",margin:"10px",height:"50vh",overflow:"scroll"}}>
          {
            products.map((p)=>(
              <Product key={key++} selectedProduct={selectedProduct} id={p.id} name={p.name} price={p.price} discount={p.discount} image={p.image}></Product>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
