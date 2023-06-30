import React, {useState} from 'react'

function App() {
  const [page, setPage] = useState("Home")
  return (
    <div className='App'>
      <nav>
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("Politics")}>Politics</button>
        <button onClick={() => setPage("Entertainment")}>Entertainment</button>
        <button onClick={() => setPage("Login")}>Login</button>
        <button onClick={() => setPage("Register")}>Register</button>
      </nav>
      <h1>{page}</h1>
    </div>
  );
}

export default App;
