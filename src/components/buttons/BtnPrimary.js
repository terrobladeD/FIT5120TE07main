import React from 'react';
import { Link } from 'react-router-dom';

function BtnPrimary({ title, icon, url }) {
    return (
        <Link className="btnPrimary" to={`${url}`}>
            {`${title} `}
            <span className="ml-2">{icon}</span>
        </Link>
    );
}

export default BtnPrimary;
