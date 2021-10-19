import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './EmailVerify.css'

const EmailVarify = () => { 
    const {user} = useAuth()
    return (
        <Container className="EmailVerify">
            {
                user.emailVerified? <Redirect to="/home"></Redirect> : 
                <h3 className='text-red'>Verify Your Email & Refresh The Page...!</h3>
            }
        </Container>
    );
};

export default EmailVarify;