import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../db";
import DeleteModal from "../components/DeleteModal";

function ContactDetailsView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const [contact, setContact] = useState({})
  const {firstName, lastName, company, email, phone, address, notes} = contact

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

  const handleDelete = () => {
    deleteDoc(doc(db, "contacts", id))
      .then(() => {
        console.log("Document deleted")
        navigate("/")
      })
  };

  return (
    <>
    {!showConfirm ? (
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h3>
            {firstName} {lastName}
          </h3>
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </Link>
        </div>
        <div>
          <div>
            <label>
              Email
            </label>
            <input
              className="form-control"
              value={email}
              disabled
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              className="form-control"
              value={phone}
              disabled
            />
          </div>
          <div>
            <label>Address</label>
            <input
              className="form-control"
              value={address}
              disabled
            />
          </div>
          <div>
            <label>Company</label>
            <input
              className="form-control"
              value={company}
              disabled
            />
          </div>
          <div>
            <label>Notes</label>
            <span style={{ display: "block", lineHeight: 1.5, fontWeight: 400 }}>
              <input
                className="form-control"
                value={notes}
                disabled
              />
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <Link
            to={`/edit/${id}`}
          >
            <div className="d-flex justify-content-between align-items-cneter">
              <button
                className="btn btn-outline-primary btn-sm"
              >
                Edit Contact
              </button>
            </div>
          </Link>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => setShowConfirm(true)}
          >
            Delete Contact
          </button>
        </div>
      </div>
      ) : (
        <DeleteModal
          contact={contact}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>

  );
}

export default ContactDetailsView