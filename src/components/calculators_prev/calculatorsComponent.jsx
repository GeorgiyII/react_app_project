import React from 'react';
import Footer from './footerComponent'
import Header from './headerComponent'
import CalculatorsList from "./calculatorComponent";

class Calculators extends React.Component {
    state = {
        "data": [
            {
                "name": "First",
                "text": "First text",
            },
            {
                "name": "Second",
                "text": "Second text"
            }]
    }

    render() {
        return (
            <div>
                <Header/>
                <CalculatorsList calculators={this.state.data} />
                <Footer/>
            </div>
        );
    }
}

export default Calculators;
