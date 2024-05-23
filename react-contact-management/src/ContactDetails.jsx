import React, { useContext } from 'react'
import { ContactContext } from "./ContactContext";

const ContactDetails = () =>{
    const {selectedContact} = useContext(ContactContext);

    if (!selectedContact){
        return <div>Select a contact to see the details</div>
    }
  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {selectedContact.name}</p>
      <p><strong>Email:</strong> {selectedContact.email}</p>
      <p><strong>Phone:</strong> {selectedContact.phone}</p>
    </div>
  )
}

export default ContactDetails
