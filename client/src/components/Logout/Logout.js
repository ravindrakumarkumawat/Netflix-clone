import React from 'react'
import { GoogleLogout } from 'react-google-login'
import {CLIENT_ID} from '../../OAuth.config'



const clientId = CLIENT_ID

function Logout() {
  const onSuccess = () => {
    alert('Logout made successfully ✌')
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout