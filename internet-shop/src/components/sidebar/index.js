import React from 'react'

import BasketCart from '../basketCart/index.js'
import Search from '../search/index.js'
import Categories from '../categories/index.js'

const Sidebar = () => (
    <div>
        <BasketCart/>
        <Search/>
        <Categories/>
    </div>
);

export default Sidebar