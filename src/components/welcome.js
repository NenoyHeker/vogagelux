import * as React from "react";
import { NavLink } from 'react-router-dom';

//assets
import arrow_icon from '../assets/icons/arrow_icon.png';
import arrow_icon_r from '../assets/icons/arrow_icon_r.png';
import banner from '../assets/images/banner.png';
import tc1 from '../assets/images/tc1.png';
import tc2 from '../assets/images/tc2.png';
import tc3 from '../assets/images/tc3.png';
import tc4 from '../assets/images/tc4.png';
import tc5 from '../assets/images/tc5.png';

function Welcome() {
  return (
    <>
      <div className="div">
        <div className="div-2">Bienvenidos a vogagelux</div>
        <div className="div-3">
          <img
            loading="lazy"
            src={arrow_icon}
            className="img"
          />
          <img
            loading="lazy"
            src={banner}
            className="img-2"
          />
          <img
            loading="lazy"
            src={arrow_icon_r}
            className="img"
          />
        </div>
        <div className="div-4">
          <div className="div-5">
            <img
              loading="lazy"
              src={tc1}
              className="img-3"
            />
            <div className="div-6">Cancun</div>
            <div className="div-7">
              $17,000 <br />3 dias
              <br />2 noches
            </div>
          </div>
          <NavLink to="/offer" className="div-5">
          
            <img
              loading="lazy"
              src={tc2}
              className="img-4"
            />
            <div className="div-9">Tulum</div>
            <div className="div-10">
              $45,000 <br />
              10 dias
              <br />9 noches
            </div>
          
          </NavLink>
          <div className="div-5">
            <img
              loading="lazy"
              src={tc3}
              className="img-5"
            />
            <div className="div-12">Six flax</div>
            <div className="div-13">
              $20,000 <br />2 dias
              <br />1 noches
            </div>
          </div>
          <div className="div-5">
            <img
              loading="lazy"
              src={tc4}
              className="img-6"
            />
            <div className="div-15">ixtapa</div>
            <div className="div-16">
              $14,000 <br />4 dias
              <br />3 noches
            </div>
          </div>
          <div className="div-5">
            <img
              loading="lazy"
              src={tc5}
              className="img-7"
            />
            <div className="div-18">cabo san lucas</div>
            <div className="div-19">
              $17,000 <br />3 dias
              <br />2 noches
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          padding: 5vh 10vw 10vh 10vw;
          
        }
        .div-2 {
          color: var(--gray-shades-gray-1, #333);
          align-self: center;
          white-space: nowrap;
          font: 700 40px/44px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
          padding: ;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-3 {
          justify-content: space-between;
          align-content: center;
          row-gap: 20px;
          flex-wrap: wrap;
          border-radius: 80px;
          border: 2px solid var(--gray-shades-gray-4, #bdbdbd);
          background-color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          display: flex;
          margin-top: 32px;
          width: 100%;
          max-width: 1000px;
          gap: 20px;
          padding: 7px 32px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
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
          aspect-ratio: 2.15;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex-grow: 1;
          flex-basis: 0%;
        }
        @media (max-width: 991px) {
          .img-2 {
            max-width: 100%;
          }
        }
        .div-4 {
          justify-content: space-between;
          display: flex;
          width: auto;
          gap: 20px;
          padding: 10vh 0 10vh 0;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-5 {
          align-items: center;
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 1px 0 16px;
          text-decoration: none;
        }
        .img-3 {
          aspect-ratio: 1.5;
          object-fit: contain;
          object-position: center;
          width: 202px;
          overflow: hidden;
        }
        .div-6 {
          justify-content: center;
          color: var(--gray-shades-gray-1, #333);
          margin-top: 10px;
          font: 700 24px/26px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-7 {
          justify-content: center;
          color: #000;
          margin-top: 10px;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-8 {
          align-items: center;
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 1px 0 16px;
        }
        .img-4 {
          aspect-ratio: 1.5;
          object-fit: contain;
          object-position: center;
          width: 202px;
          overflow: hidden;
        }
        .div-9 {
          justify-content: center;
          color: var(--gray-shades-gray-1, #333);
          margin-top: 10px;
          font: 700 24px/26px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-10 {
          justify-content: center;
          color: #000;
          margin-top: 10px;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-11 {
          align-items: center;
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 1px 0 16px;
        }
        .img-5 {
          aspect-ratio: 1.49;
          object-fit: contain;
          object-position: center;
          width: 202px;
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
        .div-14 {
          align-items: center;
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 1px 0 16px;
        }
        .img-6 {
          aspect-ratio: 1.49;
          object-fit: contain;
          object-position: center;
          width: 202px;
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
        .div-17 {
          align-items: center;
          border: 1px solid #000;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          width: auto;
          flex-direction: column;
          padding: 1px 0 16px;
        }
        .img-7 {
          aspect-ratio: 1.46;
          object-fit: contain;
          object-position: center;
          width: 202px;
          overflow: hidden;
        }
        .div-18 {
          justify-content: center;
          color: var(--gray-shades-gray-1, #333);
          margin-top: 10px;
          white-space: nowrap;
          font: 700 24px/26px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            white-space: initial;
          }
        }
        .div-19 {
          justify-content: center;
          color: #000;
          margin-top: 10px;
          font: 400 20px/22px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
      `}</style>
    </>
  );
}

export default Welcome;