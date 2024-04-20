
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
            <h1>Libit!</h1>
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
            <br />            
            <div align="center">  
            <i>  
            - Libit lyhyesti -<br />
            - sivulla on suosituimpien lastenkirjojen saatavuus yhdellä sivulla -
            <br />         
            - päivitetään tietoja omalla ajallani -
            <br />
            - toivon että tämä tuo lukuiloa lapsille ja nuorille - 
            <br />
            - ps. kirja ovat vapaana kunnes joku asiakas sen varaa tai lainaa -
            <br />
            - pps. täysin varman tiedon kirjan saatavuudesta näet missäpä muualla kuin kirjastolla -
            <br />
            -Tarja
            </i>           
            </div>                   
            </span>
            <br />
            <br />
            <br />        
                
            <span align="center">
                <TaulukkoKomponentti data={kirjat} />
            </span>
            <br />     
    </p>
    );
  };
  
  export default App;