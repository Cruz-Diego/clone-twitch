export default function UserInfo(props) {
  
  const userImg = props.userImg;
  const nameUser = props.nameUser;
  const infoUser = props.infoUser;
  const statusUser = props.statusUser;
  const views = props.views;
/*<img src={ imgCard } alt="img" className="imgCard"/>
<span className={ props.isActive ? "userImg" : "UserImgNone" }>{userImg}</span>*/
  return (
    <div className="userCard">
      <img className={ props.isActive ? "userImg" : "UserImgNone" } src={userImg} alt="user"/>
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
