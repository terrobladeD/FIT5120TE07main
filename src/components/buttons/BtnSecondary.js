import React from 'react';
import { Link } from 'react-router-dom';

function BtnSecondary({ title, icon, url }) {
    return (
        <Link className="btnSecondary" to={`${url}`}>
            {`${title} `}
            <span className="ml-2">{icon}</span>
        </Link>
    );
}

export default BtnSecondary;
