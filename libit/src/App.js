
import "./App.css";
import kirjat from './tiedot/kirjat.json'
import TaulukkoKomponentti from './komponentit/TaulukkoKomponentti'

const App = () => {
    return (
      <div>
        <h1>Table Example</h1>
        <TaulukkoKomponentti data={kirjat} />
      </div>
    );
  };
  
  export default App;