import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <>
        <div className="div-2">
      <div className="div-3">
        <div className="column">
          <div className="div-4">
            <img
              loading="lazy"
              srcSet="..."
              className="img"
            />
            <div className="div-5">VogageLux</div>
          </div>
        </div>
        <div className="column-2">
          <div className="div-6">
            <div className="div-7">
              <img
                loading="lazy"
                srcSet="..."
                className="img-2"
              />
            </div>
          </div>
        </div>
        <div className="column-3">
          <div className="div-8">
            <div className="div-9">Log In</div>
            <div className="div-10" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6e7433e-084d-464d-9e31-dc4291f7e339?"
              className="img-3"
            />
            <div className="div-11">Ayuda</div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
        {`.div-2 {
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
        .div-3 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-3 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 31%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-4 {
          justify-content: space-between;
          display: flex;
          flex-grow: 1;
          gap: 16px;
        }
        @media (max-width: 991px) {
          .div-4 {
            margin-top: 40px;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 120px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-5 {
          color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 700 40px/44px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            white-space: initial;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          border-radius: 10px;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 11px 13px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
          }
        }
        .img-2 {
          aspect-ratio: 0.69;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-8 {
          justify-content: center;
          align-items: flex-start;
          display: flex;
          gap: 14px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-top: 40px;
          }
        }
        .div-9 {
          color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          margin: auto 0;
          font: 400 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .div-10 {
          background-color: #f4f4f4;
          align-self: stretch;
          width: 2px;
          height: 68px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 28px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-11 {
          color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 400 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            white-space: initial;
          }
        }`}
    </style>          
        </>

    );
}

export default Header;