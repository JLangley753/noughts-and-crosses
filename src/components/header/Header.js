import React from 'react';

import HeaderComponent from './Header.styles';

const Header = ({ children }) => (
  <HeaderComponent>
    {children}
  </HeaderComponent>
);

export default Header;
