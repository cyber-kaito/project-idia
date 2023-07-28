import { Tabs, Divider, Grid } from "@mantine/core";

export default function Page() {
   return (
      <div className="flex flex-col w-full sm:w-5/6">
         <h1 className="text-xl sm:text-2xl font-bold pb-3">Birthday Boy</h1>
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
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={3} className="text-md sm:text-lg font-bold">
               Character
            </Grid.Col>
            <Grid.Col span={3} className="text-md sm:text-lg text-right">
               Malleus Draconia
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Title
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               Birthday Boy
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Title
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               Birthday Boy
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Rarity
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               SSR
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Type
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               Attack
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Acquisition
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               Malleus Birthday Boy Showcase
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Thumbnail
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               placeholder
            </Grid.Col>
         </Grid>
         <Divider></Divider>

         <h1 className="text-xl font-bold pt-10 pb-2">Spells</h1>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Spell 1
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               Forest Strike
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Spell 2
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               Water Shot II
            </Grid.Col>
         </Grid>
         <Divider></Divider>
         <Grid justify="space-between" className="pt-3 pb-2">
            <Grid.Col span={2} className="text-md sm:text-lg font-bold">
               Spell 3
            </Grid.Col>
            <Grid.Col span={2} className="text-md sm:text-lg text-right">
               Fire Shot II
            </Grid.Col>
         </Grid>
         <Divider></Divider>

         <h1 className="text-lg sm:text-xl font-bold pt-10 pb-2">Stats</h1>

         <h1 className="text-lg sm:text-xl font-bold pt-10 pb-2">
            Buddy Bonus
         </h1>

         <h1 className="text-lg sm:text-xl font-bold pt-10 pb-2">Quotes</h1>
      </div>
   );
}
