import { makeScene2D, Txt } from "@motion-canvas/2d";
import { createRef } from "@motion-canvas/core";

async function getDataFromServer(sheetID: string, range: string) {
  const response = await fetch(
    `http://localhost:3000/api/sheet-data?sheetID=${sheetID}&range=${range}`
  );
  const data = await response.json();
  return data;
}

export default makeScene2D(function* (view) {
  const spreadsheetId = ""; // Replace with your actual spreadsheet ID
  const range = ""; // Replace with your actual range

  const loadingText = createRef<Txt>();
  view.add(<Txt text="Loading data from Google Sheets..." ref={loadingText} />);

  const data = yield getDataFromServer(spreadsheetId, range);

  yield loadingText().text(data[0]);
});
