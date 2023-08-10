import { Grid, Divider, Tabs } from "@mantine/core";

export default function CardStats({
   id,
}: {
   id: string | string[] | undefined;
}) {
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
                     2272
                  </Grid.Col>
               </Grid>
               <Divider></Divider>
               <Grid justify="space-between" className="pt-3 pb-2">
                  <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                     POW
                  </Grid.Col>
                  <Grid.Col span={6} className="text-md sm:text-lg text-right">
                     1389
                  </Grid.Col>
               </Grid>
            </Tabs.Panel>
            <Tabs.Panel value="max" pt="xs">
               <Grid justify="space-between" className="pt-3 pb-2">
                  <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                     HP
                  </Grid.Col>
                  <Grid.Col span={6} className="text-md sm:text-lg text-right">
                     10303
                  </Grid.Col>
               </Grid>
               <Divider></Divider>
               <Grid justify="space-between" className="pt-3 pb-2">
                  <Grid.Col span={6} className="text-md sm:text-lg font-bold">
                     POW
                  </Grid.Col>
                  <Grid.Col span={6} className="text-md sm:text-lg text-right">
                     6757
                  </Grid.Col>
               </Grid>
            </Tabs.Panel>
         </Tabs>
         <Divider></Divider>
      </div>
   );
}
