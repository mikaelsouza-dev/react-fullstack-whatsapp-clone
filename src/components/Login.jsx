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

    const handleGithubLogin = async () => {
        let result = await Api.gitPopup();
        if (result) {
            onReceive(result.user)
        } else {
            alert('deu ruim')
        }
    }

  return (
      <div className='login'>
          <h1>Acesse sua conta</h1>
          <p>Bem-vindo à página de login! Para acessar sua conta, basta fazer login utilizando uma das plataformas abaixo. Venha e aproveite seu WhatsApp Clone :)</p>
          <button onClick={handleGoogleLogin}><FaGoogle className='socialIcon' /> Entrar com Google</button>
          <button onClick={handleTwitterLogin}><FaTwitter className='socialIcon' /> Entrar com Twitter</button>
          <button onClick={handleGithubLogin}><FaGithub className='socialIcon' /> Entrar com GitHub</button>
    </div>
  )
}

export default Login