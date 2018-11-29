import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main';
import Counter from './Components/Counter';
import Gendericon from './Components/Gendericon';
import FWgraphtemp from './Components/FWgraphtemp';
import Locationicon from './Components/Locationicon';
import LocationGraphs from './Components/LocationGraphs';
import LocationGraphs2 from './Components/LocationGraphs2';
import Conditions from './Components/Conditions';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Main />
        <Counter />
        <Gendericon />
        <FWgraphtemp />
        <Locationicon />
        <LocationGraphs />
        <LocationGraphs2 />
        <Conditions />

    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
