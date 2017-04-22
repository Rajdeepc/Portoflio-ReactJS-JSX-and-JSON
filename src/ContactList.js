import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
    render() {
        return (
           <div className="wrapper_div">
               {this.props.contacts.map((contact)=>{
                   return  <Contact contact={contact}
                   key={contact.id}
                   />
               })}
           
               </div>
        );
    }
}

export default ContactList;
