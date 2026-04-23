import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  return (
    <div>
      {contacts.length > 0 ? (
        <div>
          {contacts.map((contact) => {
            return <ContactCard key={contact.id} contact={contact} />
          })}
        </div>
      ) : (
        <div
          className="text-center py-4 text-muted"
          style={{ fontSize: ".85rem" }}
        >
          No contacts found.
        </div>
      )}
    </div>
  );
}

export default ContactList