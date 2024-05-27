/*!

=========================================================
* RITD - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link, Navigate } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function MainNavbar(logo) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("default-states");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img alt="RITD.NL" src={require("assets/img/RITD.png")} />
            <hr className={logo.color ? logo.color : "line-danger"} />
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            RITD
          </UncontrolledTooltip>
          <a className="nerd-link" href="https://nerd.ritd.nl/">NERD VERSION</a>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <Nav navbar className="main-navbar">
            <NavItem className="active">
              <NavLink
                href="/"
              >
                <p>Home</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/diensten"

              >
                <p>Diensten</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/over-ons"

              >
                <p>OVER ONS</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/werken-bij"

              >
                <p>Werken bij</p>
              </NavLink>
            </NavItem>
            {/* <NavItem>
                      <NavLink
                        href="/over-ons"
                        
                      >
                        <p>Over ons</p>
                      </NavLink>
                    </NavItem> */}
            {/* <UncontrolledDropdown nav>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="/over-ons"
                id="navbarDropdownMenuLink"
                nav
              >
                <p>Over ons</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                <DropdownItem
                  href="/over-ons"
                >
                  Over ons
                </DropdownItem>
                <DropdownItem
                  href="/"
                >
                  Blog
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            {/* <NavItem>
                      <NavLink
                        href="/werken-bij"
                        
                      >
                        <p>Werken bij</p>
                      </NavLink>
                    </NavItem> */}
            {/* <UncontrolledDropdown nav>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="/werken-bij"
                id="navbarDropdownMenuLink"
                nav
              >
                <p>Werken bij</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                <DropdownItem
                  href="/werken-bij"
                >
                  Werken bij
                </DropdownItem>
                <DropdownItem
                  href="/"
                >
                  Vacatures
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem>
              <NavLink
                href="/contact"

              >
                <p>Contact</p>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                href="#pablo"

              >
                <p><i className="tim-icons icon-single-02" /></p>
              </NavLink>
            </NavItem> */}
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/watch/rootitdevelopment/"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/ritd.bv"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/company/ritd/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Linkedin"
              >
                <i className="fab fa-linkedin" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
