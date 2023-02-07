import { Fragment, useEffect, useState } from "react";
import ActionDropDown from "~/components/Dropdown";
import ReactPaginate from 'react-paginate';
function Data(props) {
    const { data, setTitle, setOpenmodal ,setId} = props;
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const itemsPerPage = 10;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, data, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <Fragment>
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
                    {currentItems.map((order) => (
                        <tr key={order.id}>
                            <td className="text-center">{order.id}</td>
                            <td className="text-center">{order.name}</td>
                            <td className="text-center text-break">{order.description}</td>
                            <td className="text-bold text-center">
                                {order.product.map((product) => (
                                    <Fragment key={product.id}>
                                        <div>
                                            {product.name}({product.color},{product.size})
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

                            <td className="text-center">
                                {<ActionDropDown title={setTitle} setOpenmodal={setOpenmodal} id={order.id} setId={setId}></ActionDropDown>}
                            </td>
                        </tr >
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeClassName="active"
            />
        </Fragment>

    );
}

export default Data;