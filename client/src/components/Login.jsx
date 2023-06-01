import React from 'react';
import Api from '../api/Api';
import './Login.scss'

const Login = ({onReceive}) => {
    const handleGoogleLogin = async () => {
        let result = await Api.gbPopup();
        if (result) {
            onReceive(result.user)
        } else {
            alert('deu ruim')
        }
    }

  return (
      <div className='login'>
          <button onClick={handleGoogleLogin}>Logar com Google</button>
    </div>
  )
}

export default Login