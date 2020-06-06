import React from "react"
import "./ProductSheet.css"

const ProductSheet = (props) => {
    const data = props.location.data
    return(
        <div>
            <h1>Product Sheet</h1>
            <div className="product">
                <p className="nameProduct"><b>{data && data.name}</b></p>
                <p>Supplier by {data && data.supplier}</p>
                <p>Price : {data && data.price}</p>
                <p>Quantity : {data && data.quantity}</p>
            </div>
        </div>
    )
}

export default ProductSheet