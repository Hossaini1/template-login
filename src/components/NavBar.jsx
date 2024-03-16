import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  const links = [
    {
      id: 1, // oder nanoid()
      path: "/",
      pagename: "Home",
    },
    {
      id: 2, // oder nanoid()
      path: "/about",
      pagename: "About",
    },

    {
      id: 3, // oder nanoid()
      path: "/projects",
      pagename: "Projects",
    },
    {
      id: 4, // oder nanoid()
      path: "/login",
      pagename: "Login",
    },
  ];
  return (
    <>
      NavBar
      <nav>
        <ul>
            {links.map((link)=>(
                <li key={link.id}><NavLink to={link.path}>{link.pagename}</NavLink></li>
            ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default NavBar;
