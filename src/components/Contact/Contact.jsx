import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";

export default function Contact({ contact, removeContact }) {
  return (
    <li className={css.container}>
      <div>
        <div>
          <IoPerson className={css.icon} />
          <p className={css.info}>{contact.name}</p>
        </div>
        <div>
          <BsFillTelephoneFill className={css.icon} />
          <a className={css.info} href={`tel:${contact.number}`}>
            {contact.number}
          </a>
        </div>
      </div>
      <button
        className={css.btnRemove}
        type="button"
        onClick={() => removeContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
