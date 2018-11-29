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
import Conditionicon from './Components/Conditionicon';
import Conditions from './Components/Conditions';
import Whaticon from './Components/Whaticon';
import Wordmap from './Components/Wordmap';
import Whenicon from './Components/Whenicon';
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
        <Conditionicon />
        <Conditions />
        <Whaticon />
        <Wordmap />
        <Whenicon />

    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
