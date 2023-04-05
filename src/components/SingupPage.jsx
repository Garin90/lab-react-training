import React, { useState } from 'react';

function SingupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('english');
  const [finalEmail, setFinalEmail] = useState('');

  const handleEmailOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePasswordOnChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleNationalityOnChange = (e) => {
    setNationality(e.target.value);
    
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFinalEmail(email)
    
  }

  return (
    <div className="d-flex flex-column border">
      <form onSubmit={handleFormSubmit}>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailOnChange} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordOnChange}
          />
          {/* Dropdown menu */}
          <label htmlFor="nationality">Nationality</label>
          <select name="nationality" id="nationality" onChange={handleNationalityOnChange}>
            <option value="english">English</option>
            <option value="germany">Germany</option>
            <option value="french">French</option>
          </select>
          <button type="submit">Sign up</button>
      </form>
        
        {nationality === 'english' && <p>Hello</p>}
        {nationality === 'germany' && <p>Hallo</p>}
        {nationality === 'french' && <p>Bonjour</p>}
    
        {finalEmail ? <p>Your email is {finalEmail}</p> : 'Hola Cristian'}
    </div>
  );
}

export default SingupPage;
