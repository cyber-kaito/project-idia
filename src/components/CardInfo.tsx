import { Divider, Grid, Accordion, Text } from "@mantine/core";
import { getAssetURL } from "../utils";

function BuddyDisplay({
   buddy1,
   buddy2,
   buddy3,
   bonus1,
   bonus2,
   bonus3,
   rarity,
}: {
   buddy1: string;
   buddy2: string;
   buddy3: string;
   bonus1: string;
   bonus2: string;
   bonus3: string;
   rarity: string;
}) {
   if (rarity === "SSR") {
      return (
         <>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={buddy1} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {buddy1}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {bonus1}
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={buddy2} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {buddy2}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {bonus2}
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={buddy3} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {buddy3}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {bonus3}
               </Grid.Col>
            </Grid>
         </>
      );
   } else if (rarity === "SR") {
      return (
         <>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={buddy1} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {buddy1}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {bonus1}
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={buddy2} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {buddy2}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {bonus2}
               </Grid.Col>
            </Grid>
         </>
      );
   } else {
      return (
         <>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={buddy1} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {buddy1}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {bonus1}
               </Grid.Col>
            </Grid>
         </>
      );
   }
}

function SpellElement({ spell }: { spell: string }) {
   if (spell.startsWith("Fire") || spell.startsWith("Flame")) {
      return (
         <img
            src={getAssetURL(`images_webp/ui/banners/fire.webp`)}
            alt="Fire element banner"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (spell.startsWith("Water") || spell.startsWith("Aqua")) {
      return (
         <img
            src={getAssetURL(`images_webp/ui/banners/water.webp`)}
            alt="Water element banner"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (spell.startsWith("Leaf") || spell.startsWith("Forest")) {
      return (
         <img
            src={getAssetURL(`images_webp/ui/banners/flora.webp`)}
            alt="Flora element banner"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else {
      return (
         <img
            src={getAssetURL(`images_webp/ui/banners/cosmic.webp`)}
            alt="Cosmic element banner"
            loading="lazy"
            decoding="async"
         ></img>
      );
   }
}

function SpellDisplay({
   spell1name,
   spell1desc,
   spell2name,
   spell2desc,
   spell3name,
   spell3desc,
   rarity,
}: {
   spell1name: string;
   spell1desc: string;
   spell2name: string;
   spell2desc: string;
   spell3name: string;
   spell3desc: string;
   rarity: string;
}) {
   if (rarity === "SSR") {
      return (
         <>
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
                  {spell1name}
               </Grid.Col>
               <Grid.Col span={2} className="my-auto">
                  <SpellElement spell={spell1name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2 pb-3">
                  {spell1desc}
               </Text>
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
                  {spell2name}
               </Grid.Col>
               <Grid.Col span={2}>
                  <SpellElement spell={spell2name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2 pb-3">
                  {spell2desc}
               </Text>
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
                  {spell3name}
               </Grid.Col>
               <Grid.Col span={2}>
                  <SpellElement spell={spell3name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2">
                  {spell3desc}
               </Text>
            </Grid>
         </>
      );
   } else {
      return (
         <>
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
                  {spell1name}
               </Grid.Col>
               <Grid.Col span={2} className="my-auto">
                  <SpellElement spell={spell1name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2 pb-3">
                  {spell1desc}
               </Text>
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
                  {spell2name}
               </Grid.Col>
               <Grid.Col span={2}>
                  <SpellElement spell={spell2name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2">
                  {spell2desc}
               </Text>
            </Grid>
         </>
      );
   }
}

function BuddyIcon({ buddy }: { buddy: string }) {
   if (buddy.startsWith("Riddle")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/riddle_icon.webp`
            )}
            alt="Riddle icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Ace")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(`images_webp/thumbnails/characters/ace_icon.webp`)}
            alt="Ace icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Deuce")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/deuce_icon.webp`
            )}
            alt="Deuce icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Cater")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/cater_icon.webp`
            )}
            alt="Cater icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Trey")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/trey_icon.webp`
            )}
            alt="Trey icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Leona")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/leona_icon.webp`
            )}
            alt="Leona icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Jack")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/jack_icon.webp`
            )}
            alt="Jack icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Ruggie")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/ruggie_icon.webp`
            )}
            alt="Ruggie icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Azul")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/azul_icon.webp`
            )}
            alt="Azul icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Jade")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/jade_icon.webp`
            )}
            alt="Jade icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Floyd")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/floyd_icon.webp`
            )}
            alt="Floyd icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Kalim")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/kalim_icon.webp`
            )}
            alt="Kalim icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Jamil")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/jamil_icon.webp`
            )}
            alt="Jamil icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Vil")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(`images_webp/thumbnails/characters/vil_icon.webp`)}
            alt="Vil icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Epel")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/epel_icon.webp`
            )}
            alt="Epel icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Rook")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/rook_icon.webp`
            )}
            alt="Rook icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Idia")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/idia_icon.webp`
            )}
            alt="Idia icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Ortho")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/ortho_icon.webp`
            )}
            alt="Ortho icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Malleus")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/malleus_icon.webp`
            )}
            alt="Malleus icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Silver")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/silver_icon.webp`
            )}
            alt="Silver icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Sebek")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/sebek_icon.webp`
            )}
            alt="Sebek icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   } else if (buddy.startsWith("Lilia")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/lilia_icon.webp`
            )}
            alt="Lilia icon"
            loading="lazy"
            decoding="async"
         ></img>
      );
   }
}

export default function CardInfo({
   cardID,
   cardRarity,
   studentName,
   cardTitle,
   cardType,
   cardAcquisition,
   spell1name,
   spell1desc,
   spell2name,
   spell2desc,
   spell3name,
   spell3desc,
   buddy1,
   buddy2,
   buddy3,
   bonus1,
   bonus2,
   bonus3,
}: {
   cardID: number;
   cardRarity: string;
   studentName: string;
   cardTitle: string;
   cardType: string;
   cardAcquisition: string;
   spell1name: string;
   spell1desc: string;
   spell2name: string;
   spell2desc: string;
   spell3name: string;
   spell3desc: string;
   buddy1: string;
   buddy2: string;
   buddy3: string;
   bonus1: string;
   bonus2: string;
   bonus3: string;
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
                        {studentName}
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
                        {cardTitle}
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
                        {cardRarity}
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
                        {cardType}
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
                        {cardAcquisition}
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
                              `images_webp/thumbnails/cards/thumb_${cardID}_normal.webp`
                           )}
                           alt={cardTitle}
                           loading="lazy"
                           decoding="async"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        <img
                           className="w-24"
                           src={getAssetURL(
                              `images_webp/thumbnails/cards/thumb_${cardID}_groovy.webp`
                           )}
                           alt={cardTitle}
                           loading="lazy"
                           decoding="async"
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
                  <SpellDisplay
                     spell1name={spell1name}
                     spell1desc={spell1desc}
                     spell2name={spell2name}
                     spell2desc={spell2desc}
                     spell3name={spell3name}
                     spell3desc={spell3desc}
                     rarity={cardRarity}
                  />
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Accordion.Item value="buddy">
            <Accordion.Control className="text-lg">
               Buddy Bonus
               <Accordion.Panel>
                  <BuddyDisplay
                     buddy1={buddy1}
                     buddy2={buddy2}
                     buddy3={buddy3}
                     bonus1={bonus1}
                     bonus2={bonus2}
                     bonus3={bonus3}
                     rarity={cardRarity}
                  />
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Divider></Divider>
      </Accordion>
   );
}
