import React from "react";

function About() {
  return <div>About</div>;
}

export default About;

// import React, { useEffect, useState } from "react";

// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

// import ExcelViewer from "excel-viewer";
// import axios from "axios";

// export default function About() {
//   const [image, setImage] = useState("");

// new ExcelViewer("#excel-view", "http://example.com/test.xls", {
//   theme: "dark",
//   lang: "zh_cn",
// });

// useEffect(() => {
//   axios({
//     url: "https://main-bucket-138379163455.s3.us-east-2.amazonaws.com/Clerton/cota%C3%A7%C3%A3o%20materiais%20chesf.xlsx?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJIMEYCIQDshFFR5GlJM6X%2Byz8kTdFwRUwekCYRxj2fMGL%2BFHybWAIhAMSGMYdNZFUL96r1QPtij4viwuqmbGD5InuxV0srTPPpKoQDCI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTM4Mzc5MTYzNDU1IgxKXiIORRJeqNfYgeEq2AISJGx11Z0T8Foa15EYjhfv2sVDYU7jDyc%2F7hz9fMxl6AEhpaiT3ntWf7smOJ%2FWUYa8e2NAGYjouR5Z1FrKh2qYWtqtUDY8AcUheiYSxFTpQpAK0tizfDH9aYF3xpWvDCqGFHxUyLE8WPrdqKmkjBdZ09tYZNCs%2B5hfX%2F3EZ%2FoLB81RGX%2FHn4ZbaWoynSCqO72kbaIpe2s9fSY9tmOh6VW2wBVsljmJeTRSb6GYUAecwNW3jkgJGouPGf1xT%2FobIc%2Bs%2B9H9Oi%2BXutnG1Fl3K678pDDXx9wx7tq7eTPIHhBoJ14%2Fa2JeIHJIWdF7ZMw7WbSZq4Tdza%2F1BWSajDDLTWiLx9%2FWVfysw7J9WiMCih5x3uX%2BkIMcgxOZukyCPboOrhm1febEpU7fF0IzvKxhTfzM1wrFQsu%2B0TyK8ro085WWH7N0669nKyudl5DC0hjv%2BiLsDjFh3FCh8TDviP2fBjqyAjdT1GyMNAjIms0drOi%2B9yIgTUQR9bic5i9O%2BbWF3XKJMzbGOT4DaDDMBXmQ8znkOa%2BsshRgiGMfleLq%2BMJbQMV86R1pP25po9h30aEqAZu2c8JV9Hjpv%2FoGQ3EPM9SgVnC1LYhMIqOKLUseYz%2FU8HsMXOOkME%2FMgflDkqpe2ghYlK2xJmEVe%2FahFkZlSkMP5QbxUBnETpcEPNenVG1UkiIH5dxhHz8E3g6ob57fRiqP%2BKwtKEM1JE5DSZLs3uz7wZ9FYdKqvWL5EZzWKyswSnUnQVEPu7Q7aQRGYrrHtGX4hB3ZIpLweMtql9Q3tJXq0S%2B6kFZKg6%2F0U3NzPL98Ix30avCHAiP9bzpvhpDZYSGw1fRMo3CWgg7Ds%2BAIWqe3zXC2OTvbM5B6UZUWRjNuf7p8RQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T182833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIASAOAKO476MFF3N5M%2F20230301%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=02c5814ea04b5bb70801ff95f527e291241c4aab3e8ce91646461afee826b17d.xlsx",
//     method: "GET",
//     // headers: { "Authorization": "Your Authorization Token" }, // authorization token
//     responseType: "arraybuffer",
//   }).then((res) => {
//     new ExcelViewer("#excel-view", res.data);
//   });
//   .then((res) => res.blob())
//   .then((res) => generateURL(res));

// function generateURL(blob) {
//   const url = URL.createObjectURL(blob);

//   console.log(url); // e.g. blob:null/ac27e970-43f0-41d1-a662-9268c0849f40
// }
// fetch(
//   "https://picsum.photos/400/400"
//   // "https://main-bucket-138379163455.s3.us-east-2.amazonaws.com/Clerton/cota%C3%A7%C3%A3o%20materiais%20chesf.xlsx?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJIMEYCIQDshFFR5GlJM6X%2Byz8kTdFwRUwekCYRxj2fMGL%2BFHybWAIhAMSGMYdNZFUL96r1QPtij4viwuqmbGD5InuxV0srTPPpKoQDCI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTM4Mzc5MTYzNDU1IgxKXiIORRJeqNfYgeEq2AISJGx11Z0T8Foa15EYjhfv2sVDYU7jDyc%2F7hz9fMxl6AEhpaiT3ntWf7smOJ%2FWUYa8e2NAGYjouR5Z1FrKh2qYWtqtUDY8AcUheiYSxFTpQpAK0tizfDH9aYF3xpWvDCqGFHxUyLE8WPrdqKmkjBdZ09tYZNCs%2B5hfX%2F3EZ%2FoLB81RGX%2FHn4ZbaWoynSCqO72kbaIpe2s9fSY9tmOh6VW2wBVsljmJeTRSb6GYUAecwNW3jkgJGouPGf1xT%2FobIc%2Bs%2B9H9Oi%2BXutnG1Fl3K678pDDXx9wx7tq7eTPIHhBoJ14%2Fa2JeIHJIWdF7ZMw7WbSZq4Tdza%2F1BWSajDDLTWiLx9%2FWVfysw7J9WiMCih5x3uX%2BkIMcgxOZukyCPboOrhm1febEpU7fF0IzvKxhTfzM1wrFQsu%2B0TyK8ro085WWH7N0669nKyudl5DC0hjv%2BiLsDjFh3FCh8TDviP2fBjqyAjdT1GyMNAjIms0drOi%2B9yIgTUQR9bic5i9O%2BbWF3XKJMzbGOT4DaDDMBXmQ8znkOa%2BsshRgiGMfleLq%2BMJbQMV86R1pP25po9h30aEqAZu2c8JV9Hjpv%2FoGQ3EPM9SgVnC1LYhMIqOKLUseYz%2FU8HsMXOOkME%2FMgflDkqpe2ghYlK2xJmEVe%2FahFkZlSkMP5QbxUBnETpcEPNenVG1UkiIH5dxhHz8E3g6ob57fRiqP%2BKwtKEM1JE5DSZLs3uz7wZ9FYdKqvWL5EZzWKyswSnUnQVEPu7Q7aQRGYrrHtGX4hB3ZIpLweMtql9Q3tJXq0S%2B6kFZKg6%2F0U3NzPL98Ix30avCHAiP9bzpvhpDZYSGw1fRMo3CWgg7Ds%2BAIWqe3zXC2OTvbM5B6UZUWRjNuf7p8RQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T182833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIASAOAKO476MFF3N5M%2F20230301%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=02c5814ea04b5bb70801ff95f527e291241c4aab3e8ce91646461afee826b17d"
// )
//   .then((res) => {
//     res.blob();
//   })
//   .then((blob) => {
//     console.log(blob);
//     const url = URL.createObjectURL(blob);
//     console.log(url);
//     const img = new Image();
//     img.src = url;
//     img.onload = () => {
//       setImage(image);
//       // document.body.appendChild(img)
//     };
//   });

// function handler(blob) {
//   const url = URL.createObjectURL(blob);
//   const img = new Image();
//   img.src = url;
//   img.onload = () => {
//     setImage(image);
//     // document.body.appendChild(img)
//   };
// }
// }, []);

// const docs = [
//   { uri: "/test.pdf" }, // Local File
//   { uri: "https://url-to-my-pdf.pdf" }, // secure remote File
// ];

// return (
//   <div>
//     <div id="excel-view"></div>
{
  /* <img src={image} /> */
}
{
  /* <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />

      <main>
        <h1>Document Viewer</h1>
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
      </main> */
}
// </div>
//   );
// }
