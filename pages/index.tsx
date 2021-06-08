import React from 'react';

const Index: React.FC = () => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      margin: '0 auto',
      overflow: 'hiden',
      width: '90%'
    }}>
      <h1>Hi, I'm Travis Henson.</h1>
      <p>I'm a JavaScript-focused web developer; my site is currently under construction.</p>
      <hr style={{margin: '25px 0', width: '100%', maxWidth: '750px',}} />
      <p>Visit the links below to contact me:</p>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px', maxWidth: '650px', width: '90%'}}>
        <a href="https://github.com/travishenson" target="_new">GitHub</a>
        <a href="mailto:hello@travishenson.com" target="_new">Email</a>
        <a href="https://linkedin.com/in/travisghenson" target="_new">LinkedIn</a>
      </div>
    </div>
  )
}

export {Index};