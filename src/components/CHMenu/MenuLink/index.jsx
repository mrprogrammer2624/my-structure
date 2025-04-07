import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";
import { Tooltip } from "antd";
import clsx from "clsx";

export const MenuLink = ({ item, expanded }) => {
  const { pathname } = useLocation();
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    item.subMenu &&
      item.subMenu.map((submenu) => {
        setActiveClass(submenu.link === pathname);
      });
  }, []);

  return (
    <>
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          isActive || activeClass
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        {({ isActive }) => {
          return (
            <>
              <Tooltip
                placement="bottom"
                title={expanded ? "" : item.name}
                color="var(--clr-gray-washed)"
                overlayInnerStyle={{ color: "var(--clr-black)" }}
              >
                <span className={clsx(styles.navIcon, "p-1 d-inline-flex")}>
                  {isActive ? item.iconActive : item.icon}
                </span>
              </Tooltip>
              <span
                className={clsx(styles.navText, {
                  [styles.menuExpanded]: expanded,
                })}
              >
                {item.name}
              </span>
            </>
          );
        }}
      </NavLink>
    </>
  );
};
