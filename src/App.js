import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom"

import { About } from "./About"
import { Cart } from "./Cart"
import { Contact } from "./Contact"
import { Products } from "./Products"
import { navbarItems } from "./navItems"
import { useBobsCounter } from "./useBobsCounter"

// Assignment #1

// Refer to https://reactrouter.com/docs/en/v6/components

// Incorporate one of the following API endpoints from the doc mentioned above:

// some suggestions:  Outlet, useLocation, useNavigate, useResolvedPath

export function App() {
    const num = useBobsCounter()

    const theNavItems = navbarItems.map((el) => {
        return (
            <li key={el.key}>
                <Link to={el.name}>{el.label} </Link>
            </li>
        )
    })

    return (
        <>
            <nav>
                <h1>Tacomania {num}</h1>
                <ul>{theNavItems}</ul>
            </nav>
            <div id="app-body">
                <Routes>
                    <Route path="/" element={<>Home</>} />
                    <Route path="products" element={<Products />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="contact/" element={<Contact />}>
                        <Route path="info" element={<>ContactInfo</>} />
                        <Route path="media" element={<>ContactSocialMedia</>} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}
