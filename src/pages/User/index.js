import axios from "axios";
import React,{useState} from "react";
import ActionsDropdown from "~/components/Actions/actions.js"
import useToken from "~/components/Layout/components/Api/useToken";
import Modal from "~/components/Layout/components/Modal";


function User({ dataId }) {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [openmodal, setOpenmodal] = useState(false);
    const [title, setTitle] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const openModalAddHandler = () => {
        setTitle("Add User");
        setOpenmodal(true);
    };
    const option = {
        method: "GET",
        url: "https://intern_project.minhhoangjsc.io/api/users",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + useToken().token,
        },
    };
    React.useEffect(() => {
       const data = () => {
       axios.request(option)
            .then((response) => {
                console.log('ok',response.data.data);
                setUsers(response.data.data);
                setLoading(false);

            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
       }
         data();
    }, [openmodal, dropdownOpen]);
    if (loading) return "Loading...";
    if (error) return "Error!";
    const data = users.map((user) => (
        <tr key={user.id}>
            <td className="text-center">{user.id}</td>
            <td className="text-center">{user.name}</td>
            <td className="text-center text-break">{user.email}</td>
            <ActionsDropdown id= {user.id} setDropdownOpen={setDropdownOpen}/>
        </tr>
    ));
    const user = <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
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
                                    className="form-control form-control-solid w-250px ps-15" placeholder="Search Users" />
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                            
                                <button type="button" className="btn btn-primary btn-add" onClick={openModalAddHandler}>Add User</button>

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
                                    <th className="max-w-125px text-center">Email</th>

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
    return user;
}

export default User;