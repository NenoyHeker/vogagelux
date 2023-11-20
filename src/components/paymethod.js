import * as React from "react";
import { NavLink } from 'react-router-dom';

//assets
import arrow_icon from '../assets/icons/arrow_icon.png';
import arrow_icon_r from '../assets/icons/arrow_icon_r.png';

function Paymethod() {
  return (
    <>
      <div className="div">
        <div className="div-2">TULUM</div>
        <div className="div-3">
          <div className="div-4">
            <div className="column">
              <div className="div-5">
                <div className="div-6">
                  <div className="column-2">
                    <div className="div-7">
                      <div className="div-8">TULUM</div>
                      <div className="div-9">
                        <div className="div-10">
                          <div className="div-11">Hospedaje</div>
                          <div className="div-12">Transporte</div>
                          <div className="div-13">Alimento</div>
                          <div className="div-14">Wifi</div>
                          <div className="div-15">Estacionamiento</div>
                        </div>
                        <div className="div-16">
                          <div className="div-17">5 estrellas</div>
                          <div className="div-18">Avión</div>
                          <div className="div-19">Desayuno</div>
                          <div className="div-20">Gratis</div>
                          <div className="div-21">2 cajónes</div>
                        </div>
                      </div>
                      <div className="div-22">Mas detalles &gt;</div>
                    </div>
                  </div>
                  <div className="column-3">
                    <div className="div-23">
                      <div className="div-24">Cuantos boletos necesitas?</div>
                      <div className="div-25">Cantidad:</div>
                      <div className="div-26">
                        <img
                          loading="lazy"
                          src={arrow_icon}
                          className="img"
                        />
                        <div className="div-27">20</div>
                        <img
                          loading="lazy"
                          src={arrow_icon_r}
                          className="img"
                        />
                      </div>
                      <div className="div-28">Costo total:</div>
                      <div className="div-29">$20000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-30">
                <div className="div-31">
                  ¿Listo para comenzar con el viaje de tu vida?
                </div>
                <NavLink to="/" className="div-32">
                <div >Continuar y finalizar pago</div>
                </NavLink>
                <NavLink to="/" className="div-32">
                <div>Cancelar operación</div>
                </NavLink>
                <NavLink to="/" className="div-32">
                <div>¿Problema en reservación?</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nl{
          width: auto;
        }
        .div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: auto;
          padding: 5vh 10vw 10vh 10vw;
        }
        .div-2 {
          color: var(--gray-shades-black, #000);
          text-align: center;
          width: 100%;
          font: 700 56px/62px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            font-size: 40px;
            line-height: 50px;
          }
        }
        .div-3 {
          justify-content: center;
          align-self: stretch;
          width: 100%;
          margin: 5vh 0 0 0;
          
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 80%;
            padding-left: 20px;
            margin-top: 40px;
          }
        }
        .div-4 {
          
          display: flex;
        }
        @media (max-width: 991px) {
          .div-4 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          
          width: 60%;
          height: 50vh;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }

        .div-5 {
          
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            
          }
        }
        .div-6 {
          gap: 10px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-6 {
            flex-direction: column;
            align-items: stretch;
            gap: 5px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: auto;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-7 {
          justify-content: center;
          border-radius: 80px 0px 0px 80px;
          border: 2px solid var(--gray-shades-gray-4, #bdbdbd);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: auto;
          height: 50vh;
          padding: 2vh 2vw 2vh 2vw;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            margin-top: 20px;
            padding: 0 20px;
          }
        }
        .div-8 {
          justify-content: center;
          
          color: var(--gray-shades-gray-1, #333);
          font: 700 40px/44px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-9 {
          justify-content: space-between;
          display: flex;
          margin-top: 16px;
          gap: 20px;
          padding: 8px;
        }
        .div-10 {
          justify-content: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-11 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-12 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-13 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-14 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-15 {
          color: #000;
          margin-top: 16px;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          justify-content: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          
        }
        .div-17 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-18 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-19 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-20 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-21 {
          color: #000;
          margin-top: 16px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-22 {
          color: var(--primary-colors-color-2, #006996);
          text-align: center;
          align-self: center;
          margin-top: 16px;
          white-space: nowrap;
          font: 700 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 35%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-23 {
          justify-content: center;
          align-items: center;
          border-radius: 0px 80px 80px 0px;
          border: 2px solid var(--gray-shades-gray-4, #bdbdbd);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          width: 100%;
          flex-grow: 1;
          flex-direction: column;
          margin: 0 auto;
          padding: 2vh 2vw 2vh 2vw;
        }
        @media (max-width: 991px) {
          .div-23 {
            margin-top: 20px;
          }
        }
        .div-24 {
          color: var(--gray-shades-gray-1, #333);
          text-align: center;
          align-self: stretch;
          font: 700 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-25 {
          color: var(--gray-shades-black, #000);
          align-self: center;
          margin-top: 16px;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-25 {
            white-space: initial;
          }
        }
        .div-26 {
          justify-content: space-between;
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 16px;
          gap: 20px;
          
        }
        @media (max-width: 991px) {
          .div-26 {
            justify-content: center;
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 0.82;
          object-fit: contain;
          object-position: center;
          width: 28px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-27 {
          color: var(--gray-shades-gray-1, #333);
          text-align: center;
          margin: auto 0;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-28 {
          color: var(--gray-shades-black, #000);
          align-self: center;
          margin-top: 16px;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-28 {
            white-space: initial;
          }
        }
        .div-29 {
          color: var(--gray-shades-gray-1, #333);
          text-align: center;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          margin-top: 16px;
          padding: 16px 20px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-29 {
            white-space: initial;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 34%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-30 {
          justify-content: center;
          align-items: center;
          border-radius: 80px;
          border: 2px solid var(--gray-shades-gray-4, #bdbdbd);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 50vh;
          margin: 0 auto;
          padding: 2vh 2vw 2vh 2vw;
        }
        @media (max-width: 991px) {
          .div-30 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-31 {
          color: var(--gray-shades-gray-1, #333);
          text-align: center;
          align-self: center;
          max-width: 333px;
          font: 700 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-32 {
          color: var(--gray-shades-black, #000);
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: stretch;
          margin-top: 24px;
          margin-left: 24px;
          margin-right: 24px;
          padding: 16px 20px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .div-32 {
            white-space: initial;
          }
        }
        .div-33 {
          color: var(--gray-shades-black, #000);
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: stretch;
          margin-top: 24px;
          padding: 16px 20px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-33 {
            white-space: initial;
          }
        }
        .div-34 {
          color: var(--gray-shades-black, #000);
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: stretch;
          margin-top: 24px;
          padding: 16px 20px;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-34 {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}

export default Paymethod;