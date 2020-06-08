import React from "react"
import { Link } from "react-router-dom"
import "./ProductSheet.css"



class ProductSheet extends React.Component {
    state = {
        name: this.props.location.data && this.props.location.data.name,
        price: this.props.location.data && this.props.location.data.price,
        quantity: this.props.location.data && this.props.location.data.quantity,
        supplier: this.props.location.data && this.props.location.data.supplier,
    }

    saveLocalStorage = () => {
        const myViewed = this.state
        localStorage.setItem('lastView', JSON.stringify(myViewed))
    }


    componentDidMount() {
        if (!this.props.location.data) {
            const view = JSON.parse(localStorage.getItem('lastView'))
            this.setState({ name : view.name, price: view.price, quantity: view.quantity, supplier: view.supplier })
        } else {
            this.saveLocalStorage()
        }
    }

    render() {
        const data = this.state
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