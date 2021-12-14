import './App.css';
import ExcelUpload from './components/excel_upload';
import ExcelTable from './components/excel_table';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();



  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <div className="App">
      <ExcelUpload setData={setData} ></ExcelUpload>
      <ExcelTable data={data}></ExcelTable>
    </div>
  );
}

export default App;
