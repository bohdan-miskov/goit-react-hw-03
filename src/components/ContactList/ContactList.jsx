import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactList, removeContact }) {
  return (
    <ul className={css.container}>
      {contactList.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </ul>
  );
}
