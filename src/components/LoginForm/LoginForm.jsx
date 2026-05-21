import '../../index.css';
import './LoginForm.css';
import macaco from '../../images/Macaco.jpg';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // aqui você faria validação / chamada à API
        navigate('/home');
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="image-wrap">
                    <img src={macaco} alt="Macaco" className="login-image" />
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="title">Bem-vindo</h2>
                    <input className="input" name="username" type="text" placeholder="Usuário" required />
                    <input className="input" name="password" type="password" placeholder="Senha" required />
                    <button className="btn" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;