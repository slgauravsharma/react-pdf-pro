import React, { Component } from "react";
import "./App.css";
import PDFViewer from "./components/PDFViewer";
import PDFJSBackend from "./backends/pdfjs";
import localPDF from './test.pdf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PDFViewer
          backend={PDFJSBackend}
         // src="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf"
         src={localPDF}
        />
      </div>
    );
  }
}

export default App;
