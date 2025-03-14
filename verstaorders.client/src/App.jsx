import { Routes, Route, Link } from "react-router-dom";
import CreateOrderForm from "./CreateOrderForm";
import ListOfOrders from "./ListOfOrders";
import Page404 from "./Page404";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">VerstaOrders</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders-list">Заказы</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-order">Создать заказ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orders-list" element={<ListOfOrders />} />
                    <Route path="/create-order" element={<CreateOrderForm />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
        </div>
    );
}