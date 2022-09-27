const answers = [
  "It is certain",
  "Reply hazy",
  "try again",
  "Don’t count on it",
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
];
const questionBtn = document.querySelector("#questionButton");
const answer = document.querySelector("#answer");

questionBtn.addEventListener("click", () => {
  const randomAnswers = answers[Math.floor(Math.random() * answers.length)];
  console.log(randomAnswers);
  answer.innerHTML = randomAnswers;
});
