import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="inner_contact">
                <h2>Quick Contact</h2>
                <div className="main_contact">
                    <form action="">
                        <input type="text" placeholder="Name*" />
                        <input type="email" placeholder="email*" />
                        <input type="text" placeholder="Phone*" />
                        <input type="text" placeholder="Company" />
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="Contact Now" className="btn-contact"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;