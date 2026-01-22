import React from "react";
import "./list.css";
import Iconlogo from "../image/logos_firebase.svg";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import NocontactImg from "../image/Hands_Contact.png";
import EditContact from "../image/editContact.png";
import DeleteContactimg from "../image/TrashCan.png";
import list_profile from "../image/list_profile.png";
import { useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Config/firebaseConfig";
import { Formik, Field, Form } from "formik";

const list = () => {
  const [Contact, setContact] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [NoContacts, setNoContacts] = useState(false);
  const [AddContact, setAddContact] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    const getContact = async () => {
      try {
        setNoContacts(true);
        const ContactCollection = collection(db, "Contact");

        onSnapshot(ContactCollection, (snapshot) => {
          const ContactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setNoContacts(false);

          setAllContacts(ContactList);
          setContact(ContactList);
          console.log(ContactList);
          return ContactList;
        });
      } catch (error) {
        setAddContact(false);

        console.error(error);
      }
    };
    getContact();
  }, []);

  const addContact = async (Contact) => {
    try {
      const ContactCollection = collection(db, "Contact");
      await addDoc(ContactCollection, Contact);
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteContact = async (Contact) => {
    try {
      await deleteDoc(doc(db, "Contact", Contact.id));
      alert("The contact has been deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const Editcontact = async (Contact) => {
    try {
      const ContactDoc = doc(db, "Contact", Contact.id);
      await updateDoc(ContactDoc, {
        Name: Contact.Name,
        Email: Contact.Email
      });
      alert("Contact Updated");
    } catch (error) {
      console.error(error);
    }
  };
  const filter = (e) => {
    const value = e.target.value;
    if (value === "") {
      setContact(allContacts);
    } else {
      const filteredContacts = allContacts.filter((contact) =>
        contact.Name.toLowerCase().includes(value.toLowerCase())
      );
      setContact(filteredContacts);
    }
  };

  return (
    <div className="List_container">
      <div className="top_container">
        <div className="icon_img">
          <img src={Iconlogo} alt="" />
        </div>
        <div className="list_heading">
          <h1>Firebase Contact App</h1>
        </div>
      </div>
      <div className="search">
        <div className="input_search">
          <input
            type="text"
            className="Input_setting"
            placeholder="Search Contact"
            onChange={filter}
          />
          <div className="seach_icon">
            <CiSearch size={30} color="gery" />
          </div>
        </div>
        <div className="add_contact">
          <CiCirclePlus
            size={45}
            color="black"
            onClick={() => {
              setIsEdit(false);
              setEditContact(null);
              setAddContact((prev) => !prev);
            }}
          />
        </div>
      </div>

      <div className="ContactContainer">
        {NoContacts ? (
          <div className="nocontact">
            <div className="ContactImg">
              <img src={NocontactImg} alt="" className="ContactImg_setting" />
            </div>
            <div className="heading_contact">
              <h1>No Contact Found</h1>
            </div>
          </div>
        ) : (
          Contact.map((contact) => {
            return (
              <div className="Contact_List" key={contact.id}>
                <div className="listImg">
                  <img src={list_profile} alt="" />
                </div>
                <div className="listDetail">
                  <div className="ContactName">
                    <span>{contact.Name}</span>
                  </div>
                  <div className="ContactEmail">
                    <span>{contact.Email}</span>
                  </div>
                </div>
                <div className="UpdateContact">
                  <div className="EditContact">
                    <img src={EditContact} alt=""
                    onClick={()=>{
                        setIsEdit(true);
                        setEditContact(contact);
                        setAddContact(true);
                    }}
                    />
                  </div>
                  <div className="DeleteContact">
                    <img
                      src={DeleteContactimg}
                      alt=""
                      onClick={() => {
                        DeleteContact(contact);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="Contact_popup">
        {AddContact &&(
          <div className="AddContact">
            <Formik
              initialValues={{
                Name: isEdit && editContact ? editContact.Name : "",
                Email: isEdit && editContact ? editContact.Email : "",
              }}
              onSubmit={(values) => {
                setAddContact((prev) => !prev);
                console.log(values);
                if (isEdit && editContact) {
                  Editcontact({ id: editContact.id, Name: values.Name, Email: values.Email });
                } else {
                  addContact({ Name: values.Name, Email: values.Email });
                }
                setIsEdit(false);
                setEditContact(null);
              }}
            >
              <Form>
                <div className="AddContactForm">
                  <span>Name</span>
                  <Field name="Name" type="text" className="AddContact_input" />
                </div>
                <div className="AddContactForm">
                  <span>Email</span>
                  <Field
                    name="Email"
                    type="Email"
                    className="AddContact_input"
                  />
                </div>
                <div className="btn">
                  <button type="submit">{isEdit ? "Update" : "Add"} Contact</button>
                </div>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default list;
