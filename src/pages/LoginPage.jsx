import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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
    <section className="auth-wrap">
      <article className="panel auth-card">
        <p className="section-kicker">Acceso</p>
        <h1>Iniciar sesión</h1>
        <p className="muted">Usa las credenciales de demo para entrar al perfil protegido.</p>
        <form onSubmit={submit} className="form">
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="usuario" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="contraseña" />
          <button className="btn">Entrar</button>
          {error && <p className="error">{error}</p>}
        </form>
      </article>
    </section>
  );
}
