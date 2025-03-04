import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './App';
import {AuthContextProvider} from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';



//import { initFacebookSdk } from './helpers/initFacebookSdk';
//import reportWebVitals from './reportWebVitals';

/*initFacebookSdk().then(startApp);

function startApp () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}*/


ReactDOM.render(


    <AuthContextProvider>
        

    <BrowserRouter>
      <App />
    </BrowserRouter>

    </AuthContextProvider>,
   
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
