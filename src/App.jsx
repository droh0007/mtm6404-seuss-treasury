import { Routes, Route, Link } from "react-router-dom"
import Books from "./pages/Books"
import BookDetails from "./pages/BookDetails"
import Quotes from "./pages/Quotes"
import "./App.css"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  )
}

export default App