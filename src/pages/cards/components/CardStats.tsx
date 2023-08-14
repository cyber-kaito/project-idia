import { Grid, Divider, Tabs } from "@mantine/core";
import card_data from "../../../cards.json";

export default function CardStats({
   id,
}: {
   id: string | string[] | undefined;
}) {
   const card = card_data.find((data) => data.cardid.toString() === id);
   return (
      <div className="w-full pt-3 sm:w-5/6">
         <Tabs color="dark" variant="outline" defaultValue="min">
            <Tabs.List grow position="center">
               <Tabs.Tab value="min">Level 1</Tabs.Tab>
               <Tabs.Tab value="max">Max Level</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="min" pt="xs">
               <Grid justify="space-between" className="pt-3 pb-2">
                  <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                     HP
                  </Grid.Col>
                  <Grid.Col span={6} className="text-md sm:text-lg text-right">
                     {card?.minhp}
                  </Grid.Col>
               </Grid>
               <Divider></Divider>
               <Grid justify="space-between" className="pt-3 pb-2">
                  <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                     POW
                  </Grid.Col>
                  <Grid.Col span={6} className="text-md sm:text-lg text-right">
                     {card?.minpow}
                  </Grid.Col>
               </Grid>
            </Tabs.Panel>
            <Tabs.Panel value="max" pt="xs">
               <Grid justify="space-between" className="pt-3 pb-2">
                  <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                     HP
                  </Grid.Col>
                  <Grid.Col span={6} className="text-md sm:text-lg text-right">
                     {card?.maxhp}
                  </Grid.Col>
               </Grid>
               <Divider></Divider>
               <Grid justify="space-between" className="pt-3 pb-2">
                  <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                     POW
                  </Grid.Col>
                  <Grid.Col span={6} className="text-md sm:text-lg text-right">
                     {card?.maxpow}
                  </Grid.Col>
               </Grid>
            </Tabs.Panel>
         </Tabs>
         <Divider></Divider>
      </div>
   );
}
