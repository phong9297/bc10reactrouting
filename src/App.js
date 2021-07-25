import "./App.css";
import AboutPage from "./containers/HomeTemplate/AboutPage";
import HomePage from "./containers/HomeTemplate/HomePage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNoFound from "./containers/PageNotFound";
import Navbar from "./containers/HomeTemplate/_components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        {/* Trang chủ - localhost:3000 */}
        <Route exact path="/" component={HomePage} />

        {/* Trang about - localhost:3000/about */}
        <Route path="/about" component={AboutPage} />

        {/* Trang listmovie - localhost:3000/list-movie */}
        <Route path="/list-movie" component={ListMoviePage} />

        {/* Trang không tồn tại - để cuối cùng*/}
        <Route path="" component={PageNoFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
