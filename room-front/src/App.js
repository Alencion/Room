import React from 'react';
import axios from 'axios';

function App() {
  const logout = () => {
    axios.post('/logout').then(response => {console.log(response)});
  }

  return (
    <div className="App">
      <div>
        With GitHub: <a href="/oauth2/authorization/github">click here</a>
      </div>
      <div>
        With Google: <a href="/oauth2/authorization/google">click here</a>
      </div>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default App;
