import Element from "../components/Element";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export default function Gallery({ cards }: { cards: any[] }) {
   return (
      // <InfiniteScroll dataLength={cards.length}>
      <div className="flex flex-col sm:grid sm:gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
         {cards?.map((card) => (
            <Element
               key={card.cardid}
               cardID={card.cardid}
               cardRarity={card.cardrarity}
               studentName={card.studentname}
               cardTitle={card.cardtitle}
            />
         ))}
      </div>
      // </InfiniteScroll>
   );
}
