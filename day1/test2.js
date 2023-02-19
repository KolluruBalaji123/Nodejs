function greet(){
    console.log("text")
}
function sum(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
sum(7,9);
greet();
sub(9,7)
module.exports={
    greet,
    sum,
    sub
}