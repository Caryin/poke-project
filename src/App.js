import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Catchboard from './components/Catchboard';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
//store
import { useLogin } from './store/login-context';

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  useEffect(() => {
    const value = localStorage.getItem('authentication');

    const parsedValue = JSON.parse(value);

    if (parsedValue && parsedValue.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const dashboard = (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/catch'>Catch</Link>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/catch' element={<Catchboard />} />
      </Routes>
    </BrowserRouter>
  );

  return <>{isLoggedIn ? dashboard : <LoginForm />}</>;
};

export default App;
