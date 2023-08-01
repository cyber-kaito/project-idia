import { Tabs, Divider, Grid } from "@mantine/core";

export default function Page() {
   return (
      <>
         <h1 className="text-xl sm:text-2xl font-bold pb-3">Birthday Boy</h1>
         <div className="flex w-full sm:w-5/6">
            <Tabs color="dark" variant="outline" defaultValue="normal">
               <Tabs.List grow position="center">
                  <Tabs.Tab value="normal">Normal</Tabs.Tab>
                  <Tabs.Tab value="groovy">Groovy</Tabs.Tab>
               </Tabs.List>

               <Tabs.Panel value="normal" pt="xs">
                  <img
                     className="flex justify-center items-center w-full"
                     src="/card_full_3_normal.webp"
                     alt="????????"
                  />
               </Tabs.Panel>

               <Tabs.Panel value="groovy" pt="xs">
                  <img
                     className="flex justify-center items-center w-full"
                     src="/card_full_3_groovy.webp"
                     alt="????????"
                  />
               </Tabs.Panel>
            </Tabs>
         </div>
         <div className="w-full sm:w-5/6">
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Character
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Malleus Draconia
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Title
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Birthday Boy
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Rarity
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  SSR
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Type
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Attack
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Acquisition
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Malleus Birthday Boy Showcase
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Thumbnail
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  n/a
               </Grid.Col>
            </Grid>
            <Divider></Divider>
         </div>

         <div className="w-full pt-8 sm:w-5/6">
            <h1 className="text-xl font-bold pb-2">Spells</h1>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Spell 1
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Forest Strike
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Spell 2
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Water Shot II
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Spell 3
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Fire Shot II
               </Grid.Col>
            </Grid>
            <Divider></Divider>
         </div>

         <div className="w-full sm:w-5/6">
            <h1 className="text-xl font-bold pt-8 pb-2">Stats</h1>
            <Tabs color="dark" variant="outline" defaultValue="min">
               <Tabs.List grow position="center">
                  <Tabs.Tab value="min">Level 1</Tabs.Tab>
                  <Tabs.Tab value="max">Max Level</Tabs.Tab>
               </Tabs.List>
               <Tabs.Panel value="min" pt="xs">
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        HP
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        2272
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        POW
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        1389
                     </Grid.Col>
                  </Grid>
               </Tabs.Panel>
               <Tabs.Panel value="max" pt="xs">
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        HP
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        10303
                     </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <Grid justify="space-between" className="pt-3 pb-2">
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg font-bold"
                     >
                        POW
                     </Grid.Col>
                     <Grid.Col
                        span={6}
                        className="text-md sm:text-lg text-right"
                     >
                        6757
                     </Grid.Col>
                  </Grid>
               </Tabs.Panel>
            </Tabs>
            <Divider></Divider>
         </div>

         <div className="w-full sm:w-5/6">
            <h1 className="text-xl font-bold pt-8 pb-2">Buddy Bonus</h1>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Idia Shroud
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Modest HP Boost
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Silver
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Minor HP Boost
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                  Sebek Zigvolt
               </Grid.Col>
               <Grid.Col span={6} className="text-md sm:text-lg text-right">
                  Minor Power Boost
               </Grid.Col>
            </Grid>
            <Divider></Divider>
         </div>
      </>
   );
}
