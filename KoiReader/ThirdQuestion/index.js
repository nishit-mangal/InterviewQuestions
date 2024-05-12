import got from "got";
import fs from "fs";

const url = "https://httpbin.org/anything";

//max retry attempt
let failed = 0,
  maxFailed = 1;
const options = {
  timeout: {
    request: 10000,
  },
};
let response;
do {
  if (failed !== 0) console.log("\nRetrying...");
  try {
    response = await callApi();
    if (!response) throw "Error fetching data";
    break;
  } catch (err) {
    failed++;
    console.log(err);
  }
} while (failed <= maxFailed);

if (response) {
  await createFile(JSON.stringify(response));
}

async function callApi() {
  const response = await got(url, options).json();
  return response;
}
async function createFile(data) {
  console.log(data);
  let response = fs.writeFileSync("apiResponse.txt", data, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
  console.log("fileResponse", response);
}
