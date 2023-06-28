import ImgCard from "./components/imgCard";
import UserInfo from "./components/userInfo";

import { imgCards } from "./data/imgCard";
import { usersInfo } from "./data/userInfo";

export default function App() {
  return (
    <>
      <div className="conteinerMain">
        <nav className="NavSide">
          <p className="title">CANALES RECOMENDADOS</p>
          {usersInfo.map((users, index) => {
            return (
          <UserInfo
            key={`users-${index}`}
            userImg={users.userImg}
            nameUser={users.nameUser}
            infoUser={users.infoUser}
            statusUser={users.statusUser}
            views={users.views}
            isActive={users.isActive}
          />
          );
        })}
        </nav>
        <main className="main">
          {imgCards.map((imgCard, index) => {
            return (
              <ImgCard
                key={`imgCards-${index}`}
                imgCard={imgCard.imgCard}
                titleCard={imgCard.titleCard}
                viewersCard={imgCard.viewersCard}
                newContent={imgCard.newContent}
                isNew={imgCard.isNew}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}