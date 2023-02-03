import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const ActionsDropdown = ({ onDelete, id, onDataChange , setDropdownOpen}) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [dropdownOpenState, setDropdownOpenState] = useState(false);
  const toggle = () => {
    setDropdownOpenState(prevState => !prevState)
    const DropdownHandle =() => {
        setDropdownOpen(prevState => !prevState);
    }
  };

  const handleDelete = async () => {
    try {

        var qs = require('qs');
        var data = qs.stringify({
        });
        var config = {
          method: 'delete',
          url: `https://intern_project.minhhoangjsc.io/api/users/${id}`,
          headers: {
            'Authorization': 'Bearer 53|C7G7awqZOjVY0uE7mZo6Qn713L6ciLAVxGZclQAJ'
          },
          data : data
        };
        axios.request(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          const DropdownHandle =() => {
            setDropdownOpen(prevState => !prevState);
           };
           DropdownHandle();

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <td className="text-center">
      <Dropdown isOpen={dropdownOpenState} toggle={toggle}>
        <DropdownToggle className="btn btn-sm btn-light btn-active-light-primary" >
          {t("Actions")}
        </DropdownToggle>
        <DropdownMenu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" >
          <DropdownItem tag={Link} to="/view">
            {t("Edit")}
          </DropdownItem>
          <DropdownItem onClick={handleDelete}>{t("Delete")}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </td>
  );
};

export default ActionsDropdown;
