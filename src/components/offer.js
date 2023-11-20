import * as React from "react";
import { NavLink } from 'react-router-dom';

//assets
import arrow_icon from '../assets/icons/arrow_icon.png';
import arrow_icon_r from '../assets/icons/arrow_icon_r.png';
import b_offer from '../assets/images/b_offer.png';
import mc_icon from '../assets/icons/mc_icon.png';
import pp_icon from '../assets/icons/pp_icon.png';
import visa_icon from '../assets/icons/visa_icon.png';
import it_1 from '../assets/images/it_1.png';
import it_2 from '../assets/images/it_2.png';
import it_3 from '../assets/images/it_3.png';

function Offer() {
  return (
    <>
      <div className="div">
        <div className="div-2">tulum</div>
        <div className="div-3">
          <div className="div-4">
            <div className="column">
              <div className="div-5">
                <div className="div-6">Fotos del sitio</div>
                <div className="div-7">
                  <img
                    loading="lazy"
                    src={arrow_icon}
                    className="img"
                  />
                  <img
                    loading="lazy"
                    src={b_offer}
                    className="img-2"
                  />
                  <img
                    loading="lazy"
                    src={arrow_icon_r}
                    className="img"
                  />
                </div>
                <div className="div-8">Cosas a tener en cuenta</div>
                <div className="div-9">
                  <div className="div-10">
                    <div className="column-2">
                      <div className="div-11">
                        <img
                          loading="lazy"
                          src={it_1}
                          className="img-3"
                        />
                        <div className="div-12">BArra libre</div>
                        <div className="div-13">Comida y bebida ilimitada</div>
                      </div>
                    </div>
                    <div className="column-3">
                      <div className="div-14">
                        <img
                          loading="lazy"
                          src={it_2}
                          className="img-4"
                        />
                        <div className="div-15">Hotel</div>
                        <div className="div-16">Hospedaje de 5 estrellas</div>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="div-17">
                        <img
                          loading="lazy"
                          src={it_3}
                          className="img-5"
                        />
                        <div className="div-18">Avion</div>
                        <div className="div-19">Transporte rapido y cómodo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-5">
              <div className="div-20">
                <div className="div-21">
                  Selecciona tu metodo de págo y viaja ahora!!!
                </div>
                <NavLink to="/paymethod" className="nv">
                <div className="div-22">
                  <img
                    loading="lazy"
                    src={mc_icon}
                    className="img-6"
                  />
                  <div className="div-23">MasterCard</div>
                </div>
                </NavLink>
                <NavLink to="/paymethod" className="nv">
                <div className="div-24">
                  <img
                    loading="lazy"
                    src={pp_icon}
                    className="img-7"
                  />
                  <div className="div-25">Paypal</div>
                </div>
                </NavLink>
                <NavLink to="/paymethod" className="nv">
                <div className="div-26">
                  <img
                    loading="lazy"
                    src={visa_icon}
                    className="img-81"
                  />
                  <div className="div-27">Targeta VISA</div>
                </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nv {
          text-decoration:none;
        }

        .div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5vh 10vw 5vh 10vw;
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
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-4 {
          gap: 20px;
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
          line-height: normal;
          width: 65%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-5 {
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-6 {
          color: #000;
          align-self: center;
          white-space: nowrap;
          font: 400 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
          padding: 5vh 0 0 0;
        }
        @media (max-width: 991px) {
          .div-6 {
            white-space: initial;
            
          }
        }
        .div-7 {
          justify-content: space-between;
          border-radius: 80px;
          border: 2px solid var(--gray-shades-gray-4, #bdbdbd);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 20px;
          width: 600px;
          max-width: 100%;
          gap: 20px;
          padding: 8px 32px;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-wrap: wrap;
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
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .img-2 {
          aspect-ratio: 1.52;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex-grow: 1;
          flex-basis: 0%;
        }
        .div-8 {
          color: #000;
          align-self: center;
          margin-top: 20px;
          white-space: nowrap;
          font: 400 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
          padding: 5vh 0 5vh 0;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
          }
        }
        .div-9 {
          justify-content: center;
          align-self: stretch;
          margin-top: 20px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
          }
        }
        .div-10 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-10 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-11 {
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          padding: 1px 0 16px;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-top: 16px;
          }
        }
        .img-3 {
          aspect-ratio: 1.46;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
        }
        .div-12 {
          justify-content: center;
          color: var(--gray-shades-gray-1, #333);
          margin-top: 10px;
          font: 700 24px/26px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-13 {
          justify-content: center;
          color: #000;
          margin-top: 10px;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-14 {
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          padding: 1px 0 16px;
        }
        @media (max-width: 991px) {
          .div-14 {
            margin-top: 16px;
          }
        }
        .img-4 {
          aspect-ratio: 1.46;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
        }
        .div-15 {
          justify-content: center;
          color: var(--gray-shades-gray-1, #333);
          margin-top: 10px;
          font: 700 24px/26px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-16 {
          justify-content: center;
          color: #000;
          margin-top: 10px;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-17 {
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          padding: 1px 0 16px;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-top: 16px;
          }
        }
        .img-5 {
          aspect-ratio: 1.46;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
        }
        .div-18 {
          justify-content: center;
          color: var(--gray-shades-gray-1, #333);
          margin-top: 10px;
          font: 700 24px/26px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-19 {
          justify-content: center;
          color: #000;
          margin-top: 10px;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 35%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-20 {
          justify-content: center;
          align-items: center;
          border-radius: 80px;
          border: 2px solid var(--gray-shades-gray-4, #bdbdbd);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: auto;
          padding: 32px;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-21 {
          color: var(--gray-shades-gray-1, #333);
          text-align: center;
          align-self: stretch;
          font: 400 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            max-width: 100%;
          }
        }
        .div-22 {
          align-items: start;
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 24px;
          width: 40vh;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 80px 16px 24px;
        }
        @media (max-width: 991px) {
          .div-22 {
            padding: 0 20px;
          }
        }
        .img-6 {
          aspect-ratio: 1.58;
          object-fit: contain;
          object-position: center;
          height: 30px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-23 {
          color: var(--gray-shades-black, #000);
          align-self: stretch;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            white-space: initial;
          }
        }
        .div-24 {
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 24px;
          width: 40vh;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 80px 16px 24px;
        }
        @media (max-width: 991px) {
          .div-24 {
            padding: 0 20px;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          height: 30px;
          overflow: hidden;
          
        }
        .div-25 {
          color: var(--gray-shades-black, #000);
          align-self: start;
          flex-grow: 1;
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
          align-items: start;
          border-radius: 8px;
          border: 1px solid var(--gray-shades-gray-1, #333);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 24px;
          width: 40vh;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 80px 16px 24px;
        }
        @media (max-width: 991px) {
          .div-26 {
            padding: 0 20px;
          }
        }
        .img-81 {
          aspect-ratio: 1.96;
          object-fit: contain;
          object-position: center;
          height: 30px;
          
          overflow: hidden;
        }
        .div-27 {
          color: var(--gray-shades-black, #000);
          align-self: stretch;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px/26px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-27 {
            white-space: initial;
          }
        }
      `}</style>
    </>
   );
}

export default Offer;