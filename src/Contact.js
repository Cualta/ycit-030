import { Link, Outlet } from "react-router-dom"

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>

            {/* This element will render either <DashboardMessages> when the URL is
            "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
        */}
            <nav>
                <Link to="info">My Info</Link>
                <Link to="media">Social media</Link>
            </nav>
            <Outlet />
        </div>
    )
}
