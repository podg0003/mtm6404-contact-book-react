import { useEffect, useState } from "react"
import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom"
import ContactForm from "../components/ContactForm"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import db from "../db"

function EditContact() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [contact, setContact] = useState({})

  useEffect(() => {
    getDoc(doc(db, 'contacts', id))
      .then(document => {
        setContact({
          firstName: document.data().firstName,
          lastName: document.data().lastName,
          company: document.data().company,
          email: document.data().email,
          phone: document.data().phone,
          address: document.data().address,
          notes: document.data().notes
        })
      })
  }, [])

  if (!contact) {
    return (
      <div>
        <i className="bi bi-person-x"></i>
        <h5>Contact not found</h5>
        <Link to="/" className="btn btn-outline-dark mt-2">
          Home
        </Link>
      </div>
    )
  }

  const handleSubmit = (formData) => {
    updateDoc(doc(db, "contacts", id), {...formData})
      .then(() => {
        console.log("Document updated")
        navigate(`/contact/${id}`)
      })
  }

  if (contact) {
    return <ContactForm mode="edit" contact={contact} onSubmit={handleSubmit} />
  }
}

export default EditContact