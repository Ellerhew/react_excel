import React from 'react';

const ExcelTable = ({ data }) => {
  const getHeader = () => {
    if ((data === undefined) || (data === [])) {
      return;
    }
    return (
      <tr>
        {Object.keys(data[0]).map((item) =>
          <td>{item}</td>
        )}
      </tr>
    )
  }

  const getBody = () => {
    if ((data === undefined) || (data === [])) {
      return;
    }
    return data.map((item, index) => (
      <tr>
        {Object.keys(item).map((key) => (
          <td>{item[key]}</td>
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