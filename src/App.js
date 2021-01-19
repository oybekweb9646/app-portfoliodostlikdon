
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainPage from "./components/MainPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Admin from "./pages/Admin";
function App() {
  return (
  <div>

<BrowserRouter>
    <Switch>
<Route exact path="/" component={MainPage}/>
<Route exact path="/home" component={Home}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/secondpage" component={SecondPage}/>
<Route exact path="/thirdpage" component={ThirdPage}/>
<Route exact path="/admin" component={Admin}/>

    </Switch>
</BrowserRouter>
  </div>
  );
}

export default App;
