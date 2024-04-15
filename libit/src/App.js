
import "./App.css";
import kirjat from './tiedot/kirjat.json'
import viimeksipaivitetty from './tiedot/viimeksipaivitetty.json'
import kannetvapaana from './tiedot/kannetvapaana.json'
import kannetlainassa from './tiedot/kannetlainassa.json'
import TaulukkoKomponentti from './komponentit/TaulukkoKomponentti'
import TaulukkoKuvaKomponentti from './komponentit/TaulukkoKuvaKomponentti'
import TaulukkoKuvaHarmaannettuKomponentti from './komponentit/TaulukkoKuvaHarmaannettuKomponentti'
import ViimeksiPaivitettyKomponentti from './komponentit/ViimeksipaivitettyKomponentti'

const App = () => {
    return (
    <p>
        <span align="center">
            <div>    
                <ViimeksiPaivitettyKomponentti data={viimeksipaivitetty} />
                <p align="center">Vaajakosken kirjasto Urheilutie 36, Vaajakoski</p>  
            </div> 
            <div>
                <TaulukkoKuvaKomponentti data={kannetvapaana} />
            </div>
            <div>
                <TaulukkoKuvaHarmaannettuKomponentti data={kannetlainassa} />
            </div>                      
        </span>
        <br />
        <br />
        <br />        
        <p></p>                
        <span align="center">
            <TaulukkoKomponentti data={kirjat} />
        </span>
        <br />     
    </p>
    );
  };
  
  export default App;