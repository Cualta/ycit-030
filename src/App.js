import { Link, Route, Routes } from "react-router-dom"

import { About } from "./About"
import { Cart } from "./Cart"
import { Products } from "./Products"
import { navbarItems } from "./navItems"
import { useBobsCounter } from "./useBobsCounter"

// Assignment #1

// Refer to https://reactrouter.com/docs/en/v6/components

// Incorporate one of the following API endpoints from the doc mentioned above:

// some suggestions:  Outlet, useLocation, useNavigate, useResolvedPath

export function App() {
    const num = useBobsCounter()
    let style = ({ isHover }) => ({
        color: isHover ? "#284975" : "",
    })

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
                </Routes>
            </div>
        </>
    )
}
