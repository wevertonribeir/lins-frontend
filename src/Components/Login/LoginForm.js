import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { UserContext } from '../../UserContext';

export const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    userLogin(email, password);
  }

  return (
    <div className="container">
      <div className="card card-container">
        <img
          id="profile-img"
          className="profile-img-card"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        />
        <p id="profile-name" className="profile-name-card"></p>
        <form action="" className="form-signin" onSubmit={handleSubmit}>
          <span id="reauth-email" className="reauth-email"></span>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Senha"
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button
            className="btn btn-lg btn-primary btn-block btn-signin"
            type="submit"
          >
            Entrar
          </button>
        </form>

        <Link to="/login/perdeu" className="forgot-password">
          Esqueceu a senha?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
