import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getLoginBackground, getLogoImage } from '../utils/localImages';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    const result = login(username, password);
    if (result.ok) return navigate('/perfil');
    setError(result.message);
  };

  return (
    <section className="login-page" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${getLoginBackground()})` }}>
      <article className="login-card">
        <img src={getLogoImage()} alt="Malcolm Verse" className="login-logo" />
        <h1>Log in</h1>
        <form onSubmit={submit} className="form">
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Correo" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
          <button className="btn">Iniciar sesión</button>
          <button type="button" className="btn secondary">Continuar con Google</button>
          <p className="muted">¿No tienes cuenta? Regístrate</p>
          {error && <p className="error">{error}</p>}
        </form>
      </article>
    </section>
  );
}
