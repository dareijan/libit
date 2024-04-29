const ViimeksiPaivitettyKomponentti = ({ data }) => {
  const headers = Object.keys(data[0]);
    const rows = data.map(item => Object.values(item));
  
    return (
      <table cellspacing="20" cellspadding="20" align="center">
        <tbody>
          <thead>
            <tr>
              {headers.map(header => <td>{header}</td>)}
            </tr>
          </thead>
          {rows.map((row, index) => (
                row.map((cell, index) => 
                  <td key={index}>
                    <div align="center">{cell} 
                    </div>
                  </td>
                )              
            ))}
        </tbody>
      </table>
    );
  };
  
  export default ViimeksiPaivitettyKomponentti;