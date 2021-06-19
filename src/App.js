import Navbar from "./components/nav/navbar";
import Home from "./pages/home";
import Offers from "./pages/offers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntertainmentPage from "./pages/entertainments";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/offers" component={Offers}/>
          <Route exact path="/entertainment" component={EntertainmentPage}/>
        </Switch>
        
        <div className="h-700"/>
      </div>
    </Router>
    
  );
}

export default App;
