import {useState} from 'react'
import Authenticate from './Component/Authenticate';
import SignUpForm from './Component/SignUpForm';


export default function App() {

  const [token, setToken] = useState(null);

  return (
    <>
    
    <SignUpForm token={token} setToken={setToken} />
            
    <Authenticate token={token} setToken={setToken} />
    </>
  );
}


