import CardImages from "../../components/CardImages";
import CardStats from "../../components/CardStats";
import CardInfo from "../../components/CardInfo";
import { getDataURL } from "../../utils";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Page({ card }: { card: GameCard }) {
   return (
      <>
         <h1 className="text-xl sm:text-2xl font-bold pt-1 pb-6">
            {card.title.concat(" (", card.name, ")")}
         </h1>
         <CardImages card={card} />
         <CardStats card={card} />
         <CardInfo card={card} />
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
   const cardObj = data.find(
      (card: any) => card.cardid.toString() === context.params?.id
   );
   const card: GameCard = {
      cardID: cardObj.cardid,
      name: cardObj.studentname,
      title: cardObj.cardtitle,
      rarity: cardObj.cardrarity,
      internalCardID: cardObj.internalid,
      jpOnly: cardObj.jponly,
      dorm: cardObj.studentdorm,
      type: cardObj.cardtype,
      minHP: cardObj.minhp,
      maxHP: cardObj.maxhp,
      minPOW: cardObj.minpow,
      maxPOW: cardObj.maxpow,
      spell1Name: cardObj.spell1name,
      spell2Name: cardObj.spell2name,
      spell3Name: cardObj.spell3name,
      spell1Type: cardObj.spell1type,
      spell2Type: cardObj.spell2type,
      spell3Type: cardObj.spell3type,
      spell1Desc: cardObj.spell1desc,
      spell2Desc: cardObj.spell2desc,
      spell3Desc: cardObj.spell3desc,
      spell1Effect1: cardObj.spell1effect1,
      spell1Effect2: cardObj.spell1effect2,
      spell2Effect: cardObj.spell2effect,
      spell3Effect1: cardObj.spell3effect1,
      spell3Effect2: cardObj.spell3effect2,
      buddy1: cardObj.buddy1,
      buddy2: cardObj.buddy2,
      buddy3: cardObj.buddy3,
      bonus1: cardObj.bonus1,
      bonus2: cardObj.bonus2,
      bonus3: cardObj.bonus3,
      duoPartner: cardObj.duopartner,
      acquisition: cardObj.acquisition,
   };
   return {
      props: {
         card,
      },
   };
};
