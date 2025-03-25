import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
    
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:{username} {(e) => setUsername(e.target.value)}{" "}
            <input />
          </label>
          <label>
            Password:{password} {(e) => setPassword(e.target.value)}{" "}
            <input />
          </label>
          <button>Submit</button>
        </form>
        
     
    </>
  );
}
