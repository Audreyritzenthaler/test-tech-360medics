import React from "react"
import { Link } from "react-router-dom"

const Drug = (props) => {

    return(
        <div>
            <p><b>{props.name}</b> : ${props.price}</p>
            <Link to={{
                pathname:`/product/${props.name}`,
                data: {
                    name: props.name,
                    price: props.price,
                    quantity: props.quantity,
                    supplier: props.supplier
                }
            }}>
                <button>Show product</button>
            </Link>
        </div>
    )
}

export default Drug