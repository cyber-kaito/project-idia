import { Paper } from "@mantine/core";
import { getAssetURL } from "../utils";
import Link from "next/link";

function CardRarity({ rarity }: { rarity: string }) {
   if (rarity === "R") {
      return (
         <img
            src={getAssetURL(`images_webp/ui/banners/r_banner.webp`)}
            alt="R banner"
            className="absolute z-10 w-10 -mt-1 ml-1"
            loading="lazy"
            decoding="async"
         />
      );
   } else if (rarity === "SR") {
      return (
         <img
            src={getAssetURL(`images_webp/ui/banners/sr_banner.webp`)}
            alt="SR banner"
            className="absolute z-10 w-10 -mt-1 ml-1"
            loading="lazy"
            decoding="async"
         />
      );
   } else {
      return (
         <img
            src={getAssetURL(`images_webp/ui/banners/ssr_banner.webp`)}
            alt="SSR banner"
            className="absolute z-10 w-10 -mt-1 ml-1"
            loading="lazy"
            decoding="async"
         />
      );
   }
}

export default function GalleryCard({ card }: { card: GameCardStripped }) {
   const id = card.cardID.toString();
   return (
      <div className="flex justify-center relative">
         <Link
            href={{
               pathname: `/cards/${encodeURIComponent(card.cardID)}`,
               query: { id },
            }}
            as={`/cards/${encodeURIComponent(card.cardID)}`}
         >
            <Paper className="my-3 w-full" withBorder>
               <CardRarity rarity={card.rarity}></CardRarity>
               <div className="flex flex-row items-center justify-center">
                  <img
                     src={getAssetURL(
                        `images_webp/cards/full_${card.cardID}_normal.webp`
                     )}
                     alt={card.title}
                     className="rounded-tl-[3px] w-1/2"
                     loading="lazy"
                     decoding="async"
                  />
                  <img
                     src={getAssetURL(
                        `images_webp/cards/full_${card.cardID}_groovy.webp`
                     )}
                     alt={card.title}
                     className="rounded-tr-[3px] w-1/2"
                     loading="lazy"
                     decoding="async"
                  />
               </div>
               <h2 className="pl-4 pt-3 text-xl">{card.title}</h2>
               <h4 className="pl-4 pb-3 text-md">{card.name}</h4>
            </Paper>
         </Link>
      </div>
   );
}
