import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const cards = useLoaderData();

  return (
    <div className="py-16  container mx-auto px-4">
        <h2 className="text-white text-4xl font-bold text-center mb-16">Top Mountain Trek Adventures</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
