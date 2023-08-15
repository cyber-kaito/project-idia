import CharacterFilter from "./CharacterFilter";
import DormFilter from "./DormFilter";
import RarityFilter from "./RarityFilter";
import TypeFilter from "./TypeFilter";
import SpellFilter from "./SpellFilter";
import StatusFilter from "./StatusFilter";
import BuddyFilter from "./BuddyFilter";
import DuoFilter from "./DuoFilter";
import SetFilter from "./SetFilter";

export default function CardFilter() {
   return (
      <div className="sm:grid sm:grid-cols-3 sm:gap-x-1">
         <CharacterFilter />
         <DormFilter />
         <RarityFilter />
         <TypeFilter />
         <SpellFilter />
         <StatusFilter />
         <BuddyFilter />
         <DuoFilter />
         <SetFilter />
      </div>
   );
}
