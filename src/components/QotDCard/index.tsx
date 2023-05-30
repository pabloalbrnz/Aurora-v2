import "./style.css";

interface IQotDCard {}

export function QotdCard() {
  const quotes = [
    { quote: "It's me, Mario!!", author: "Super Mario", category: "Games" },
    {
      quote: "The death is like the wind, always by my side...",
      author: "Yasuo",
      category: "Games",
    },
    {
      quote: "May the force be with you!",
      author: "Obi-Wan Kenobi",
      category: "Movies",
    },
    {
      quote: "Never gonna give you up, never gonna let you down...",
      author: "Rick Astley",
      category: "Music",
    },
    {
      quote: "Die being hero or live to turn villain.",
      author: "Alfred",
      category: "Pop Culture",
    },
  ];

  const randomQuote = Math.floor(Math.random() * quotes.length);

  const quote = quotes[randomQuote];

  return (
    <div className="qotd-wrapper">
      <div className="qotd-quote">
        <span className="qotd-quote-string">{`"${quote.quote}"`}</span>
      </div>
      <div className="qotd-quote-info">
        <span className="qotd-category-string">{quote.category}</span>
        <span className="qotd-author-string">{`― ${quote.author}`}</span>
      </div>
    </div>
  );
}
