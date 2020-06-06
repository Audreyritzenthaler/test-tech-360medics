import React from "react"
import { Link } from "react-router-dom"
import Drug from "./Drug"
import './List.css'


class List extends React.Component {
    state = {
        listDrugs : [],
        displayedDrugs: [],
        searchTerm : '',
        viewed: null
    }

    ascFilter = () => {
        const products = this.state.listDrugs

        products.sort(function (a, b) {
            return a.unit_cost - b.unit_cost
        })
        this.setState({ listDrugs: products})
    }

    descFilter = () => {
        const products = this.state.listDrugs
        
        products.sort(function (a, b) {
            return b.unit_cost - a.unit_cost
        })
        this.setState({ listDrugs: products })
    }

    getResearch = (e) => {
        const query = e.target.value

        this.setState({ 
            searchTerm: query,
            displayedDrugs: this.state.listDrugs.filter(item => item.product_name.includes(query))
        })
    }

    getLocalItem = () => {
        const local = localStorage.getItem('lastView')

        this.setState({ 
            viewed: this.state.listDrugs.find(item => item.product_name === local)
        })
    }

    getResults = () => {
        fetch('/pretend-api/dataset-example.json')
        .then(res => res.json())
        .then(data => this.setState({ listDrugs: data, displayedDrugs: data }));
    }
    
    componentDidMount() {
        this.getResults()
    }

    componentDidUpdate(props, prevState) {
        if (this.state.viewed === null) {
            this.getLocalItem()
        }
    }
    
    render() {
        const products = this.state.displayedDrugs
        const local = localStorage.getItem('lastView')
        const viewed = this.state.viewed
        return(
            <div>
                {
                    viewed && <Link to={{pathname:`/product/${local}`,
                    data: {
                        name: viewed.product_name,
                        quantity :viewed.quantity,
                        price: viewed.unit_cost,
                        supplier: viewed.supplier
                        }
                    }}>Link to the last product viewed</Link>
                }
                <h1>List of drugs</h1>
                <button onClick={this.ascFilter}>Display ascending price</button>
                <button onClick={this.descFilter}>Display descending price</button>
                    <div>
                        <input type="text" value={this.state.searchTerm}  onChange={this.getResearch} placeholder="Search a product"></input>
                        <div>
                            { this.state.displayedDrugs.length === 0 ? "This product doesn't exist !" : this.state.searchTerm }
                        </div>
                    </div>
                    <ul>
                        {
                            products.map((drug, i) =>
                                <li key={i}>
                                    <Drug name={drug.product_name} quantity={drug.quantity} price={drug.unit_cost} supplier={drug.supplier} />
                                </li>
                            )
                        }
                </ul>
            </div>
        )
    }
}

export default List