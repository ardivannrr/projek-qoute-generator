const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Key",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
];

const newQuote = document.getElementById("quote");
const newAuthor = document.getElementById("author");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomQuote];
  newQuote.innerHTML = `"${selectedQuote.quote}"`;
  newAuthor.innerHTML = `— ${selectedQuote.author}`;
});
