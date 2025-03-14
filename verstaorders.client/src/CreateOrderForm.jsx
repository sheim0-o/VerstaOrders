import { useState } from "react";
import axios from "axios";
import { Toast, ToastContainer } from "react-bootstrap";

export default function CreateOrderForm() {
    const [order, setOrder] = useState({
        senderCity: "",
        senderAddress: "",
        receiverCity: "",
        receiverAddress: "",
        weight: "",
        pickupDate: ""
    });

    const apiURL = "https://localhost:7040/api";

    const [toast, setToast] = useState({ show: false, message: "", success: true });

    const handleChange = (e) => setOrder({ ...order, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(apiURL+"/orders", order);
            setToast({ show: true, message: "✅ Заказ успешно создан!", success: true });
        } catch {
            setToast({ show: true, message: "❌ Ошибка при создании заказа", success: false });
        }
    };

    return (
        <div className="create-order-form">
            <ToastContainer className="toast-container">
                <Toast
                    onClose={() => setToast({ ...toast, show: false })}
                    show={toast.show}
                    delay={3000}
                    autohide
                    bg={toast.success ? "success" : "danger"}
                    className="text-white"
                >
                    <Toast.Body>{toast.message}</Toast.Body>
                </Toast>
            </ToastContainer>

            <div className="container mt-4 panel">
                <h3 className="ps-4 pb-4">Создать новый заказ</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Город отправителя</label>
                        <input name="senderCity" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Адрес отправителя</label>
                        <input name="senderAddress" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Город получателя</label>
                        <input name="recipientCity" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Адрес получателя</label>
                        <input name="recipientAddress" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Вес груза (кг)</label>
                        <input type="number" name="cargoWeight" className="form-control" onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Дата забора груза</label>
                        <input type="date" name="pickupDate" className="form-control" onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn w-100 create-order-btn">Создать заказ</button>
                </form>
            </div>
        </div>
    );
}
