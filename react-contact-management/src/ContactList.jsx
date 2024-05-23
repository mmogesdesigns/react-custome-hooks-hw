import React, { useContext } from 'react'
import { ContactContext } from "./ContactContext";
import './App.css'

const ContactList = () => {
    const {contacts, setSelectedContact} = useContext(ContactContext);
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map (contact =>(
            <li className='list' key={contact.id} onClick={() => setSelectedContact(contact)}>
                {contact.name} 
            
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
