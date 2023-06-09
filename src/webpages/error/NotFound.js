import React from 'react';
import NotFoundImg from './img/not-found.png'
import { RedButton } from '../button-theme/ButtonTheme';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  return (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src={NotFoundImg}
        width="100%"
        style={{ maxWidth: '800px' }}
        alt="not found"
      />
    </div>    
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <RedButton variant='contained' onClick={goHome}>
        Go Back to Homepage
      </RedButton>
    </div>
  </div>
)};

export default NotFound;