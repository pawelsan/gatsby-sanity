import { Link } from 'gatsby';
import React from 'react';

const Aside = () => (
    <nav>
        <Link to='/rodziny-zastepcze'>Rodziny zastępcze</Link>
        <Link to='/osoby-niepelnosprawne'>Osoby z niepełnosprawnością</Link>
        <Link to='/pomoc-instytucjonalna'>Pomoc instytucjonalna</Link>
    </nav>
);

export default Aside;