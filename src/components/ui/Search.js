import { useState } from "react"

const Search = ({ getQuery }) => {
  const [text, setText] = useState("")

  const onChange = (q) => {
    console.log('in onChange... text =', text)
    setText(q)
    getQuery(q)
  }

  return (
    <section className="search">
      <form>
        <input
         type="text"
         className="form-control"
         value={text}
         onChange={(e) => onChange(e.target.value)}
         placeholder="Search Characters"
         autoFocus
        />
      </form>
    </section>
  )
}

export default Search
