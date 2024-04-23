const TaulukkoKomponentti = ({ data }) => {
    const rows = data.map(item => Object.values(item));
    return (
      <table cellspacing="2" cellspadding="2"  align="center" width="80%">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => 
                <td key={index} >                 
                  <div align="left">
                    <span class={(cell == '')? 'vapaana': ''}> {cell} {(cell == '')? "♥": ""}</span>                    
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TaulukkoKomponentti;