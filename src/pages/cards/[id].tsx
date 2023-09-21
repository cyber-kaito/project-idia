import CardImages from "../../components/CardImages";
import CardStats from "../../components/CardStats";
import CardInfo from "../../components/CardInfo";
import { useRouter } from "next/router";
import { getDataURL } from "../../utils";

export default function Page({ card_data }: { card_data: any[] }) {
   const router = useRouter();
   const { id } = router.query;
   const card = card_data.find((item) => item.cardid.toString() === id);
   return (
      <>
         <h1 className="text-xl sm:text-2xl font-bold pt-1 pb-6">
            {card?.cardtitle.concat(" (", card.studentname, ")")}
         </h1>
         <CardImages
            cardID={card.cardid}
            cardRarity={card.cardrarity}
            studentName={card.studentname}
            cardTitle={card.cardtitle}
         />
         <CardStats
            minhp={card.minhp}
            minpow={card.minpow}
            maxhp={card.maxhp}
            maxpow={card.maxpow}
         />
         <CardInfo
            cardID={card.cardid}
            cardRarity={card.cardrarity}
            studentName={card.studentname}
            cardTitle={card.cardtitle}
            cardType={card.cardtype}
            cardAcquisition={card.acquisition}
            spell1name={card.spell1name}
            spell1desc={card.spell1desc}
            spell2name={card.spell2name}
            spell2desc={card.spell2desc}
            spell3name={card.spell3name}
            spell3desc={card.spell3desc}
            buddy1={card.buddy1}
            buddy2={card.buddy2}
            buddy3={card.buddy3}
            bonus1={card.bonus1}
            bonus2={card.bonus2}
            bonus3={card.bonus3}
         />
      </>
   );
}

export async function getStaticPaths() {
   const res = await fetch(getDataURL(`cards.json`));
   const card_data = await res.json();
   const paths = card_data.map((item: { cardid: any }) => ({
      params: { id: item.cardid.toString() },
   }));
   return { paths, fallback: "blocking" };
}

export async function getStaticProps() {
   const res = await fetch(getDataURL(`cards.json`));
   const card_data = await res.json();
   return {
      props: {
         card_data,
      },
   };
}
