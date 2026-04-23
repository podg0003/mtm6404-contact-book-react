
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function ContactForm({ mode, contact, onSubmit }) {
  const navigate = useNavigate();
  const isEdit = mode === "edit";

  const [form, setForm] = useState({
    firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      company: "",
      notes: "",
  });

  useEffect(() => {
    if(contact) {
      setForm({
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        company: contact.company,
        notes: contact.notes,
      })
    }
  }, [contact])

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div>
      <h3>{isEdit ? "Edit Contact" : "New Contact"}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>First Name *</label>
            <input
              name="firstName"
              className="form-control"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name *</label>
            <input
              name="lastName"
              className="form-control"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email Address *</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              name="phone"
              className="form-control"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Company</label>
            <input
              name="company"
              className="form-control"
              value={form.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              name="address"
              className="form-control"
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Notes</label>
            <textarea
              name="notes"
              className="form-control"
              rows="3"
              placeholder="Any additional notes…"
              value={form.notes}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="mt-2 d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-outline-dark btn-sm"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-outline-primary btn-sm">
            {isEdit ? "Save Changes" : "Add Contact"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm