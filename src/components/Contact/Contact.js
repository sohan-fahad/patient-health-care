import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <section className="contact_area">
                <div className="inner_contact">
                    <h2>Contact With Us!</h2>
                    <div className="main_contact">
                        <form>
                            <input type="text" placeholder="Name*" />
                            <input type="email" placeholder="email*" />
                            <textarea placeholder="Message"></textarea>
                            <button type="submit" className="btn-contact">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;