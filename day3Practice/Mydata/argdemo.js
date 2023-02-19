const yargs =require('yargs')
const {hideBin} =require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
if(argv.ships > 3 && argv.distance < 50){
    console.log("my name is Balaji")
}else{
    console.log("my name is argv")
}