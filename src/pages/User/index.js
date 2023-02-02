import axios from "axios";
import React from "react";
import ActionsDropdown from "~/components/Actions/actions.js"


function User({ dataId }) {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const option = {
        method: "GET",
        url: "https://intern_project.minhhoangjsc.io/api/users",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 53|C7G7awqZOjVY0uE7mZo6Qn713L6ciLAVxGZclQAJ",
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
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    const data = users.map((user) => (
        <tr key={user.id}>
            <td className="text-center">{user.id}</td>
            <td className="text-center">{user.name}</td>
            <td className="text-center text-break">{user.email}</td>
<td>
  <ActionsDropdown id= {user.id} />
</td>
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
                                    className="form-control form-control-solid w-250px ps-15" placeholder="Search Orders" />
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                                {/* <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end">

                                    <span className="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                                fill="black" />
                                        </svg>
                                    </span>
                                    Filter
                                </button>
                                <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true"
                                    id="kt-toolbar-filter">
                                    <div className="px-7 py-5">
                                        <div className="fs-4 text-dark fw-bolder">Filter Options</div>
                                    </div>
                                    <div className="separator border-gray-200"></div>
                                    <div className="px-7 py-5">
                                        <div className="mb-10">
                                            <label className="form-label fs-5 fw-bold mb-3">Month:</label>
                                            <select className="form-select form-select-solid fw-bolder" data-kt-select2="true"
                                                data-placeholder="Select option" data-allow-clear="true"
                                                data-kt-customer-table-filter="month"
                                                data-dropdown-parent="#kt-toolbar-filter">
                                                <option></option>
                                                <option value="aug">August</option>
                                                <option value="sep">September</option>
                                                <option value="oct">October</option>
                                                <option value="nov">November</option>
                                                <option value="dec">December</option>
                                            </select>
                                        </div>
                                        <div className="mb-10">
                                            <label className="form-label fs-5 fw-bold mb-3">Payment Type:</label>
                                            <div className="d-flex flex-column flex-wrap fw-bold"
                                                data-kt-customer-table-filter="payment_type">
                                                <label
                                                    className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                                                    <input className="form-check-input" type="radio" name="payment_type"
                                                        value="all" checked="checked" />
                                                    <span className="form-check-label text-gray-600">All</span>
                                                </label>
                                                <label
                                                    className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                                                    <input className="form-check-input" type="radio" name="payment_type"
                                                        value="visa" />
                                                    <span className="form-check-label text-gray-600">Visa</span>
                                                </label>
                                                <label
                                                    className="form-check form-check-sm form-check-custom form-check-solid mb-3">
                                                    <input className="form-check-input" type="radio" name="payment_type"
                                                        value="mastercard" />
                                                    <span className="form-check-label text-gray-600">Mastercard</span>
                                                </label>
                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input className="form-check-input" type="radio" name="payment_type"
                                                        value="american_express" />
                                                    <span className="form-check-label text-gray-600">American Express</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="reset" className="btn btn-light btn-active-light-primary me-2"
                                                data-kt-menu-dismiss="true"
                                                data-kt-customer-table-filter="reset">Reset</button>
                                            <button type="submit" className="btn btn-primary" data-kt-menu-dismiss="true"
                                                data-kt-customer-table-filter="filter">Apply</button>
                                        </div>

                                    </div>

                                </div> */}
                                <button type="button" className="btn btn-primary btn-add" >Add Order</button>
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
    </div>
    return user;
}

export default User;