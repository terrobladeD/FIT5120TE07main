import React from 'react';
import { Link } from 'react-router-dom';

function BtnBlue({ title, icon, url }) {
    return (
        <Link className="btnBlue" to={`${url}`}>
            {`${title} `}
            <span className="ml-2">{icon}</span>
        </Link>
    );
}

export default BtnBlue;
