import '../Styles/Css/App.css';
import { useEffect, useState } from 'react';

const category = 'success';
const apiKey = 'HDkAqbGgWzD4ApoIUqCl1Q==77tdi7Q7T8rjLfPB';

function QuoteApi() {
  const [quote, setQuote] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.length > 0) {
            setQuote(json[0]);
          } else {
            setHasError(true);
          }
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {' '}
      <h3 className="quote">
        {quote.quote}
        <br />
        <span className="author">
          by:
          {quote.author}
        </span>
      </h3>
    </>
  );
}

export default QuoteApi;
