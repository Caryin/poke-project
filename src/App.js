import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catchboard from './pages/Catchboard';
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/LoginForm';
import NavBar from './components/NavBar';
import { useLogin } from './contexts/login-context';

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
