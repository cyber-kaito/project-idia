import { Paper } from "@mantine/core";
import { getAssetURL } from "../../../utils";
import Link from "next/link";

function CardRarity({ rarity }: { rarity: string | undefined }) {
   if (rarity === "R") {
      return (
         <img
            src="/r_banner.webp"
            alt="R banner"
            className="absolute z-10 w-10 -mt-1 ml-1"
            loading="lazy"
            decoding="async"
         />
      );
   } else if (rarity === "SR") {
      return (
         <img
            src="/sr_banner.webp"
            alt="SR banner"
            className="absolute z-10 w-10 -mt-1 ml-1"
            loading="lazy"
            decoding="async"
         />
      );
   } else {
      return (
         <img
            src="/ssr_banner.webp"
            alt="SSR banner"
            className="absolute z-10 w-10 -mt-1 ml-1"
            loading="lazy"
            decoding="async"
         />
      );
   }
}

export default function GalleryCard({
   cardID,
   cardRarity,
   studentName,
   cardTitle,
}: {
   cardID: number;
   cardRarity: string;
   studentName: string;
   cardTitle: string;
}) {
   return (
      <div className="flex justify-center relative">
         <Link
            href={{
               pathname: `/cards/${encodeURIComponent(cardID)}`,
               query: { cardID },
            }}
            as={`/cards/${encodeURIComponent(cardID)}`}
         >
            <Paper className="my-3 w-full" withBorder>
               <CardRarity rarity={cardRarity}></CardRarity>
               <div className="flex flex-row items-center justify-center">
                  <img
                     src={getAssetURL(
                        `images_webp/cards/full_${cardID}_normal.webp`
                     )}
                     alt={studentName.concat(
                        " ",
                        cardRarity,
                        " ",
                        cardTitle,
                        " ",
                        "Normal"
                     )}
                     className="rounded-tl-[3px] w-1/2"
                     loading="lazy"
                     decoding="async"
                  />
                  <img
                     src={getAssetURL(
                        `images_webp/cards/full_${cardID}_groovy.webp`
                     )}
                     alt={studentName.concat(
                        " ",
                        cardRarity,
                        " ",
                        cardTitle,
                        " ",
                        "Groovy"
                     )}
                     className="rounded-tr-[3px] w-1/2"
                     loading="lazy"
                     decoding="async"
                  />
               </div>
               <h2 className="pl-4 pt-3 text-xl">{cardTitle}</h2>
               <h4 className="pl-4 pb-3 text-md">{studentName}</h4>
            </Paper>
         </Link>
      </div>
   );
}
