import { useState } from "react";
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io";
import { RiShareBoxFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import "./Navbar.css";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav__container">
      <nav className="nav flex">
        <header className="nav__header flex">
          <TbBrandBooking className="nav__logo" />
          <span>
            {" "}
            BookMySlot <br />
            <small>Best booking ever</small>
          </span>
        </header>
        <ul className={showMenu ? "nav__links-mobile" : "nav__links"}>
          <li className="nav__item">
            Menu <IoIosArrowDown />
          </li>
          <li className="nav__item">Contact us</li>
          <li className="nav__item">
            <RiShareBoxFill className="share__icon" /> Share Link
          </li>
        </ul>
        <div className="nav__mobile-btns">
          {showMenu ? (
            <button onClick={toggleMenu}>
              <IoMdClose />
            </button>
          ) : (
            <button onClick={toggleMenu}>
              <IoMdMenu />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
