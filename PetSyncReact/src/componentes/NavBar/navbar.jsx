import "../../estilos/navbar.css";

export const NavBar =() => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <i className="bi bi-search"></i>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <i className="bi bi-person-fill"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <i className="bi bi-bell-fill"></i>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}