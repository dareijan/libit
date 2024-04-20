const TaulukkoKuvaHarmaannettuKomponentti = ({ data }) => {
    const rows = data.map(item => Object.values(item));
  
    return (
      <table cellspacing="10" cellspadding="10" align="center">
        <tbody>
        {rows.map((row, index) => (
            row.map((cell, index) =>   
            <tr>
                  <td key={index}>
                    <div align="center">
                      <span className="harmaannettu">
                        <img src={cell} width="200"></img>
                      </span>
                    </div>
                  </td>
            </tr>
                )              
              ))}            
        </tbody>
      </table>
    );
  };
  export default TaulukkoKuvaHarmaannettuKomponentti;