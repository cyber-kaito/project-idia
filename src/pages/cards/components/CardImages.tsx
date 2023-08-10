import { Tabs } from "@mantine/core";
import { getAssetURL } from "../../../utils";

export default function CardTabs({
   id,
}: {
   id: string | string[] | undefined;
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
                  src={getAssetURL(`images_webp/cards/full_${id}_normal.webp`)}
                  alt="????????"
               />
            </Tabs.Panel>

            <Tabs.Panel value="groovy" pt="xs">
               <img
                  className="flex justify-center items-center w-full"
                  src={getAssetURL(`images_webp/cards/full_${id}_groovy.webp`)}
                  alt="????????"
               />
            </Tabs.Panel>

            <Tabs.Panel value="outfit" pt="xs">
               <img
                  className="flex justify-center items-center w-full m-auto sm:w-1/2"
                  src="/outfit_189.png"
                  alt="?????"
               />
            </Tabs.Panel>
         </Tabs>
      </div>
   );
}
