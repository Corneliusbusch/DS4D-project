import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main';
import Counter from './Components/Counter';
import Cleverclogsicon from './Components/Cleverclogsicon';
import Userdataicon from './Components/Userdataicon';
import Clickdataicon from './Components/Clickdataicon';
import Gendericon from './Components/Gendericon';
import FWgraphtemp from './Components/FWgraphtemp';
import Locationicon from './Components/Locationicon';
import CityMap from './Components/CityMap';
import Conditionicon from './Components/Conditionicon';
import Conditions from './Components/Conditions';
import Whaticon from './Components/Whaticon';
import Football from './Components/Football';
import Radio from './Components/Radio';
import Wordmap from './Components/Wordmap';
import Network from './Components/Network';
import Whenicon from './Components/Whenicon';
import Daydistribution from './Components/Daydistribution';
import Heatmap from './Components/Heatmap';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Main />
        <Counter />
        <Cleverclogsicon />
        <Userdataicon />
        <Clickdataicon />
        <Gendericon />
        <FWgraphtemp />
        <Locationicon />
        <CityMap />
        <Conditionicon />
        <Conditions />
        <Whaticon />
        <Wordmap />
        <Football />
        <Radio />
        <Network />
        <Whenicon />
        <Daydistribution />
        <Heatmap />

    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
