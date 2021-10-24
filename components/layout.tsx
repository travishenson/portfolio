import React, { ReactNode } from 'react';

import { Navbar } from './molecules/navbar';
import { Footer } from './molecules/footer';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    <div className="page-content">{children}</div>
    <Footer />
  </>
);

export default Layout;
