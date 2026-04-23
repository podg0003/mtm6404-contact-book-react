function SearchBar({ search, onChange }) {
  return (
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => onChange(e.target.value)} />
    </form>
  )
}

export default SearchBar