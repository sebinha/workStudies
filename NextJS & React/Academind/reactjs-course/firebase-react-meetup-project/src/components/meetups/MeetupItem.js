import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";


function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext)
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)
  
  function toFavoritesButtonHandler(){
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }

  }

  return ( 
    <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toFavoritesButtonHandler}>{itemIsFavorite ? "Remove from Favorites" : "To Favorites"}</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
