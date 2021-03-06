import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Login/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import EmailVarify from './components/EmailVerify/EmailVarify';
import DoctorDetails from './components/DoctorDetails/DoctorDetails/DoctorDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/details/:doctorId">
            <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <PrivateRoute path="/servicedetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/emailverify">
            <EmailVarify></EmailVarify>
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
