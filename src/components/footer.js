import * as React from "react";
import social from '../assets/images/social.png';

function Footer() {
    return (
        <>

            <div className="divf-26">
                <div className="divf-27">
                    <div className="divf-28">
                        <div className="divf-29">Atención telefonica</div>
                        <div className="divf-30">472 *** ** **</div>
                        <div className="divf-31">472 *** ** **</div>
                    </div>
                    <div className="divf-32" />
                    <div className="divf-33">
                        <div className="divf-34">FAQs</div>
                        <div className="divf-35">Mis viajes</div>
                        <div className="divf-36">Mi perfil</div>
                    </div>
                    <div className="divf-37" />
                    <div className="divf-38">
                        <div className="divf-39">Terminos y condiciones</div>
                        <div className="divf-40">Aviso de privacidad</div>
                        <div className="divf-41">Promociones vigentes</div>
                    </div>
                    <div className="divf-42" />
                    <div className="divf-43">
                        <div className="divf-44">Acerca de nosotros</div>
                        <div className="divf-45">Politica de reembolsos</div>
                        <div className="divf-46">Politica de precios</div>
                    </div>
                    <div className="divf-47" />
                    <div className="divf-48">
                        <div className="divf-49">Nuestras redes sociales</div>
                        <img
                            loading="lazy"
                            src={social}
                            className="img-8"
                        />
                    </div>
                </div>
            </div>
            <style>{`
        .divf-26 {
          justify-content: center;
          align-items: center;
          background-color: var(--primary-colors-color-3, #5fa0a4);
          align-self: stretch;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 16px 0 16px 0;
        }
        @media (max-width: 991px) {
          .divf-26 {
            max-width: 100%;
          }
        }
        .divf-27 {
          display: flex;
          width: 100%;
          max-width: 1285px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .divf-27 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .divf-28 {
          justify-content: center;
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .divf-29 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          white-space: nowrap;
          font: 700 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-29 {
            white-space: initial;
          }
        }
        .divf-30 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-30 {
            white-space: initial;
          }
        }
        .divf-31 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-31 {
            white-space: initial;
          }
        }
        .divf-32 {
          background-color: #333;
          align-self: center;
          width: 2px;
          height: 88px;
          margin: auto 0;
        }
        .divf-33 {
          justify-content: center;
          align-self: center;
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .divf-34 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          white-space: nowrap;
          font: 700 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-34 {
            white-space: initial;
          }
        }
        .divf-35 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-35 {
            white-space: initial;
          }
        }
        .divf-36 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-36 {
            white-space: initial;
          }
        }
        .divf-37 {
          background-color: #333;
          align-self: center;
          width: 2px;
          height: 88px;
          margin: auto 0;
        }
        .divf-38 {
          justify-content: center;
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .divf-39 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          white-space: nowrap;
          font: 700 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-39 {
            white-space: initial;
          }
        }
        .divf-40 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-40 {
            white-space: initial;
          }
        }
        .divf-41 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-41 {
            white-space: initial;
          }
        }
        .divf-42 {
          background-color: #333;
          align-self: center;
          width: 2px;
          height: 88px;
          margin: auto 0;
        }
        .divf-43 {
          justify-content: center;
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .divf-44 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          white-space: nowrap;
          font: 700 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-44 {
            white-space: initial;
          }
        }
        .divf-45 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-45 {
            white-space: initial;
          }
        }
        .divf-46 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          margin-top: 8px;
          white-space: nowrap;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-46 {
            white-space: initial;
          }
        }
        .divf-47 {
          background-color: #333;
          align-self: center;
          width: 2px;
          height: 88px;
          margin: auto 0;
        }
        .divf-48 {
          justify-content: center;
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .divf-49 {
          color: var(--gray-shades-gray-2, #4f4f4f);
          white-space: nowrap;
          font: 700 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divf-49 {
            white-space: initial;
          }
        }
        .img-8 {
          aspect-ratio: 1.47;
          object-fit: contain;
          object-position: center;
          width: 100px;
          overflow: hidden;
          align-self: center;
          margin-top: 8px;
          max-width: 100%;
        }
      `}</style>
        </>
    );
}

export default Footer;