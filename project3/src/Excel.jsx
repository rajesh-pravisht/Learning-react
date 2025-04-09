import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelReader = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      // Read the first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert to JSON
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // `header: 1` gives raw cell data
      setExcelData(data);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      
      {excelData.length > 0 && (
        <table border="1" style={{ marginTop: "20px" }}>
          <tbody>
            {excelData.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExcelReader;
