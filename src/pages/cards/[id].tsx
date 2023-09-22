import CardImages from "../../components/CardImages";
import CardStats from "../../components/CardStats";
import CardInfo from "../../components/CardInfo";
import { getDataURL } from "../../utils";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Page({ card }: { card: any }) {
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

export const getStaticPaths = (async () => {
   const res = await fetch(getDataURL(`cards.json`));
   const card_data = await res.json();
   const paths = card_data.map((card: { cardid: any }) => ({
      params: { id: card.cardid.toString() },
   }));
   return { paths, fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = async (context) => {
   const res = await fetch(getDataURL(`cards.json`));
   const data = await res.json();
   const card = data.find(
      (card: any) => card.cardid.toString() === context.params?.id
   );
   return {
      props: {
         card,
      },
   };
};
