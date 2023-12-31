const pdfjs = import("pdfjs-dist/build/pdf");

pdfjs.then((pdfjs) => console.log(pdfjs));

export default class PDFJs {
  init = (source, element) => {
    const iframe = document.createElement("iframe");

    iframe.src = `/pdfjs-2.5.207-dist/web/viewer.html?file=${source}`;
    iframe.width = "100%";
    iframe.height = "100%";

    element.appendChild(iframe);
  };
}
