const TaulukkoKomponentti = ({ data }) => {
    const rows = data.map(item => Object.values(item));
  
    return (
      <table cellspacing="5" cellspadding="5"  align="center">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => 
                <td key={index}>
                  <div align="left">
                    {cell}
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