import {
   Collapse,
   Button,
   MultiSelect,
   Center,
   Loader,
   Select,
   ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { getDataURL } from "../../utils";
import { useState, useEffect } from "react";
import GalleryCard from "../../components/GalleryCard";
import InfiniteScroll from "react-infinite-scroll-component";
import CharacterList from "../../data/characters.json";
import { ArrowsSort } from "tabler-icons-react";

const INITIAL_COUNT = 24;

export default function Page({ cardData }: { cardData: GameCardStripped[] }) {
   const toggleSortDirection = () => {
      if (isAscending) {
         setIsAscending(false);
      } else {
         setIsAscending(true);
      }
   };

   const toggleSortOption = (option: string) => {
      if (option === "Card ID") {
         setSortOption("Card ID");
      } else if (option === "Character") {
         setSortOption("Character");
      }
   };

   const [count, setCount] = useState(INITIAL_COUNT);
   const [cardsList, setCardsList] = useState<GameCardStripped[]>([]);
   const [slicedCardsList, setSlicedCardsList] = useState<GameCardStripped[]>(
      []
   );
   const [opened, { toggle }] = useDisclosure(false);
   const [characterFilterValue, setCharacterFilterValue] = useState<string[]>(
      []
   );
   const [isAscending, setIsAscending] = useState<boolean>(true);
   const [sortOption, setSortOption] = useState<string>("Card ID");

   useEffect(() => {
      let filteredCards: GameCardStripped[] = cardData.filter((card) => {
         if (characterFilterValue.length)
            return characterFilterValue.includes(card.name.toString());
         return true;
      });
      if (isAscending && sortOption === "Card ID")
         setCardsList(filteredCards.sort((a, b) => a.cardID - b.cardID));
      else if (isAscending && sortOption === "Character")
         setCardsList(
            filteredCards.sort((a, b) => a.internalCardID - b.internalCardID)
         );
      else if (!isAscending && sortOption === "Card ID")
         setCardsList(filteredCards.sort((a, b) => b.cardID - a.cardID));
      else if (!isAscending && sortOption === "Character")
         setCardsList(
            filteredCards.sort((a, b) => b.internalCardID - a.internalCardID)
         );
   }, [characterFilterValue, isAscending, sortOption]);

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
            className="mb-3 w-full sm:w-1/3"
         >
            Sort/Filter
         </Button>
         <Collapse in={opened}>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
               <MultiSelect
                  searchable
                  clearable
                  value={characterFilterValue}
                  onChange={setCharacterFilterValue}
                  className="mb-3 w-full"
                  data={CharacterList}
                  label="Characters"
                  placeholder="Pick a character"
               ></MultiSelect>
               <div className="grid grid-cols-12 gap-4">
                  <Select
                     label="Sort Options"
                     placeholder="Card ID"
                     data={["Card ID", "Character"]}
                     className="mb-3 w-full col-span-10"
                     defaultValue={"Card ID"}
                     value={sortOption}
                     onChange={toggleSortOption}
                  ></Select>
                  <ActionIcon
                     variant="outline"
                     onClick={toggleSortDirection}
                     className="mt-7 ml-2 col-span-2"
                  >
                     <ArrowsSort />
                  </ActionIcon>
               </div>
            </div>
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
         internalCardID: card.internalid,
      });
   });
   return {
      props: {
         cardData,
      },
   };
}
