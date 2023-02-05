import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';


function ActionDropDown({ setOpenmodal, title }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [data, setData] = useState([]);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const openModalEditHandler = () => {
        title("Edit Order");
        setOpenmodal(true);
    };
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className="btn btn-sm btn-light btn-active-light-primary">
                Action
            </DropdownToggle>
            <DropdownMenu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">     
                <DropdownItem onClick={openModalEditHandler}>
                    Edit 
                </DropdownItem>
                <DropdownItem>
                    Delete 
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ActionDropDown;