// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = ({title}) => {
    return (
       <>
       <div>
        <h1>{title}</h1>
        </div>
        </>
    )
}

export default Header;
