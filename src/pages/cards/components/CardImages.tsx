import { Tabs } from "@mantine/core";
import { getAssetURL } from "../../../utils";
import card_data from "../../../cards.json";

export default function CardTabs({
   id,
}: {
   id: string | string[] | undefined;
}) {
   const card = card_data.find((data) => data.cardid.toString() === id);
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
                  src={getAssetURL(`images_webp/cards/full_${id}_normal.webp`)}
                  alt={card?.studentname.concat(
                     " ",
                     card.cardrarity,
                     " ",
                     card.cardtitle,
                     " ",
                     "Normal"
                  )}
               />
            </Tabs.Panel>

            <Tabs.Panel value="groovy" pt="xs">
               <img
                  className="flex justify-center items-center w-full"
                  src={getAssetURL(`images_webp/cards/full_${id}_groovy.webp`)}
                  alt={card?.studentname.concat(
                     " ",
                     card.cardrarity,
                     " ",
                     card.cardtitle,
                     " ",
                     "Groovy"
                  )}
               />
            </Tabs.Panel>

            <Tabs.Panel value="outfit" pt="xs">
               <img
                  className="flex justify-center items-center w-full m-auto sm:w-1/2"
                  src={getAssetURL(`images_webp/outfits/outfit_${id}.webp`)}
                  alt={card?.studentname.concat(
                     " ",
                     card.cardrarity,
                     " ",
                     card.cardtitle,
                     " ",
                     "Outfit"
                  )}
               />
            </Tabs.Panel>
         </Tabs>
      </div>
   );
}
