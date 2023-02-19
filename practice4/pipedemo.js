const fs =require("fs")
const readStreamObj = fs.createReadStream("./mybigfile.txt")
const writestreamobj =fs.createWriteStream("./genreatethroughpipe.txt")
readStreamObj.pipe(writestreamobj);
