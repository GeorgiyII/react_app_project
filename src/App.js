import React from 'react';
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"
import Calculators from './components/calculators_prev/calculatorsComponent'

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/calculators' component={Calculators} />
                    <Route path='/calculators' component={Calculators} />
                    <Route path='/standards' component={Calculators} />
                    <Route path='/standards' component={Calculators} />
                    <Redirect from='/' to='/calculators'/>
                </Switch>
            </div>
        );
    }
}

export default App;
