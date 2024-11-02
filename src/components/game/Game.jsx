import "./game.scss";
import { data } from "../../data";
import { useParams } from "react-router-dom";

const Game = () => {
  const { name } = useParams();

  const gameItem = data.find((item) => item.name === name);

  return (
    <div>
      {gameItem ? (
        <div dangerouslySetInnerHTML={{ __html: gameItem.embed }} />
      ) : (
        <p>Game not found</p>
      )}
    </div>
  );
};

export default Game;
