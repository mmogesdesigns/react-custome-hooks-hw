import React from 'react'
import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import './App.css'

const App = () => {

  return (
   <ContactProvider>
    <div className='App'>
      <h1>Contact Managment App</h1>
      <ContactList/>
      <ContactDetails/>
    </div>
   </ContactProvider>
      
  )
}

export default App
