import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catchboard from './components/Catchboard';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
//store
import { useLogin } from './store/login-context';

const AppRoute = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/catch' element={<Catchboard />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  useEffect(() => {
    const value = localStorage.getItem('authentication');
    const parsedValue = JSON.parse(value);
    if (parsedValue && parsedValue.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return <>{isLoggedIn ? <AppRoute /> : <LoginForm />}</>;
};

export default App;
