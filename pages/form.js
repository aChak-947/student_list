//import styles from '../styles/formStyle.css'
import data from './mock-data.json'
import React, {useState} from "react"
import {nanoid} from 'nanoid'
import Link from 'next/link'


export default function StudentForm() {

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

    return (
        <div>
            <h2>Add a Student</h2>
            <div className="student-add-form">
                <form onSubmit={handleAddFormSubmit}>
                    <input
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."
                    className="student-add-form-field"
                    onChange={handleAddFormChange}
                    />
                    <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter an addres..."
                    className="student-add-form-field"
                    //onChange={handleAddFormChange}
                    />
                    <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    className="student-add-form-field"
                    onChange={handleAddFormChange}
                    />
                    <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    className="student-add-form-field"
                    onChange={handleAddFormChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}