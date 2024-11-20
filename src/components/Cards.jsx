import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const cards = useLoaderData();

  return (
    <div className="py-10  container mx-auto px-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
