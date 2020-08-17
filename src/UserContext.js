import React from 'react';
import { TOKEN_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async function () {
    setData(null);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/');
  }, [navigate]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(json.profile);
    if (json.profile === 1) {
      navigate('/admin');
    } else {
      navigate('/cliente');
    }
  }

  async function userLogin(email, password) {
    const { url, options } = TOKEN_POST({
      email: email,
      password: password,
    });
    const response = await fetch(url, options);
    const json = await response.json();
    if (json.error) {
      alert('Usuario ou senha invalidos');
    } else {
      window.localStorage.setItem('token', json.access_token);
      getUser(json.access_token);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        if (json.id) {
          getUser(token);
        } else {
          userLogout();
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider value={{ userLogin, data, userLogout, login }}>
      {children}
    </UserContext.Provider>
  );
};
