import React from "react"
import { Link } from "react-router-dom"
import "./ProductSheet.css"



class ProductSheet extends React.Component {
    state = {
        name: this.props.location.data.name
    }

    saveLocalStorage = () => {
        localStorage.setItem('lastView', this.state.name)
    }

    componentDidMount() {
        this.saveLocalStorage()
    }

    render() {
        const data = this.props.location.data
        return(
            <div>
                <div className="previous">
                    <Link to="/">
                        <button>Return to the list's drugs</button>
                    </Link>
                </div>
                <h1>Product Sheet</h1>
                <div className="product">
                    <p className="nameProduct"><b>{data && data.name}</b></p>
                    <p>Supplier by {data && data.supplier}</p>
                    <p>Price : ${data && data.price}</p>
                    <p>Quantity : {data && data.quantity}</p>
                </div>
            </div>
        )

    }
}

export default ProductSheet