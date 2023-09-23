import { Tabs } from "@mantine/core";
import { getAssetURL } from "../utils";

export default function CardTabs({ card }: { card: GameCard }) {
   return (
      <div className="flex w-full sm:w-5/6">
         <Tabs
            color="dark"
            variant="outline"
            defaultValue="normal"
            className="w-full"
         >
            <Tabs.List grow position="center">
               <Tabs.Tab value="normal">Normal</Tabs.Tab>
               <Tabs.Tab value="groovy">Groovy</Tabs.Tab>
               <Tabs.Tab value="outfit">Outfit</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="normal" pt="xs">
               <img
                  className="flex justify-center items-center w-full"
                  src={getAssetURL(
                     `images_webp/cards/full_${card.cardID}_normal.webp`
                  )}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
               />
            </Tabs.Panel>

            <Tabs.Panel value="groovy" pt="xs">
               <img
                  className="flex justify-center items-center w-full"
                  src={getAssetURL(
                     `images_webp/cards/full_${card.cardID}_groovy.webp`
                  )}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
               />
            </Tabs.Panel>

            <Tabs.Panel value="outfit" pt="xs">
               <img
                  className="flex justify-center items-center w-full m-auto sm:w-1/2"
                  src={getAssetURL(
                     `images_webp/outfits/outfit_${card.cardID}.webp`
                  )}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
               />
            </Tabs.Panel>
         </Tabs>
      </div>
   );
}
