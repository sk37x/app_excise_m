import { useEffect, useState } from "react";
import { Group, Code, Text } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const data = [
  {
    link: "/a",
    label: "menu1",
    text: "ระบบสืบค้นชำระภาษีรถยนต์นำเข้า classic",
    icon: "",
  }
//   ,
//   { link: "/b", label: "menu2", text: "สืบค้นข้อมูลนำเข้า Classic", icon: "" },
//   { link: "/c", label: "menu3", text: "รายละเอียดโครงสร้างภาษี", icon: "" },
];

export function Navbar() {
  const [active, setActive] = useState("0");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let pathname = location.pathname;
    let d = data.find(x => x.link === pathname);
    if(d) {
        setActive(d.label);
    }
  }, []);

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.link);
      }}
    >
      {/* <item.icon className={classes.linkIcon} stroke={1.5} /> */}

      <span>{item.text}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Text>Logo</Text>
          {/* <MantineLogo size={28} /> */}
          {/* <Code fw={700}>v3.1.2</Code> */}
        </Group>
        {links}
      </div>

      {/* 
      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
       */}
    </nav>
  );
}
