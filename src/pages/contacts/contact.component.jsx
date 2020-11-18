import React from 'react'

import './contact.styles.scss';

import {ReactComponent as GitHubLogo} from '../../assets/github.svg'
import {ReactComponent as LinkedInLogo} from '../../assets/linkedin.svg'
import {ReactComponent as FacebookLogo} from '../../assets/facebook.svg'
import {ReactComponent as InstaLogo} from '../../assets/instagram.svg'


const ContactsPage=()=>(
<div className='contact'>
<div className='contactAt'>Rajesh Venkatesan </div>
<h1 className='name'>Contact Me At</h1>
<a href='mailto:rajimanu1626@gmail.com'>rajimanu1626@gmail.com</a>
<h2 className='contactNo'>9976367152</h2>
<div className='socialMedia'>
<div><a href='https://github.com/rajimanu1626/'><GitHubLogo className='logo'/></a></div>
<div><a href='https://www.linkedin.com/in/rajesh-venkatesan1626/'><LinkedInLogo className='logo'/></a></div>
<div><a href='https://www.facebook.com/rajimanu123'><FacebookLogo className='logo'/></a></div>
<div><a href='https://www.instagram.com/rajesh_venkatesan_16/'><InstaLogo className='logo'/></a></div>
</div>

</div>
);

export default ContactsPage;