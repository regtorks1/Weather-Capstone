import Login from './Login';
import './Login.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  ForgotPassword  from './Forgot Password/forgotPassword';
import {Main} from './main/main';
import Logout from './Logout/logout'

  const App = () => {
     
  
  return(
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path = "logout" component = {Logout} />  
    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App