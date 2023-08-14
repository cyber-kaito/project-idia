import CardImages from "./components/CardImages";
import CardStats from "./components/CardStats";
import CardInfo from "./components/CardInfo";
import { useRouter } from "next/router";
import card_data from "../../cards.json";

export default function Page() {
   const router = useRouter();
   const { id } = router.query;
   const card = card_data.find((data) => data.cardid.toString() === id);
   return (
      <>
         <h1 className="text-xl sm:text-2xl font-bold pt-1 pb-6">
            {card?.cardtitle.concat(" (", card.studentname, ")")}
         </h1>
         <CardImages id={id} />
         <CardStats id={id} />
         <CardInfo id={id} />
      </>
   );
}
