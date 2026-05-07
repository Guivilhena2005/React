import './App.css';
import MyButton from './components/Button/Button.jsx';
import AboutPage from './pages/About/About.jsx';
import Profile from './components/Profile/Profile.jsx';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import ShoppingList from './components/ShoppingList/ShoppingList.jsx';
import  AppRoutes  from './Routes.jsx';
import Header from './components/Header/Header.jsx';


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
      <Header />
      <AppRoutes/>
      <header className="App-header">
        <h1>Hello, React!</h1>
        <div>
          {content}
        </div>
        <MyButton />
        <AboutPage />
        <Profile />
        <ShoppingList />
      </header>
    </div>
  );

}

export default App;
