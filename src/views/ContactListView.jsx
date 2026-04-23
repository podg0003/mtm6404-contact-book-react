import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { query, collection, onSnapshot, orderBy } from "firebase/firestore"
import ContactList from "../components/ContactList"
import db from "../db.js"
import SearchBar from "../components/SearchBar.jsx"

function ContactListView() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")
  const [filteredContacts, setFilteredContracts] = useState([])

  useEffect(() => {
    const q = query(collection(db, "contacts"), orderBy("firstName"))
    onSnapshot(q, (snapshot) => {
      const data = []
      snapshot.forEach((doc) => data.push({
        id: doc.id,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
        company: doc.data().company,
        email: doc.data().email,
        phone: doc.data().phone,
        address: doc.data().address,
        notes: doc.data().notes
      }))
      setContacts(data)
      setFilteredContracts(data)
    })
  }, [])

  useEffect(() => {
    const results = contacts.filter(contact => {
      const searchField = `${contact.firstName.toLowerCase()} ${contact.lastName.toLowerCase()}`
      return searchField.includes(search.toLowerCase())
    })
    setFilteredContracts(results)
  }, [search])

  return (
    <div>
      <h3>All Contacts</h3>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <SearchBar search={search} onChange={setSearch} />
        <Link to="/new">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </Link>
      </div>
      <ContactList contacts={filteredContacts} />
    </div>
  )
}

export default ContactListView
