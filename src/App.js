import './App.css';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import  AppRoutes  from './Routes.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  let content;
  let isLoggedIn = false;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div className="App">
      <AppRoutes/>
      <header className="App-header">
        <h1>Hello, React!</h1>
        
        <Footer />
      </header>
    </div>
  );

}

export default App;
