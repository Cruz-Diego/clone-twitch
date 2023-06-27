export default function ImgCard(props) {
    
    const imgCard = props.imgCard;
    const titleCard = props.titleCard;
    const viewersCard = props.viewersCard;
    const newContent = props.newContent;
    
    return(
    <article className="card">   
      <div className="imgCard">{imgCard}</div>
      <p className="titleCard">{titleCard}</p>
      <p className="viewersCard">{viewersCard}</p>
      <div className= { props.isNew ? "newContent" : "newContentNone" }>{newContent}</div>
    </article> 
    );
  }

  /*isNew*/