import React from 'react';
import Link from 'next/link';
type Layouttype = {
  children: React.ReactNode;
};
const Layout: React.FC<Layouttype> = ({ children }) => {
  return (
    <div>
      <Link href="http://localhost:3000/iron-duke">
        <a>HOME</a>
      </Link>
      <br/>
      <Link href="http://localhost:3000/iron-duke/Login">
        <a>LOGIN</a>
      </Link>
      <br/>
      <Link href="http://localhost:3000/iron-duke/Register">
        <a>REGISTER</a>
      </Link>
      <br/>
      <Link href="http://localhost:3000/surbey/SurbeyFirst">
        <a>SURBEY</a>
      </Link>
      <br/>
      {children}
    </div>
  );
};

export default Layout;
