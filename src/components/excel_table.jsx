import React from 'react';

const ExcelTable = ({ data }) => {
  const getHeader = () => {
    if ((data === undefined) || (data === [])) {
      return;
    }
    return (
      <tr>
        {Object.keys(data[0]).map((item, index) =>
          <td key={index}>{item}</td>
        )}
      </tr>
    )
  }

  const getBody = () => {
    if ((data === undefined) || (data === [])) {
      return;
    }
    return data.map((item, index) => (
      <tr key={index}>
        {Object.keys(item).map((key, index) => (
          <td key={index}>{item[key]}</td>
        ))
        }
      </tr>))
  }


  return (
    <table>
      <thead>
        {getHeader()}
      </thead>
      <tbody>
        {getBody()}
      </tbody>
    </table>
  );
};

export default ExcelTable;