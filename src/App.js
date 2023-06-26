import logo from './logo.svg';
import './App.css';
import Userlogin from './User/userlogin';
import SignUpPage from './User/usersignup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Userlogin/> */}
        <SignUpPage />
      </header>
    </div>
  );
}

export default App;
