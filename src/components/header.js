import React from 'react';
import lv_icon from '../assets/images/vl_icon.png';
import search_icon from '../assets/icons/search_icon.png';
import help_icon from '../assets/icons/help_icon.png';

import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <>
        <div className="divh-2">
      <div className="divh-3">
        <div className="columnh">
          
        <NavLink className="divh-4" to="/">
            <img
              loading="lazy"
              src={lv_icon}
              className='imgh'
            />
            <div className="divh-5">VogageLux</div>
          </NavLink>
        </div>
        <div className="columnh-2">
          <div className="divh-6">
            <div className="divh-7">
              <img
                loading="lazy"
                src={search_icon}
                className="imgh-2"
              />
            </div>
          </div>
        </div>
        <div className="columnh-3">
          <div className="divh-8">
            <NavLink to="/login" className="divh-9">
            <div >Log In</div>
            </NavLink>
            <div className="divh-10" />
            <img
              loading="lazy"
              src={help_icon}
              className="imgh-3"
            />
            <div className="divh-11">Ayuda</div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
        {`.divh-2 {
          justify-content: space-between;
          align-self: stretch;
          background-color: var(--primary-colors-color-1, #eeb73f);
          width: 100%;
          
        }
        @media (max-width: 991px) {
          .divh-2 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .divh-3 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .divh-3 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .columnh {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 31%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .columnh {
            width: 100%;
          }
        }
        .divh-4 {
          justify-content: space-between;
          display: flex;
          flex-grow: 1;
          gap: 16px;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .divh-4 {
            margin-top: 40px;
          }
        }
        .imgh {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 120px;
          overflow: hidden;
          max-width: 100%;
        }
        .divh-5 {
          color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 700 40px/44px Couture, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .divh-5 {
            white-space: initial;
          }
        }
        .columnh-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .columnh-2 {
            width: 100%;
          }
        }
        .divh-6 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .divh-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .divh-7 {
          border-radius: 10px;
          background-color: var(--primary-colors-color-4, #f4f4f4);
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 11px 13px;
        }
        @media (max-width: 991px) {
          .divh-7 {
            max-width: 100%;
          }
        }
        .imgh-2 {
          aspect-ratio: 0.69;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .columnh-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .columnh-3 {
            width: 100%;
          }
        }
        .divh-8 {
          justify-content: center;
          align-items: flex-start;
          display: flex;
          gap: 14px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .divh-8 {
            margin-top: 40px;
          }
        }
        .divh-9 {
          color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          margin: auto 0;
          font: 400 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
          text-decoration: none;
        }
        .divh-10 {
          background-color: #f4f4f4;
          align-self: stretch;
          width: 2px;
          height: 68px;
        }
        .imgh-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 28px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .divh-11 {
          color: var(--primary-colors-color-4, #f4f4f4);
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 400 32px/35px Louis George Cafe, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .divh-11 {
            white-space: initial;
          }
        }`}
    </style>          
        </>

    );
}

export default Header;