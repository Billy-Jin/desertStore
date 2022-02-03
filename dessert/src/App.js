import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import { Route } from "react-router-dom";
import JoinForm from "./components/login/JoinForm";

function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/loginForm' component={LoginForm} />
      <Route exact path='/joinForm' component={JoinForm} />
      <Route exact path='/' component={Main} />
      <Footer />
    </div>
  );
}

export default App;
