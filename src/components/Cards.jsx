
import { useLoaderData } from "react-router-dom";


const Cards = () => {
    const cards = useLoaderData();
    console.log(cards);
    
   
    return (
        <div  className="grid grid-cols-3 gap-6 container mx-auto">
            {/* {
                players.map(player => <Player key={player.id} player={player} handleSelectedPlayers={handleSelectedPlayers}></Player>)
            } */}
            {/* {
                cards.map(card => <Card ></Card>)
            } */}
        </div>
    );
};

export default Cards;