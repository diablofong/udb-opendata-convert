import fs from 'fs';

import csvtojson from 'csvtojson';

var Converter = csvtojson.Converter

var newConverter = new Converter({});

var csvfile = 'source/RPT01-2015-11-05.csv';

var saveFileName = 'output/csvtojson.json';

fs.createReadStream(csvfile).pipe(newConverter);

newConverter.on('end_parsed', function (jsonArray) {

  // 可開啟這行在 Command Line 觀看 data 內容
  console.log(jsonArray); //here is your result jsonarray 
  
  // 對 jsonArray 做處理，寫你的 code
  
  // 儲存成 JSON
  // fs.writeFile 使用 File System 的 writeFile 方法做儲存
  // 傳入三個參數（ 存檔名, 資料, 格式 ）
  // fs.writeFile( saveFileName, JSON.stringify( jsonArray ), 'utf8');
  console.log('csv to JSON done !!');

});
