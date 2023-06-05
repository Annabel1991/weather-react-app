import './App.css';
import SearchEngine from "./SearchEngine";
import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="New York" />

        <footer>
  <p>
    This project was coded by Anna Bilokon and is {" "}
    <a href="https://github.com/Annabel1991/weather-react-app">open-sourced on GitHub</a>{" "}
    and hosted on{" "}
    <a href="https://helpful-llama-4d50e7.netlify.app/" target="_blank"   rel="noopener noreferrer">Netlify</a>. 
  </p>
</footer>
</div>
    </div>
  );
}