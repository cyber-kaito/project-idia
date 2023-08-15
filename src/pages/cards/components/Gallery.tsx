import { Center, Loader } from "@mantine/core";
import Element from "../components/Element";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

export default function Gallery({ cards }: { cards: any[] }) {
   const [count, setCount] = useState(24);
   const [slicedCardsList, setSlicedCardsList] = useState<any[]>([]);

   useEffect(() => {
      setSlicedCardsList(cards.slice(0, count));
   }, [cards, count]);

   const loadMore = () => {
      setCount(count + 24);
   };
   return (
      <InfiniteScroll
         dataLength={slicedCardsList.length}
         next={loadMore}
         hasMore={count < cards.length}
         loader={
            <Center>
               <Loader variant="dots" />
            </Center>
         }
      >
         <div className="flex flex-col sm:grid sm:gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
            {slicedCardsList?.map((card) => (
               <Element
                  key={card.cardid}
                  cardID={card.cardid}
                  cardRarity={card.cardrarity}
                  studentName={card.studentname}
                  cardTitle={card.cardtitle}
               />
            ))}
         </div>
      </InfiniteScroll>
   );
}
