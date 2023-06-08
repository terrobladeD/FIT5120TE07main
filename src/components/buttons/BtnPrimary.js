import React from 'react';
import { Link } from 'react-router-dom';

function BtnPrimary({ title, icon, url, onClick }) {
    if (url) {
      return (
        <Link className="btnPrimary" to={url}>
          {title} <span className="ml-2">{icon}</span>
        </Link>
      );
    } else if (onClick) {
      return (
        <button className="btnPrimary" style={{padding:'8px 16px'}} onClick={onClick}>
          {title} <span className="ml-2">{icon}</span>
        </button>
      );
    }
    return null;
  }

export default BtnPrimary;
