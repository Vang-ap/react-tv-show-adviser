import styleFiveStarRating from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Déclarer un tableau d'étoiles (jsx) vide
  const starList = [];

  // Stocker dans une variable le nombre d'étoile pleine
  const starFillCount = Math.floor(rating);

  // Stocker dans une variable si oui ou non il y'a une demi étoile
  const hasStarHalf = rating - starFillCount >= 0.5;

  // Stocker dans une variable le nombre d'étoile vide
  const emptyStarount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  // Pusher dans le tableau les étoiles pleine
  for (let index = 1; index <= starFillCount; index++) {
    starList.push(<StarFill key={"star-fill" + index} />);
  }

  // Pusher dans le tableau les démi étoiles (s'il y'en a)
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  // Pusher dans le tableau les étoiles vide
  for (let index = 1; index <= emptyStarount; index++) {
    starList.push(<StarEmpty key={"star-empty" + index} />);
  }

  return <div>{starList}</div>;
}
