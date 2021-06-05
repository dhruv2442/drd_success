import { Redirect, Route, Switch } from 'react-router';
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';

const App = () => {
  return (
   <>
   <Navbar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/contact" component={Contact}/>
        <Route exact path ="/service" component={Service}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
   </>
  );
}

export default App;
