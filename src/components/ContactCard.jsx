import { Link } from "react-router-dom"

function ContactCard({ contact }) {
  return (
    <div className="card d-flex justify-content-center mb-2" style={{ width: "18rem", height: "3rem"}}>
      <div className="card-body">
        <Link to={`/contact/${contact.id}`} className="card-link">{contact.firstName} {contact.lastName}</Link>
      </div>
    </div>
  )
}

export default ContactCard