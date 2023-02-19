const questions = [
  "what  are your hobbies",
  "who is your favouraite hero",
  "what is your aim",
];
const answers = [];
const ask = (i) => {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write(`>`);
};
ask(0)
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});
process.on("exit", () => {
  process.stdout.write(`\n\n\n`);
  process.stdout.write(
    `My hobbies are  ${answers[0]}, My favourite hero is ${answers[1]}, my aim is ${answers[2]}`
  );
});
