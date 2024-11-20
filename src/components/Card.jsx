import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleExploreNow = (id) =>{
    if(user){
      navigate(`/adventureDetails/${id}`)
    }else{
      navigate('/auth/login');
    }
  }
  const { adventureTitle, image, ecoFriendlyFeatures, id } = card;
  return (
    <div className="border  rounded-lg shadow-lg p-6 bg-white">
      {/* Adventure Image */}
      <img
        src={image}
        alt={adventureTitle}
        className="w-full h-52 object-cover rounded-lg"
      />

      
      <h3 className="text-xl font-semibold mt-6 ml-1">{adventureTitle}</h3>

      {/* Eco-Friendly Features */}
      <ul className="mt-3 text-sm text-gray-600  ml-1">
        <strong>Eco-Friendly Features:</strong>

        <div className="mt-2">
          {ecoFriendlyFeatures.map((feature, index) => (
            <li key={index} className="list-disc ml-5 ">
              {feature}
            </li>
          ))}
        </div>
      </ul>

     
      <button
        onClick={()=>handleExploreNow(id)}
        className="btn text-white bg-[#0F1035] hover:text-[#0F1035] hover:bg-[#0f10356c]  mt-6 w-full rounded-xl"
      >
        Explore Now
      </button>
    </div>
  );
};

export default Card;
