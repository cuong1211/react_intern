import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import useToken from "~/components/Layout/components/Api/useToken";
import Modal from "~/components/Layout/components/Modal";


function Order() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openmodal, setOpenmodal] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [title, setTitle] = useState("");
    
    const openModalAddHandler = () => {
        setTitle("Add Order");
        setOpenmodal(true);
    };
    const openModalEditHandler = () => {
        setTitle("Edit Order");
        setOpenmodal(true);
    };
    const dropdownHandler = () => {
        setDropdown(!dropdown);
    };
    const option = {
        method: "GET",
        url: "https://intern_project.minhhoangjsc.io/api/orders",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + useToken().token,
        },
    };
    useEffect(() => {
        axios.request(option)
            .then((response) => {
                setOrders(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    const data = orders.map((order) => (
        <tr key={order.id}>
            <td className="text-center">{order.id}</td>
            <td className="text-center">{order.name}</td>
            <td className="text-center text-break">{order.description}</td>
            <td className="text-bold text-center">
                {order.product.map((product) => (
                    <Fragment key={product.id}>
                        <div>
                            {product.name}
                        </div>
                        <hr />

                    </Fragment>
                ))}
            </td>

            <td className="text-center">
                {order.product.map((product) => (
                    <Fragment key={product.id}>
                        <div>
                            {product.quantity}
                        </div>
                        <hr />
                    </Fragment>
                ))}
            </td>
            <td className="text-center">{order.price}</td>
            <td className="text-end">
                <a className="btn btn-light btn-active-light-primary btn-sm" onClick={dropdownHandler}>
                    Actions
                    <span className="svg-icon svg-icon-5 m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fillRule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
                            </g>
                        </svg>
                    </span>
                </a>
                {
                    dropdown &&
                        (
                            <div className="">
                                <div className="menu-item px-3" onClick={openModalEditHandler}>
                                    <span className="menu-link px-3 btn-edit">
                                        Edit
                                    </span>
                                </div>
                                <div className="menu-item px-3">
                                    <span className="menu-link px-3 btn-delete">
                                        Delete
                                    </span>
                                </div>
                            </div>
                        )
                }
            </td>
        </tr >
    ));
    const order = (<div className="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container-xxl">
                <div className="card">
                    <div className="card-header border-0 pt-6">
                        <div className="card-title">
                            <div className="d-flex align-items-center position-relative my-1">
                                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2"
                                            rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                        <path
                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                            fill="black" />
                                    </svg>
                                </span>
                                <input type="text" data-kt-customer-table-filter="search"
                                    className="form-control form-control-solid w-250px ps-15" placeholder="Search Orders" />
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                            
                                <button type="button" className="btn btn-primary btn-add" onClick={openModalAddHandler}>Add Order</button>

                            </div>
                            <div className="d-flex justify-content-end align-items-center d-none"
                                data-kt-customer-table-toolbar="selected">
                                <div className="fw-bolder me-5">
                                    <span className="me-2" data-kt-customer-table-select="selected_count"></span>Selected
                                </div>
                                <button type="button" className="btn btn-danger"
                                    data-kt-customer-table-select="delete_selected">Delete Selected</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
                            <thead>
                                <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                    <th className="m-w-125px text-center">STT</th>
                                    <th className="m-w-125px text-center">Name</th>
                                    <th className="max-w-125px text-center">Description</th>
                                    <th className="m-w-125px text-center">Product</th>
                                    <th className="m-w-125px text-center">Quantity</th>
                                    <th className="m-w-125px text-center">Price</th>
                                    <th className="text-end m-w-70px text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="fw-bold text-gray-600">
                                {data}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {openmodal && <Modal title={title} closeModal={setOpenmodal} />}
    </div>
    )

    return order;
}

export default Order;