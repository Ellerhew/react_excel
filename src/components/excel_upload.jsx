import React from 'react';
import XLSX from 'xlsx';

const ExcelUpload = ({ setData }) => {
  const readExcel = (e) => {
    const input = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      const data = reader.result;
      const workBook = XLSX.read(data, { type: 'binary' });
      workBook.SheetNames.forEach((sheetName) => {

        console.log('SheetName: ' + sheetName);
        const rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
        console.log(rows);
        setData(rows)
        // const toHtml = XLSX.utils.sheet_to_html(workBook.Sheets[sheetName], {
        //   header: ''
        // });

      })

    }

    reader.readAsArrayBuffer(input.files[0]);
  }
  return (
    <div>
      <input type="file" onChange={readExcel}></input>
    </div>
  );
};

export default ExcelUpload;