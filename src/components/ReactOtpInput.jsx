import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
function ReactOtpInput() {
  const [otp, setOtp] = useState('');

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      
      renderSeparator={<span className='mx-2'></span>}
      // skipDefaultStyles={true}
      // shouldAutoFocus={true}
      inputStyle={{
        width: '56px',
        height: '56px',
        borderRadius: '8px',
        background: '#424242',
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        border: '2px solid #757575',
        fontSize: '32px',
        fontWeight: '700',
        color: '#FFFFFF',
        lineHeight: '120%',
        letterSpacing: '0.96px',
        textTransform: 'uppercase',
        '&:focus': {
          background: '#000',
        },
        '&:active': {
          border: '2px solid red',
        }
      }}
      focusStyle={{ outline: 'none', border: '2px solid #05DEBA', borderRadius: '8px' }}
      renderInput={(props) => <input {...props} placeholder='X' />}
    />
  );
}

export default ReactOtpInput