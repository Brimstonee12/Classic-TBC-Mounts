import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/wow_tbc.webp";

export const Navbar = () => {
  const navbarLinksData = [
    {
      link: "/",
      title: "Classic Easy Mounts",
    },
    {
      link: "/classic-easy-mounts",
      title: "Classic Rare Mounts",
    },
    {
      link: "/classic-rare-mounts",
      title: "TBC Easy Mounts",
    },
    {
      link: "/tbc-easy-mounts",
      title: "TBC Rare Mounts",
    },
    {
      link: "/tbc-rare-mounts",
      title: "Vendor Mounts",
    },
  ];

  return (
    <div className="navbarContainer">
      <div className="navbarLogo">
        <img width="250" height="160" src={logo} />
      </div>
      <div className="navbarLinksContainer">
        {navbarLinksData.map((linkData) => (
          <NavLink
            to={linkData.link}
            className={({ isActive }) =>
              isActive ? "navbarLinkActive" : "navbarLink"
            }
          >
            <h4 className="navbarTitle">{linkData.title}</h4>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
