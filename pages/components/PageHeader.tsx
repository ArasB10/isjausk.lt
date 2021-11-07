const PageHeader = () => {
  return (
    <header
      className="w3-container w3-center"
      style={{ padding: "128px 16px" }}
      id="home"
    >
      <h1 className="w3-jumbo">
        <b>Evelina Sabaitytė</b>
      </h1>
      <p>Psichologė</p>
      <img
        src="/w3images/profile_girl.jpg"
        className="w3-image w3-hide-large w3-hide-small w3-round"
        style={{ display: "block", width: "60%", margin: "auto" }}
      ></img>
      <img
        src="/w3images/profile_girl.jpg"
        className="w3-image w3-hide-large w3-hide-medium w3-round"
        width="1000"
        height="1333"
      ></img>
      <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
        <i className="fa fa-download"></i>Užklausa konsultacijai
      </button>
    </header>
  );
};

export default PageHeader;
