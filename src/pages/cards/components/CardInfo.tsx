import { Divider, Grid, Accordion } from "@mantine/core";
import { getAssetURL } from "../../../utils";

export default function CardInfo({
   id,
}: {
   id: string | string[] | undefined;
}) {
   return (
      <Accordion
         variant="default"
         chevronPosition="right"
         multiple
         defaultValue={["info"]}
         className="w-full sm:w-5/6"
      >
         <Accordion.Item value="info">
            <Accordion.Control className="text-lg">
               Card Information
               <Accordion.Panel>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Character
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Malleus Draconia
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Title
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Birthday Boy
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Rarity
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        SSR
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Type
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Attack
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Acquisition
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Malleus Birthday Boy Showcase
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3">
                     <Grid.Col
                        span={8}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Thumbnail
                     </Grid.Col>
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        <img
                           className="w-24"
                           src={getAssetURL(
                              `images_webp/thumbnails/cards/thumb_${id}_normal.webp`
                           )}
                           alt="?????"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        <img
                           className="w-24"
                           src={getAssetURL(
                              `images_webp/thumbnails/cards/thumb_${id}_groovy.webp`
                           )}
                           alt="?????"
                        ></img>
                     </Grid.Col>
                  </Grid>
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Accordion.Item value="spells">
            <Accordion.Control className="text-lg">
               Spell Information
               <Accordion.Panel>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={4}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Spell 1
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Forest Strike
                     </Grid.Col>
                     <Grid.Col span={2} className="my-auto">
                        <img src="/flora.webp" alt="????"></img>
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={4}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Spell 2
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Water Shot II
                     </Grid.Col>
                     <Grid.Col span={2}>
                        <img src="/water.webp" alt="????"></img>
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3">
                     <Grid.Col
                        span={4}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Spell 3
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Fire Shot II
                     </Grid.Col>
                     <Grid.Col span={2}>
                        <img src="/fire.webp" alt="????"></img>
                     </Grid.Col>
                  </Grid>
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Accordion.Item value="buddy">
            <Accordion.Control className="text-lg">
               Buddy Bonus
               <Accordion.Panel>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        <img
                           className="w-24"
                           src="/thumb_189_normal.png"
                           alt="?????"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Idia Shroud
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Modest HP Boost
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        <img
                           className="w-24"
                           src="/thumb_189_normal.png"
                           alt="?????"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Silver
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Minor HP Boost
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3">
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        <img
                           className="w-24"
                           src="/thumb_189_normal.png"
                           alt="?????"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        Sebek Zigvolt
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        Minor Power Boost
                     </Grid.Col>
                  </Grid>
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Divider></Divider>
      </Accordion>
   );
}
