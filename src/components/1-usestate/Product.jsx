import { useState } from "react"

// Create a component name Product with a product object with productName, price, and productDesc, using useState to update the product to a current value


const goods={
  productName: "Good Mama",
  price: "500",
  productDesc: "Detergent for Washing",
}



const Product = () => {
 const[product, setProduct] = useState(goods);

const updateProduct = () => {
  setProduct({
    ...product,
    productName: "Klin",
    price: "1000",
    productDesc: "Detergent for Washing",
  });
}






  return (
    <div>
      <h2> My Product</h2>
      <p>Product Name: {product.productName}</p>
      <p>Price: {product.price}</p>
      <p>Product Description: {product.productDesc}</p>
      <button onClick={updateProduct}>Update Product</button>
    </div>
  )
}
export default Product