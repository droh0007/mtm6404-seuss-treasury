import { useEffect, useState } from "react"

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then(res => res.json())
      .then(data => {
        console.log("QUOTES:", data)
        setQuotes(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Quotes</h1>

      <div className="quotes-list">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p>"{quote.text}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quotes