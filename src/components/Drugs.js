import React from "react"
import { Link } from "react-router-dom"

const Drugs = (props) => {

    return(
        <div>
            <p>{props.name}</p>
            <Link to={{
                pathname:`/product/${props.name}`,
                data: {
                    name: props.name,
                    price: props.price,
                    quantity: props.quantity,
                    supplier: props.supplier
                }
            }}>
                <button>Afficher le produit</button>
            </Link>
        </div>
    )
}

export default Drugs