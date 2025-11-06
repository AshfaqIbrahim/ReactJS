import { useEffect, useState } from "react";


function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes.slice(0,10));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <>
      {quotes.map((quote,index) => (
        <h1 key={index}>{quote.id}. {quote.quote}</h1>
      ))}
    </>
  );
}

export default App;