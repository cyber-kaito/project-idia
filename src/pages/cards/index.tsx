import { Collapse, Button, MultiSelect, Center, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { getDataURL } from "../../utils";
import { useState, useEffect } from "react";
import GalleryCard from "../../components/GalleryCard";
import InfiniteScroll from "react-infinite-scroll-component";
import CharacterList from "../../data/characters.json";
// import DormList from "../../data/dorms.json";

const INITIAL_COUNT = 24;

export default function Page({ cardData }: { cardData: GameCardStripped[] }) {
   const [count, setCount] = useState(INITIAL_COUNT);
   const [cardsList, setCardsList] = useState<GameCardStripped[]>([]);
   const [slicedCardsList, setSlicedCardsList] = useState<GameCardStripped[]>(
      []
   );
   const [opened, { toggle }] = useDisclosure(false);
   const [characterFilterValue, setCharacterFilterValue] = useState<string[]>(
      []
   );
   // const [dormFilterValue, setDormFilterValue] = useState<any[]>([]);
   // const [rarityFilterValue, setRarityFilterValue] = useState<any[]>([]);

   useEffect(() => {
      let filteredCards: GameCardStripped[] = cardData.filter((card) => {
         if (characterFilterValue.length)
            return characterFilterValue.includes(card.name.toString());
         return true;
      });
      setCardsList(filteredCards);
   }, [characterFilterValue, cardData]);

   // useEffect(() => {
   //    let filteredCards: any[] = cardData.filter((card) => {
   //       if (dormFilterValue.length)
   //          return dormFilterValue.includes(card.studentdorm.toString());
   //       return true;
   //    });
   //    setCardsList(filteredCards);
   // }, [dormFilterValue]);

   // useEffect(() => {
   //    let filteredCards: any[] = cardData.filter((card) => {
   //       if (rarityFilterValue.length)
   //          return rarityFilterValue.includes(card.cardrarity.toString());
   //       return true;
   //    });
   //    setCardsList(filteredCards);
   // }, [rarityFilterValue]);

   useEffect(() => {
      setSlicedCardsList(cardsList.slice(0, count));
   }, [cardsList, count]);

   const loadMore = () => {
      setCount(count + INITIAL_COUNT);
   };
   return (
      <>
         <h1 className="text-left text-2xl my-3 pl-4 sm:pl-0 font-bold">
            Cards
         </h1>
         <Button
            onClick={toggle}
            variant="outline"
            color="gray"
            className="mb-3 w-1/2 sm:w-1/3"
         >
            Filter
         </Button>
         <Collapse in={opened}>
            <MultiSelect
               searchable
               clearable
               value={characterFilterValue}
               onChange={setCharacterFilterValue}
               className="mb-3 w-2/3 sm:w-1/3"
               data={CharacterList}
               label="Characters"
               placeholder="Pick a character"
            ></MultiSelect>
            {/* <MultiSelect
               searchable
               clearable
               value={dormFilterValue}
               onChange={setDormFilterValue}
               className="mb-3 w-2/3 sm:w-1/3"
               data={DormList}
               label="Dorms"
               placeholder="Pick a dorm"
            ></MultiSelect>
            <MultiSelect
               searchable
               clearable
               value={rarityFilterValue}
               onChange={setRarityFilterValue}
               className="mb-3 w-2/3 sm:w-1/3"
               data={["R", "SR", "SSR"]}
               label="Rarity"
               placeholder="Pick a rarity"
            ></MultiSelect> */}
         </Collapse>
         <InfiniteScroll
            dataLength={slicedCardsList.length}
            next={loadMore}
            hasMore={count < cardsList.length}
            loader={
               <Center>
                  <Loader variant="dots" />
               </Center>
            }
         >
            <div className="flex flex-col sm:grid sm:gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
               {slicedCardsList?.map((card) => (
                  <GalleryCard key={card.cardID} card={card} />
               ))}
            </div>
         </InfiniteScroll>
      </>
   );
}

export async function getStaticProps() {
   const res = await fetch(getDataURL(`cards.json`));
   const data = await res.json();
   let cardData: GameCardStripped[] = [];
   data.forEach((card: any) => {
      cardData.push({
         cardID: card.cardid,
         rarity: card.cardrarity,
         name: card.studentname,
         title: card.cardtitle,
      });
   });
   return {
      props: {
         cardData,
      },
   };
}
