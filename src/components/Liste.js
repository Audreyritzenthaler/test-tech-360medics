import React from "react"
import Drugs from "./Drugs"
import './Liste.css'


class Liste extends React.Component {
    state = {
        listDrugs : []
    }

    getResults = () => {
        fetch('/pretend-api/dataset-example.json')
            .then(res => res.json())
            .then(data => this.setState({ listDrugs: data}));
    }

    componentDidMount() {
        this.getResults()
    }

    render() {
        return(
            <div>
                <h1>List of drugs</h1>
                <ul>
                    {
                        this.state.listDrugs.map((drug, i) =>
                            <li key={i}>
                                <Drugs name={drug.product_name} quantity={drug.quantity} price={drug.unit_cost} supplier={drug.supplier} />
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Liste