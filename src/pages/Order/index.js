import { useState, useEffect } from "react";

import Modal from "~/components/Modal";
import './order.css'
import { GetList } from "~/services/order/orderServices";
import { Button } from 'reactstrap';
import Data from "~/components/Data/Order";

function Order() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openmodal, setOpenmodal] = useState(false);
    const [title, setTitle] = useState("");
    const [id, setId] = useState();
    const openModalAddHandler = () => {
        setTitle("Add Order");
        setOpenmodal(true);
    };

    useEffect(() => {
        setLoading(true);
        GetData()
    }, []);
    async function GetData() {
        setLoading(true);
        const result = await GetList();
        setOrders(result);
        setLoading(false);
    }
    if (loading) return "Loading...";
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
                                <Button color="primary" onClick={openModalAddHandler}>Add Order</Button>
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
                        <Data data={orders} setTitle={setTitle} setOpenmodal={setOpenmodal} setId={setId} GetData={GetData}/>
                    </div>
                </div>
            </div>
        </div>
        {openmodal && <Modal title={title} closeModal={setOpenmodal} id={id} GetData={GetData}/>}
        {/* {<PaginatedItems itemsPerPage={4} />} */}
    </div>
    )

    return order;
}

export default Order;