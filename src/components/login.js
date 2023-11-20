import * as React from "react";

//assets
import email_icon from '../assets/icons/email_icon.png';
import face_icon from '../assets/icons/face_icon.png';
import g_icon from '../assets/icons/g_icon.png';
import b_login from '../assets/images/b_login.png';

const Login = () => {
  return (
    <>
      <div className="div">
        <div className="div-2">


        </div>
        <div className="div-12">
          <div className="div-13">
            <div className="div-14">
              <div className="div-15">Viaja con promociones increibles</div>
              <img
                loading="lazy"
                src={b_login}
                className="img-4"
              />
            </div>
            <div className="div-16" />
            <div className="div-17">
              <div className="div-18">Bienvenido a VoyageLux</div>
              <div className="div-19">
                <img
                  loading="lazy"
                  src={email_icon}
                  className="img-5"
                />
                <div className="div-20">Acceder con Correo</div>
              </div>
              <div className="div-21">
                <img
                  loading="lazy"
                  src={face_icon}
                  className="img-6"
                />
                <div className="div-22">Acceder con Facebook</div>
              </div>
              <div className="div-23">
                <img
                  loading="lazy"
                  src={g_icon}
                  className="img-7"
                />
                <div className="div-24">Acceder con Google</div>
              </div>
              <div className="div-25">Terminos y condiciones</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
          align-items: center;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          justify-content: space-between;
          align-self: stretch;
          background-color: var(--primary-colors-color-1, #eeb73f);
          width: 100%;
          padding: 0 32px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-13 {
          justify-content: space-between;
          border-radius: 80px;
          border: 2px solid var(--gray-shades-gray-4, #bdbdbd);
          display: flex;
          width: 1176px;
          gap: 10px;
          margin: 30px 0;
          padding: 32px 32px 32px 48px;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-14 {
          justify-content: center;
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          color: var(--primary-colors-color-2, #006996);
          white-space: nowrap;
          font: 700 40px/53px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .img-4 {
          aspect-ratio: 1.96;
          object-fit: contain;
          object-position: center;
          width: 550px;
          overflow: hidden;
          align-self: center;
          margin-top: 10px;
          max-width: 100%;
        }
        .div-16 {
          background-color: var(--gray-shades-gray-4, #bdbdbd);
          display: flex;
          width: 10px;
          height: 364px;
          flex-direction: column;
        }
        .div-17 {
          justify-content: center;
          align-items: center;
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
          }
        }
        .div-18 {
          color: var(--primary-colors-color-2, #006996);
          align-self: stretch;
          white-space: nowrap;
          font: 700 40px/53px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-19 {
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 16px;
          width: 365px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 17px 55px 17px 24px;
        }
        @media (max-width: 991px) {
          .div-19 {
            padding: 0 20px;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-20 {
          color: var(--gray-shades-black, #000);
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
          }
        }
        .div-21 {
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 16px;
          width: 365px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 17px 55px 17px 24px;
        }
        @media (max-width: 991px) {
          .div-21 {
            padding: 0 20px;
          }
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-22 {
          color: var(--gray-shades-black, #000);
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .div-23 {
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 16px;
          width: 365px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 17px 80px 17px 24px;
        }
        @media (max-width: 991px) {
          .div-23 {
            padding: 0 20px;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-24 {
          color: var(--gray-shades-black, #000);
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-24 {
            white-space: initial;
          }
        }
        .div-25 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          text-decoration-line: underline;
          align-self: center;
          margin-top: 16px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-25 {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}



export default Login;
