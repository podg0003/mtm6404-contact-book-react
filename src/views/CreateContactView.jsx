import { useNavigate } from "react-router-dom"
import ContactForm from "../components/ContactForm"
import { addDoc, collection } from "firebase/firestore"
import db from "../db"

function CreateContact() {
  const navigate = useNavigate()

  const handleSubmit = (formData) => {
    const c = collection(db, "contacts")
    addDoc(c, {...formData})
      .then(document => {
        navigate(`/contact/${document.id}`)
      })
  }

  return <ContactForm mode="new" onSubmit={handleSubmit} />
}

export default CreateContact