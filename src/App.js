import './App.css';
import SearchEngine from "./SearchEngine";


function App() {
  return (
    <div className="App">
       <SearchEngine defaultCity="Lisbon" />
      <SearchEngine />
      <div id="footer" class="d-flex justify-content-center">
      <span id="sourceCode"><a href="https://github.com/Annabel1991/react-weather">Open-source code </a></span>
      by Anna Bilokon
    </div>

    </div>
  );
}

export default App;
