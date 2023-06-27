import ImgCard from "./components/imgCard"
import UserInfo from "./components/userInfo"

export default function App() {
 
  return (
    <>
    <div className="conteinerMain">
      <nav className="NavSide">
        <p className="title">CANALES RECOMENDADOS</p>
         <UserInfo nameUser="Nissaxter" infoUser="League of Legends" statusUser views="6565"/>
         <UserInfo nameUser="Toniki" infoUser="Overwatch 2" statusUser views="112"/>
         <UserInfo nameUser="RenRize" infoUser="Charlando" statusUser views="854" isActive/>
         <UserInfo nameUser="xQc" infoUser="Charlando" statusUser views="657" isActive/>
         <UserInfo nameUser="Putupau" infoUser="Charlando" statusUser views="332"/>
         <UserInfo nameUser="AgenteMaxo" infoUser="Genshin Impact" statusUser views="1104" isActive/>
         <UserInfo nameUser="PlayOverWatch" infoUser="OverWatch 2" statusUser views="4815" isActive/>
         <UserInfo nameUser="One Sky" infoUser="Only Up!" statusUser views="8963"/>
         <UserInfo nameUser="Alanalara" infoUser="League of Legends" statusUser views="106" isActive/>
      </nav>
      <main className="main">
        <ImgCard imgCard titleCard="League of Legends" viewersCard="110.515 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="OverWatch 2" viewersCard="343.545 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Genshin Impact" viewersCard="655.565 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Only Up!" viewersCard="15.985 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="Fall Guys" viewersCard="899.578 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Arte" viewersCard="112.579 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="Final Fantasy" viewersCard="344.509 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="ASMR" viewersCard="8.880 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="F1 23" viewersCard="656.222 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="Call of Duty" viewersCard="343.556 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="VRChat" viewersCard="133.999 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Aire libre" viewersCard="344.567 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="XDefiant" viewersCard="1.833 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Street Fighter" viewersCard="110.515 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="BattleBit" viewersCard="32.234 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="Tibia" viewersCard="99.500 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Pokemon" viewersCard="564.777 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="Clash Royale" viewersCard="88.097 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Halo Infinite" viewersCard="178.589 viewers" newContent="NEW"/>
        <ImgCard imgCard titleCard="Salud y binestar" viewersCard="61.087 viewers" newContent="NEW" isNew/>
        <ImgCard imgCard titleCard="Lines of P" viewersCard="2.454 viewers" newContent="NEW"/>
      </main>
    </div>
    </>
  )
}


