import Element from "../components/Element";
import card_data from "../../../cards.json";

export default function Gallery() {
   return (
      <>
         <div className="flex flex-col sm:grid sm:gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
            {card_data.map((item) => (
               <Element id={item.cardid} />
            ))}
         </div>
      </>
   );
}
