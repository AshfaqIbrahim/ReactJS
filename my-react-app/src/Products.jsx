//Props

function Products(props) {
    
    return (
    <>
      <div className="product-container">
        <p>Product : {props.product} </p>
        <p>Price : {props.price} </p>
      </div>
    </>
  
    );
}

export default Products;
