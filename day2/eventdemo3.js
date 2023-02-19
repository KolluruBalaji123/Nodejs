const newname = require("events");
const myname = new newname();

// event Mappaing
myname.on("gun", (name) => {
  console.log("this is first function");
  console.log(`name:${name}`);
});
myname.on("fun", (date) => {
  // anonymous functions for  dirctly mapping
  console.log("this is second function");
  console.log(`date:${date}`);
});
myname.on("Bun", (surname) => {
  console.log("this is third function");
  console.log(`surname:${surname}`);
});
//Event Triggering
myname.emit("gun", "Balaji");
myname.emit("fun", "14-02-2023");
myname.emit("Bun", "Kolluru");
