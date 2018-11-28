import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main';
import Counter from './Components/Counter';
import Gendericon from './Components/Gendericon';
import FWgraphtemp from './Components/FWgraphtemp';
import Locationicon from './Components/Locationicon';
import Conditions from './Components/Conditions';
import * as serviceWorker from './serviceWorker';
import GraphDiv from "./Components/GraphDiv";

<<<<<<< HEAD
ReactDOM.render(<GraphDiv />, document.getElementById('root'));
=======
ReactDOM.render(
    <div>
        <Main />
        <Counter />
        <Gendericon />
        <FWgraphtemp />
        <Locationicon />
        <Conditions />

    </div>, 
    document.getElementById('root'));
>>>>>>> 1be20b38d77e33cc6f0ee9cde076fdb2752f745c

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
