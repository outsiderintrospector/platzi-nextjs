import React from 'react';
import Navbar from '@components/Navbar/Navbar';
;

//seria genial importar directamente components en vez de ../../../
//path aliases se pueden usar en js y ts 

const Layout : React.FC = ({children}) => {
  return (
  <div>
<Navbar/>
{children}

<footer>This is the footer </footer>

  </div>);
};

export default Layout;
