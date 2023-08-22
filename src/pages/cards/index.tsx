import { Collapse, Button, MultiSelect, Center, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { getDataURL } from "../../utils";
import { useState, useEffect } from "react";
import GalleryCard from "./components/GalleryCard";
import InfiniteScroll from "react-infinite-scroll-component";
import CharacterList from "../../data/characters.json";

export default function Page({ card_data }: { card_data: any[] }) {
   const [count, setCount] = useState(24);
   const [cardsList, setCardsList] = useState<any[]>([]);
   const [slicedCardsList, setSlicedCardsList] = useState<any[]>([]);
   const [opened, { toggle }] = useDisclosure(false);
   const [filterValue, setFilterValue] = useState<any[]>([]);

   useEffect(() => {
      let filteredCards: any[] = card_data.filter((card) => {
         if (filterValue.length)
            return filterValue.includes(card.studentname.toString());
         return true;
      });
      setCardsList(filteredCards);
   });

   useEffect(() => {
      setSlicedCardsList(cardsList.slice(0, count));
   }, [cardsList, count]);

   const loadMore = () => {
      setCount(count + 24);
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
            Filters
         </Button>
         <Collapse in={opened}>
            <MultiSelect
               searchable
               clearable
               value={filterValue}
               onChange={setFilterValue}
               className="mb-3 w-2/3 sm:w-1/3"
               data={CharacterList}
               label="Characters"
               placeholder="Pick a character"
            ></MultiSelect>
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
                  <GalleryCard
                     key={card.cardid}
                     cardID={card.cardid}
                     cardRarity={card.cardrarity}
                     studentName={card.studentname}
                     cardTitle={card.cardtitle}
                  />
               ))}
            </div>
         </InfiniteScroll>
      </>
   );
}

export async function getStaticProps() {
   const res = await fetch(getDataURL(`cards.json`));
   const card_data = await res.json();
   return {
      props: {
         card_data,
      },
      revalidate: 10,
   };
}
