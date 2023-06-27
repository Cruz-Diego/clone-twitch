export default function UserInfo(props) {
  
  const userImg = props.userImg;
  const nameUser = props.nameUser;
  const infoUser = props.infoUser;
  const statusUser = props.statusUser;
  const views = props.views;

  return (
    <div className="userCard">
      <span className={ props.isActive ? "userImg" : "UserImgNone" }>{userImg}</span>
      <div className="conteinerInfo">
        <p className="nameUser">{nameUser}</p>
        <p className="infoUser">{infoUser}</p>
      </div>
      <div className="conteinerStatus">
        <div className={ props.isActive ? "statusUser" : "statusUserNone" }>{statusUser}</div>
        <p className={ props.isActive ? "views" : "viewsNone" } >{views}</p>
      </div>
    </div>
  );
}
