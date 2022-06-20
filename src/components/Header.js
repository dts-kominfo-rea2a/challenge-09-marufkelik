// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = ({text, text2}) => {
    return (
       <>
       <div>
        <h1>{text}</h1>
        </div>
        <div>
        <h3><i>{text2}</i></h3>
        </div>
        </>
    )
}

export default Header;
