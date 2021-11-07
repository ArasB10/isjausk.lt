const AboutSection = () => {
  return (
    <div
      className="w3-content w3-justify w3-text-grey w3-padding-32"
      id="about"
    >
      <h2>About</h2>
      <hr className="w3-opacity"></hr>
      <p>
        Some text about me. Some text about me. I am lorem ipsum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <h3 className="w3-padding-16">My Skills</h3>
      <p className="w3-wide">Photography</p>
      <div className="w3-light-grey">
        <div
          className="w3-container w3-center w3-padding-small w3-dark-grey"
          style={{ width: "95%" }}
        >
          95%
        </div>
      </div>
      <p className="w3-wide">Web Design</p>
      <div className="w3-light-grey">
        <div
          className="w3-container w3-center w3-padding-small w3-dark-grey"
          style={{ width: "85%" }}
        >
          85%
        </div>
      </div>
      <p className="w3-wide">Photoshop</p>
      <div className="w3-light-grey">
        <div
          className="w3-container w3-center w3-padding-small w3-dark-grey"
          style={{ width: "80%" }}
        >
          80%
        </div>
      </div>
      <br></br>

      <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">14+</span>
          <br></br>
          Partners
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">55+</span>
          <br></br>
          Projects Done
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">89+</span>
          <br></br>
          Happy Clients
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">150+</span>
          <br></br>
          Meetings
        </div>
      </div>

      <button className="w3-button w3-light-grey w3-padding-large w3-section">
        <i className="fa fa-download"></i> Download Resume
      </button>

      <h3 className="w3-padding-24">My Reputation</h3>
      <img
        src="/w3images/avatar_smoke.jpg"
        alt="Avatar"
        className="w3-left w3-circle w3-margin-right"
        style={{ width: "80px" }}
      ></img>
      <p>
        <span className="w3-large w3-text-black w3-margin-right">
          Chandler Bing.
        </span>{" "}
        Web Designer.
      </p>
      <p>Jane Doe is just awesome. I am so happy to have met her!</p>
      <br></br>

      <img
        src="/w3images/bandmember.jpg"
        alt="Avatar"
        className="w3-left w3-circle w3-margin-right"
        style={{ width: "80px" }}
      ></img>
      <p>
        <span className="w3-large w3-text-black w3-margin-right">
          Chris Fox.
        </span>{" "}
        CEO at Mighty Schools.
      </p>
      <p>Jane Doe saved us from a web disaster.</p>
      <br></br>

      <img
        src="/w3images/avatar_g2.jpg"
        alt="Avatar"
        className="w3-left w3-circle w3-margin-right"
        style={{ width: "80px" }}
      ></img>
      <p>
        <span className="w3-large w3-text-black w3-margin-right">
          Rebecca Flex.
        </span>{" "}
        CEO at Company.
      </p>
      <p>No one is better than Jane Doe.</p>
      <br></br>
    </div>
  );
};

export default AboutSection;
