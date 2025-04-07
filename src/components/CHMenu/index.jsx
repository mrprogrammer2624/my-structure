import React from "react";
import { Icons } from "../../constants";
import { NavLink } from "react-router-dom";
import styles from "./CHMenu.module.css";
import { MenuLink } from "./MenuLink";
import { CHDropdown } from "../CHFormComponents/CHDropdown";

export const CHMenu = ({ expanded = false }) => {
  const MenuList = [
    {
      link: "/",
      name: "Dashboard",
      icon: Icons.DashboardOutlined,
      iconActive: Icons.DashboardFilled,
    },
    {
      link: "/inbox",
      name: "Inbox",
      icon: Icons.InboxOutlined,
      iconActive: Icons.InboxFilled,
    },
    {
      link: "/contact",
      name: "Contact",
      icon: Icons.ContactOutlined,
      iconActive: Icons.ContactFilled,
      subMenu: [
        {
          link: "/contact",
          name: "Contact",
        },
        {
          link: "/contact/list",
          name: "Contact List",
        },
      ],
    },
    {
      link: "/task",
      name: "Task",
      icon: Icons.TaskOutlined,
      iconActive: Icons.TaskFilled,
    },
    {
      link: "/create",
      name: "Create",
      icon: Icons.CreateOutlined,
      iconActive: Icons.CreateFilled,
    },
    {
      link: "/integrations",
      name: "Integrations",
      icon: Icons.IntegrationOutlined,
      iconActive: Icons.IntegrationFilled,
    },
    {
      link: "/analytics",
      name: "Analytics",
      icon: Icons.AnalyticsOutlined,
      iconActive: Icons.AnalyticsOutlined,
    },
    {
      link: "/community",
      name: "Community",
      icon: Icons.CommunityOutlined,
      iconActive: Icons.CommunityFilled,
    },
  ];

  const getDropdownItems = (list) =>
    list.map((item) => {
      return {
        key: "index" + item.name,
        label: (
          <NavLink
            to={item.link}
            className={() =>
              window.location.pathname == item.link ? "active" : ""
            }
          >
            {item.name}
          </NavLink>
        ),
      };
    });

  return (
    <nav className={styles.menu}>
      {MenuList &&
        MenuList.map((item, index) => {
          if (item.subMenu) {
            return (
              <CHDropdown
                key={index}
                dropdownMenu={getDropdownItems(item.subMenu)}
                align={{ offset: [expanded ? 192 : 96, -56] }}
                rootClassName={styles.menuDropdown}
              >
                <div>
                  <MenuLink item={item} expanded={expanded} />
                </div>
              </CHDropdown>
            );
          } else {
            return <MenuLink key={index} item={item} expanded={expanded} />;
          }
        })}
    </nav>
  );
};
