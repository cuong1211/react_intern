import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const ActionsDropdown = ({ onDelete, id, onDataChange  }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
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
    <td className="text-end">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
          {t("Actions")}
        </DropdownToggle>
        <DropdownMenu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
          <DropdownItem tag={Link} to="/view">
            {t("View")}
          </DropdownItem>
          <DropdownItem onClick={handleDelete}>{t("Delete")}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </td>
  );
};

export default ActionsDropdown;
