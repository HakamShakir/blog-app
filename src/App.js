
import Blogs from './component/Blogs'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './config/auth';
import PrivateRoute from './config/PrivateRoute';
import Login from './component/admin/Login';
import AdminView from './component/admin/AdminView';
import './index.css';


function App() {
  return (
    <AuthProvider>
      <Router>
      <Route exact path="/" component={Blogs} />
        <PrivateRoute path="/admin-panel" component={AdminView} />
        <Route path="/admin-login" component={Login} />
       
    </Router>
    </AuthProvider>
    
)

}
 


export default App;
