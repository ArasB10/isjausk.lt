type Props = {
  openNavigation: boolean;
  closeNavigation: () => void;
};

const Navigation = ({ openNavigation, closeNavigation }: Props) => {
  return (
    <>
      <nav
        className="w3-sidebar w3-hide-medium w3-hide-small"
        style={{ width: "40%" }}
      >
        <div className="bgimg"></div>
      </nav>
      <nav
        className={
          openNavigation
            ? "w3-sidebar w3-black w3-animate-right w3-xxlarge opened"
            : "w3-sidebar w3-black w3-animate-right w3-xxlarge closed"
        }
        style={{ paddingTop: "150px;right:0", zIndex: 2 }}
        id="mySidebar"
      >
        <a
          onClick={() => closeNavigation()}
          className="w3-button w3-black w3-xxxlarge w3-display-topright"
          style={{ padding: "0 12px;" }}
        >
          <i className="fa fa-remove"></i>
        </a>
        <div className="w3-bar-block w3-center">
          <a
            href="#"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={() => closeNavigation()}
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={() => closeNavigation()}
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={() => closeNavigation()}
          >
            About
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={() => closeNavigation()}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
