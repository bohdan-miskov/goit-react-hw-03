import { useState, useMemo, useEffect } from "react";
import { useDebounce } from "use-debounce";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import contacts from "../../contacts.json";
import { nanoid } from "nanoid";

function App() {
  const CONTACTS_KEY = "contactList";
  const [contactList, setContactList] = useState(() => {
    const data = localStorage.getItem(CONTACTS_KEY);
    if (data != null) {
      return JSON.parse(data);
    }
    return contacts;
  });

  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 500);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contactList));
  }, [contactList]);

  const addContacts = (values) => {
    setContactList((prevContacts) => {
      return [
        ...prevContacts,
        {
          id: nanoid(),
          name: values.username,
          number: values.number,
        },
      ];
    });
  };

  const removeContact = (id) => {
    setContactList((prevContacts) => {
      return prevContacts.filter((contact) => contact.id != id);
    });
  };

  const updateSearch = (value) => setSearch(value);

  const viewContacts = useMemo(() => {
    return contactList.filter((contact) =>
      contact.name.toLowerCase().includes(debounceSearch.toLowerCase())
    );
  }, [debounceSearch, contactList]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContacts} />
      <SearchBox searchValue={search} updateSearch={updateSearch} />
      <ContactList contactList={viewContacts} removeContact={removeContact} />
    </>
  );
}

export default App;
