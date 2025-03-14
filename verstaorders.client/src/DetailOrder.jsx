import { useEffect, useState } from "react";

export default function DetailOrder({ order, onClose }) {
    return (
        <div className="modal fade show d-block modal-shadow" tabIndex="-1" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Детали заказа #{order.orderNumber}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>Город отправителя: {order.senderCity}</p>
                        <p>Адрес отправителя: {order.senderAddress}</p>
                        <p>Город получателя: {order.recipientCity}</p>
                        <p>Адрес получателя: {order.recipientAddress}</p>
                        <p>Вес: {order.cargoWeight} кг</p>
                        <p>Дата забора: {new Date(order.pickupDate).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
