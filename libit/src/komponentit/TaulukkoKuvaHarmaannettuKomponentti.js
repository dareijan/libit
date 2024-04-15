const TaulukkoKuvaHarmaannettuKomponentti = ({ data }) => {
    const rows = data.map(item => Object.values(item));
  
    return (
      <table cellspacing="10" cellspadding="10" align="center">
        <tbody>
            <tr>
            {rows.map((row, index) => (
                row.map((cell, index) => 
                  <td key={index}>
                    <div align="center">
                      <span className="harmaannettu">
                        <img src={cell} css></img>
                      </span>
                    </div>
                  </td>
                )              
            ))}
            </tr>
        </tbody>
      </table>
    );
  };
  export default TaulukkoKuvaHarmaannettuKomponentti;