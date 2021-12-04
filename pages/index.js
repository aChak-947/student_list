//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import data from './mock-data.json'
import React, {useState, Fragment} from "react"
import {nanoid} from 'nanoid'
//import Link from 'next/link'
import ReadOnlyRow from './components/readOnlyRow'

export default function Home() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
        <form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact)=> (
                <Fragment>
                  <ReadOnlyRow 
                    contact = {contact}
                    handleDeleteClick={handleDeleteClick}
                  />

                </Fragment>
              ))}
              
            </tbody>
      
          </table>
        </form>
        
        <h2>Add a Student</h2>
        <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>

      {/* <h1 className="title">
        {' '}
        <Link href="/form">
          <a>Add Student</a>
        </Link>
      </h1> */}
    </div>
  )
}
