import React from 'react';
import Api from '../api/Api';
import './Login.css'
import { FaGithub, FaGoogle, FaMicrosoft, FaTwitter} from 'react-icons/fa'

const Login = ({onReceive}) => {
    const handleGoogleLogin = async () => {
        let result = await Api.gbPopup();
        if (result) {
            onReceive(result.user)
        } else {
            alert('deu ruim')
        }
    }

    const handleTwitterLogin = async () => {
        let result = await Api.ttPopup();
        if (result) {
            onReceive(result.user)
        } else {
            alert('deu ruim')
        }
    }

  return (
      <div className='login'>
          <h1>Acesse sua conta</h1>
          <p>Bem-vindo à página de login! Para acessar sua conta, insira suas informações de login nos campos abaixo. Certifique-se de digitar corretamente seu nome de usuário e senha. Se ainda não possui uma conta, clique no link 'Registrar' para criar uma.</p>
          <button onClick={handleGoogleLogin}><FaGoogle className='socialIcon' /> Entrar com Google</button>
          <button onClick={handleTwitterLogin}><FaTwitter className='socialIcon' /> Entrar com Twitter</button>
          <button onClick={handleGoogleLogin}><FaGithub className='socialIcon' /> Entrar com GitHub</button>
          <button onClick={handleGoogleLogin}><FaMicrosoft className='socialIcon' /> Entrar com Microsoft</button>
    </div>
  )
}

export default Login