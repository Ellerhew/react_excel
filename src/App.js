import XLSX from 'xlsx';
import './App.css';

function App() {
  const readExcel = (e) => {
    const input = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      const data = reader.result;
      const workBook = XLSX.read(data, { type: 'binary' });
      workBook.SheetNames.forEach((sheetName) => {
        console.log('SheetName: ' + sheetName);
        const rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
        console.log(JSON.stringify(rows));
      })
    }

    reader.readAsBinaryString(input.files[0]);
  }
  return (
    <div className="App">
      <input type="file" onChange={readExcel}></input>
    </div>
  );
}

export default App;
