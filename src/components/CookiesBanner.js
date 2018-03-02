import React, { Component } from 'react'
import CookieBanner, { cookie } from 'react-cookie-banner'

export default class CookiesBanner extends Component {
  render() {
    return (
      <div>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
          <CookieBanner
            styles={{
              banner: {
                fontFamily: 'Roboto',
                height: '100%',
                background: 'rgba(91, 91, 91, 0.8) url(https://rawgit.com/buildo/react-cookie-banner/master/examples/cookie.png) 20px 50% no-repeat',
                backgroundSize: '30px 30px',
                backgroundColor: '',
                fontSize: '15px',
                fontWeight: 'normal',
                padding: 5
              },
              button: {
                border: '1px solid white',
                borderRadius: 1,
                width: 66,
                height: 32,
                lineHeight: '32px',
                background: 'transparent',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                opacity: 1,
                right: 20,
                marginTop: -18
              },
              message: {
                display: 'block',
                padding: '9px 67px',
                lineHeight: 1.3,
                textAlign: 'left',
                marginRight: 50,
                marginLeft: 50,
                color: 'white'
              },
              link: {
                textDecoration: 'underline',
                fontWeight: 'bold'
              }
            }}
            message='Minar criptos utiliza cookies:'
            link={{ msg: ' Más información al usar nuestras cookies aquí.', url: '' }}
            buttonMessage='Acepto'
            dismissOnScroll={false}
          />
        </div>
      </div>
    )
  }

}
