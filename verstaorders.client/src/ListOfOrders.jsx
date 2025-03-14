import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailOrder from "./DetailOrder";

export default function ListOfOrders () {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const apiURL = "https://localhost:7040/api";

    useEffect(() => {
        fetch(apiURL+"/orders")
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error("Ошибка при загрузке заказов", error));
    }, []);

    const openModal = (order) => {
        setSelectedOrder(order);
    };
    const closeModal = () => {
        setSelectedOrder(null);
    };

    return (
        <div className="container mt-4 panel">
            <h2>Список заказов</h2>
            <div className="list-group">
                {
                    orders.length > 0 ?
                        orders.map((order) => (
                        <div
                            key={order.id}
                            className="list-group-item list-group-item-action justify-content-between order-list mt-4"
                            onClick={() => openModal(order)}
                        >
                            <h5>Заказ № {order.orderNumber}</h5>

                            <div className="container mt-4">
                                <table className="w-100 text-center align-middle border-0">
                                    <tbody>
                                        <tr>
                                            <td>Адрес отправителя:</td>
                                            <td rowSpan={2} className="align-middle fs-2">
                                                →
                                            </td>
                                            <td>Адрес получателя:</td>
                                        </tr>
                                        <tr>
                                            <td className="pt-2 pb-2">{order.senderCity}, {order.senderAddress}</td>
                                            <td className="pt-2 pb-2">{order.recipientCity}, {order.recipientAddress}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        ))
                        : <p>Список заказов пустой!</p>
                }
            </div>



            {selectedOrder && <DetailOrder order={selectedOrder} onClose={closeModal} />}
        </div>
    );
};