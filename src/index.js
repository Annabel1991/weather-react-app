import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer className="text-center small mt-4">
  <p>
    This project was coded by Anna Bilokon and is {" "}
    <a href="https://github.com/Annabel1991/weather-react-app">open-sourced on GitHub</a>{" "}
    and hosted on{" "}
    <a href="https://helpful-llama-4d50e7.netlify.app/" target="_blank"   rel="noopener noreferrer">Netlify</a> 
  </p>
</footer>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();