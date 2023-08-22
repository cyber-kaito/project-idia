import { Tabs } from "@mantine/core";
import { getAssetURL } from "../../../utils";

export default function CardTabs({
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
                  loading="lazy"
                  decoding="async"
               />
            </Tabs.Panel>

            <Tabs.Panel value="groovy" pt="xs">
               <img
                  className="flex justify-center items-center w-full"
                  src={getAssetURL(
                     `images_webp/cards/full_${cardID}_groovy.webp`
                  )}
                  alt={studentName.concat(
                     " ",
                     cardRarity,
                     " ",
                     cardTitle,
                     " ",
                     "Normal"
                  )}
                  loading="lazy"
                  decoding="async"
               />
            </Tabs.Panel>

            <Tabs.Panel value="outfit" pt="xs">
               <img
                  className="flex justify-center items-center w-full m-auto sm:w-1/2"
                  src={getAssetURL(`images_webp/outfits/outfit_${cardID}.webp`)}
                  alt={studentName.concat(
                     " ",
                     cardRarity,
                     " ",
                     cardTitle,
                     " ",
                     "Normal"
                  )}
                  loading="lazy"
                  decoding="async"
               />
            </Tabs.Panel>
         </Tabs>
      </div>
   );
}
