import { Divider, Grid, Accordion, Text } from "@mantine/core";
import { getAssetURL } from "../utils";
import Image from "next/image";

function BuddyDisplay({ card }: { card: GameCard }) {
   if (card.rarity === "SSR") {
      return (
         <>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={card.buddy1} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {card.buddy1}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {card.bonus1}
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={card.buddy2} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {card.buddy2}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {card.bonus2}
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={card.buddy3} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {card.buddy3}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {card.bonus3}
               </Grid.Col>
            </Grid>
         </>
      );
   } else if (card.rarity === "SR") {
      return (
         <>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={card.buddy1} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {card.buddy1}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {card.bonus1}
               </Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={card.buddy2} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {card.buddy2}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {card.bonus2}
               </Grid.Col>
            </Grid>
         </>
      );
   } else {
      return (
         <>
            <Grid justify="space-between" className="pt-3 pb-2">
               <Grid.Col span={2} className="my-auto">
                  <BuddyIcon buddy={card.buddy1} />
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg font-bold my-auto"
               >
                  {card.buddy1}
               </Grid.Col>
               <Grid.Col
                  span={5}
                  className="text-md sm:text-lg text-right my-auto"
               >
                  {card.bonus1}
               </Grid.Col>
            </Grid>
         </>
      );
   }
}

function SpellElement({ spell }: { spell: string }) {
   if (spell.startsWith("Fire") || spell.startsWith("Flame")) {
      return (
         <Image
            src={getAssetURL(`images_webp/ui/banners/fire.webp`)}
            alt="Fire element banner"
            loading="lazy"
            decoding="async"
            width={50}
            height={59}
            unoptimized
         ></Image>
      );
   } else if (spell.startsWith("Water") || spell.startsWith("Aqua")) {
      return (
         <Image
            src={getAssetURL(`images_webp/ui/banners/water.webp`)}
            alt="Water element banner"
            loading="lazy"
            decoding="async"
            width={50}
            height={59}
            unoptimized
         ></Image>
      );
   } else if (spell.startsWith("Leaf") || spell.startsWith("Forest")) {
      return (
         <Image
            src={getAssetURL(`images_webp/ui/banners/flora.webp`)}
            alt="Flora element banner"
            loading="lazy"
            decoding="async"
            width={50}
            height={59}
            unoptimized
         ></Image>
      );
   } else {
      return (
         <Image
            src={getAssetURL(`images_webp/ui/banners/cosmic.webp`)}
            alt="Cosmic element banner"
            loading="lazy"
            decoding="async"
            width={50}
            height={59}
            unoptimized
         ></Image>
      );
   }
}

function SpellDisplay({ card }: { card: GameCard }) {
   if (card.rarity === "SSR") {
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
                  {card.spell1Name}
               </Grid.Col>
               <Grid.Col span={2} className="my-auto">
                  <SpellElement spell={card.spell1Name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2 pb-3">
                  {card.spell1Desc}
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
                  {card.spell2Name}
               </Grid.Col>
               <Grid.Col span={2}>
                  <SpellElement spell={card.spell2Name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2 pb-3">
                  {card.spell2Desc}
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
                  {card.spell3Name}
               </Grid.Col>
               <Grid.Col span={2}>
                  <SpellElement spell={card.spell3Name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2">
                  {card.spell3Desc}
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
                  {card.spell1Name}
               </Grid.Col>
               <Grid.Col span={2} className="my-auto">
                  <SpellElement spell={card.spell1Name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2 pb-3">
                  {card.spell1Desc}
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
                  {card.spell2Name}
               </Grid.Col>
               <Grid.Col span={2}>
                  <SpellElement spell={card.spell2Name}></SpellElement>
               </Grid.Col>
               <Text fz="md" className="mx-2">
                  {card.spell2Desc}
               </Text>
            </Grid>
         </>
      );
   }
}

function BuddyIcon({ buddy }: { buddy: string }) {
   const split = buddy.split(" ");
   const buddyName = split[0].toLowerCase();
   return (
      <Image
         className="w-24"
         src={getAssetURL(
            `images_webp/thumbnails/characters/${buddyName}_icon.webp`
         )}
         alt={buddy}
         loading="lazy"
         decoding="async"
         width={256}
         height={256}
         unoptimized
      ></Image>
   );
}

export default function CardInfo({ card }: { card: GameCard }) {
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
                        {card.name}
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
                        {card.title}
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
                        {card.rarity}
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
                        {card.type}
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
                        {card.acquisition}
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
                        <Image
                           className="w-24"
                           src={getAssetURL(
                              `images_webp/thumbnails/cards/thumb_${card.cardID}_normal.webp`
                           )}
                           alt={card.title}
                           loading="lazy"
                           decoding="async"
                           width={256}
                           height={256}
                           unoptimized
                        ></Image>
                     </Grid.Col>
                     <Grid.Col
                        span={2}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        <Image
                           className="w-24"
                           src={getAssetURL(
                              `images_webp/thumbnails/cards/thumb_${card.cardID}_groovy.webp`
                           )}
                           alt={card.title}
                           loading="lazy"
                           decoding="async"
                           width={256}
                           height={256}
                           unoptimized
                        ></Image>
                     </Grid.Col>
                  </Grid>
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Accordion.Item value="spells">
            <Accordion.Control className="text-lg">
               Spell Information
               <Accordion.Panel>
                  <SpellDisplay card={card} />
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Accordion.Item value="buddy">
            <Accordion.Control className="text-lg">
               Buddy Bonus
               <Accordion.Panel>
                  <BuddyDisplay card={card} />
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Divider></Divider>
      </Accordion>
   );
}
