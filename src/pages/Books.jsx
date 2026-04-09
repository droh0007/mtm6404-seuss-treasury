import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Books() {
  const [books, setBooks] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("BOOK DATA:", data)
        setBooks(data)
      })
      .catch((err) => {
        console.error(err)
        setError("Failed to load books.")
      })
  }, [])

  return (
    <div>
      <h1>Dr. Seuss Books</h1>

      {error && <p>{error}</p>}

      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <Link to={`/books/${book.id}`}>
              <img src={book.image} alt={book.title} />
            </Link>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books