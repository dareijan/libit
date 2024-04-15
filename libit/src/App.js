
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
            <br />            
            <div align="center">      
            Hei ja tervetuloa! Tämän palvelun nimi on Libit<br />
            Näet heti sivulla suosituimpien lastenkirjojen saatavuuden.
            <br />
            Nappaa kirja mukaasi käydessäsi Vaajakoskella lähellä.
            <br />

            Ehkä löysit jo mielenkiintoisia kirjoja?
            <br />            
            Libit palvelu on ilmainen - päivitetään tietoja omalla ajallani.
            <br />
            Toivon että tämä tuo lukuiloa lapsille ja edistää lukemaan oppimista.
            <br />
            Kirja ovat vapaana kunnes joku asiakas sen varaa tai lainaa.
            <br />
            Täysin varman tiedon kirjan saatavuudesta näet kirjastolla            
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