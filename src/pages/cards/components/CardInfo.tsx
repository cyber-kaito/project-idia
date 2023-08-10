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
            <Accordion.Control>
               Card Information
               <Accordion.Panel>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Character
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Malleus Draconia
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Title
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Birthday Boy
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Rarity
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        SSR
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Type
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Attack
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Acquisition
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Malleus Birthday Boy Showcase
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3">
                     <Grid.Col
                        span={8}
                        className="text-md sm:text-lg font-bold"
                     >
                        Thumbnail
                     </Grid.Col>
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right"
                     >
                        <img
                           className="w-24"
                           src="/thumb_189_normal.png"
                           alt="?????"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right"
                     >
                        <img
                           className="w-24"
                           src="/thumb_189_normal.png"
                           alt="?????"
                        ></img>
                     </Grid.Col>
                  </Grid>
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Accordion.Item value="spells">
            <Accordion.Control>
               Spell Information
               <Accordion.Panel>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Spell 1
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Forest Strike
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Spell 2
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Water Shot II
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Spell 3
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Fire Shot II
                     </Grid.Col>
                  </Grid>
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Accordion.Item value="buddy">
            <Accordion.Control>
               Buddy Bonus
               <Accordion.Panel>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Idia Shroud
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Modest HP Boost
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Silver
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        Minor HP Boost
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        Sebek Zigvolt
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
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
