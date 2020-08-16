import React from 'react';

class CalculatorsList extends React.Component {
  render() {
    return (<div>
          <div className="tab-name"><span>Онлайн калькулятор узлов</span></div>
            {this.props.calculators.map((calculator) => (
                <div className="prev-calc">
                    <img src="" className="image"/>
                    <p>Image</p>
                    <p className="caption">{calculator.name}</p>
                    <p className="text">{calculator.text}</p>
                    <div className="full-button"><a href=""><img src="public/calc.png" className="arrow"/></a>
                    </div>
                </div>
            ))}
        </div>
    );
  }
}

export default CalculatorsList;