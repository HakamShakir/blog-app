import { useState } from "react";

import { Redirect, withRouter } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
             const user = await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successful");
            setCurrentUser(user);
      }  
      catch(error){
      alert(error.message);
    
  };
    
}


    if (currentUser) {
        return <Redirect to="/admin-panel" />;
}


return (
    <div className="d-flex justify-center items-center h-screen bg-blue-400">
      
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2 h-1/2 "  onSubmit={(e) => handleLogin(e)}>
    <div className="mb-4">
      <label className="block text-grey-darker text-2xl font-bold mb-2" htmlFor="email">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-2xl font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"  onChange={(e) => setPassword(e.target.value)}/>
    
    </div>
    <div className="flex items-center justify-between">
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">
        Sign In
      </button>
    </div>
</form>
       

    </div>
    )
};

export default withRouter(Login);