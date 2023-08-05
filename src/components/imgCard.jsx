export default function ImgCard(props) {
    
    const imgCard = props.imgCard;
    const titleCard = props.titleCard;
    const viewersCard = props.viewersCard;
    const newContent = props.newContent;
    
    return(
      <>
        <article className="card">   
          <img src={ imgCard } alt="img" className="imgCard"/>
          <div className="backgroundImg"></div>
          <p className="titleCard">{titleCard}</p>
          <p className="viewersCard">{viewersCard}</p>
          <div className= { props.isNew ? "newContent" : "newContentNone" }>{newContent}</div>
        </article> 
      </>
    );
  }

  /*  <img src={img ? img : 'https://static-cdn.jtvnw.net/ttv-boxart/498566-285x380.jpg'} className='card-img-top' alt='game' />*/