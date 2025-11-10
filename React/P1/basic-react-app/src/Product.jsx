// import "./Product.css"

function Product(props){
    return (
        <div className="Product">
            <h3>{props.title}</h3>
            <h5>{props.description}</h5>
        </div>
    );
}

export default Product;