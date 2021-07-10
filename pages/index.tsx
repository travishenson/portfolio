import React from 'react';
import {NextPage} from 'next';

import {Navbar} from '../components/molecules/navbar';
import {Footer} from '../components/molecules/footer';

const Index: NextPage = () => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      margin: '0 auto',
      overflow: 'hidden',
      width: '90%'
    }}>
      <Navbar />
      <h1>Hi, I'm Travis Henson.</h1>
      <p>I'm a JavaScript-focused web developer.</p>
      <hr style={{margin: '25px 0', width: '100%', maxWidth: '750px',}} />
      <p>Visit the links below to contact me:</p>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px', maxWidth: '650px', width: '90%'}}>
        <a href="https://github.com/travishenson" target="_new">GitHub</a>
        <a href="mailto:hello@travishenson.com" target="_new">Email</a>
        <a href="https://linkedin.com/in/travisghenson" target="_new">LinkedIn</a>
      </div>
      <Footer />
    </div>
  )
}

export default Index;