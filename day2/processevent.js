const questions=[
    "what is your Name",
    "what is your company name",
    "what is your city?"
]
const answers=[];

const ask=(i)=>{
    process.stdout.write(`\n\n\n ${questions[i]}`)//it will work like a console 
    process.stdout.write(`>`)

}
//standard event
process.stdin.on("data",(data)=>{
    process.stdout.write(data.toString().trim())

})
ask(0)