import chalk from "chalk"; //if you want to import chalk you need to  use extension (mjs) or type:module in package .json
import moment  from "moment"
console.log(chalk.blue("Hello world!"));
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
