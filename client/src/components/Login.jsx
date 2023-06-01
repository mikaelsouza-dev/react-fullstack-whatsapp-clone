import React from 'react';
import Api from '../Api';
import './Login.scss'

const Login = ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if (result) {
            onReceive(result.user)
        } else {
            alert('deu ruim')
        }
    }

  return (
      <div className='login'>
          <button onClick={handleFacebookLogin}>Logar com Facebook</button>
    </div>
  )
}

export default Login