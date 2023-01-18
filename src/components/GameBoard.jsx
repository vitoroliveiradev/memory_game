import { CardElement } from "./CardElement";

export const GameBoard = (props) => {
  return (
    <div id="gameBoard">
      {props.cards.map((item, index) => (
        <CardElement handleFlip={props.handleFlip} card={item} key={index} />
      ))}
    </div>
  );
};
