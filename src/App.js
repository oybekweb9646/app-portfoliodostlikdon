
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainPage from "./components/MainPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Admin from "./pages/Admin";
import {ToastContainer} from "react-toastify";
import AdminNews from "./components/AdminNews";
import AdminMenus from "./components/AdminMenus";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import {connect} from 'react-redux';
import {RingLoader} from "react-spinners";

function App(props) {
  return (
  <div>

<BrowserRouter>
    <Switch>
<Route exact path="/" component={MainPage}/>
<Route exact path="/home" component={Home}/>
<Route exact path="/category/:url" component={SecondPage}/>
<Route exact path="/category/:url/news/:newsUrl" component={ThirdPage}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/secondpage" component={SecondPage}/>
<Route exact path="/thirdpage" component={ThirdPage}/>
<PrivateRoute exact path="/admin" component={Admin}/>
<PrivateRoute exact path="/admin/news" component={AdminNews}/>
<PrivateRoute exact path="/admin/menus" component={AdminMenus}/>
<Route  component={NotFound}/>

    </Switch>
</BrowserRouter>
      <ToastContainer/>
      {props.pageLoading ?<div className="page-loader">
          <RingLoader
              loading={props.pageLoading}
              color="#008F48"
          />
      </div>
      : ""
      }
  </div>
  );
}

const mapStateToProps = (state) => {
    return {
        pageLoading: state.app.pageLoading
    }
}

export default connect(mapStateToProps, null )(App);
