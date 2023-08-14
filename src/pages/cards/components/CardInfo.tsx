import { Divider, Grid, Accordion } from "@mantine/core";
import { getAssetURL } from "../../../utils";
import card_data from "../../../cards.json";

function SpellElement({ spell }: { spell: string | undefined }) {
   if (spell?.startsWith("Fire") || spell?.startsWith("Flame")) {
      return <img src="/fire.webp" alt="Fire element banner"></img>;
   } else if (spell?.startsWith("Water") || spell?.startsWith("Aqua")) {
      return <img src="/water.webp" alt="Water element banner"></img>;
   } else if (spell?.startsWith("Leaf") || spell?.startsWith("Forest")) {
      return <img src="/flora.webp" alt="Flora element banner"></img>;
   } else {
      return <img src="/cosmic.webp" alt="Cosmic element banner"></img>;
   }
}

function BuddyIcon({ buddy }: { buddy: string | undefined }) {
   if (buddy!.startsWith("Riddle")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/riddle_icon.webp`
            )}
            alt="Riddle icon"
         ></img>
      );
   } else if (buddy!.startsWith("Ace")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(`images_webp/thumbnails/characters/ace_icon.webp`)}
            alt="Ace icon"
         ></img>
      );
   } else if (buddy!.startsWith("Deuce")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/deuce_icon.webp`
            )}
            alt="Deuce icon"
         ></img>
      );
   } else if (buddy!.startsWith("Cater")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/cater_icon.webp`
            )}
            alt="Cater icon"
         ></img>
      );
   } else if (buddy!.startsWith("Trey")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/trey_icon.webp`
            )}
            alt="Trey icon"
         ></img>
      );
   } else if (buddy!.startsWith("Leona")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/leona_icon.webp`
            )}
            alt="Leona icon"
         ></img>
      );
   } else if (buddy!.startsWith("Jack")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/jack_icon.webp`
            )}
            alt="Jack icon"
         ></img>
      );
   } else if (buddy!.startsWith("Ruggie")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/ruggie_icon.webp`
            )}
            alt="Ruggie icon"
         ></img>
      );
   } else if (buddy!.startsWith("Azul")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/azul_icon.webp`
            )}
            alt="Azul icon"
         ></img>
      );
   } else if (buddy!.startsWith("Jade")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/jade_icon.webp`
            )}
            alt="Jade icon"
         ></img>
      );
   } else if (buddy!.startsWith("Floyd")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/floyd_icon.webp`
            )}
            alt="Floyd icon"
         ></img>
      );
   } else if (buddy!.startsWith("Kalim")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/kalim_icon.webp`
            )}
            alt="Kalim icon"
         ></img>
      );
   } else if (buddy!.startsWith("Jamil")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/jamil_icon.webp`
            )}
            alt="Jamil icon"
         ></img>
      );
   } else if (buddy!.startsWith("Vil")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(`images_webp/thumbnails/characters/vil_icon.webp`)}
            alt="Vil icon"
         ></img>
      );
   } else if (buddy!.startsWith("Epel")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/epel_icon.webp`
            )}
            alt="Epel icon"
         ></img>
      );
   } else if (buddy!.startsWith("Rook")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/rook_icon.webp`
            )}
            alt="Rook icon"
         ></img>
      );
   } else if (buddy!.startsWith("Idia")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/idia_icon.webp`
            )}
            alt="Idia icon"
         ></img>
      );
   } else if (buddy!.startsWith("Ortho")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/ortho_icon.webp`
            )}
            alt="Ortho icon"
         ></img>
      );
   } else if (buddy!.startsWith("Malleus")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/malleus_icon.webp`
            )}
            alt="Malleus icon"
         ></img>
      );
   } else if (buddy!.startsWith("Silver")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/silver_icon.webp`
            )}
            alt="Silver icon"
         ></img>
      );
   } else if (buddy!.startsWith("Sebek")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/sebek_icon.webp`
            )}
            alt="Sebek icon"
         ></img>
      );
   } else if (buddy!.startsWith("Lilia")) {
      return (
         <img
            className="w-24"
            src={getAssetURL(
               `images_webp/thumbnails/characters/lilia_icon.webp`
            )}
            alt="Lilia icon"
         ></img>
      );
   }
}

export default function CardInfo({
   id,
}: {
   id: string | string[] | undefined;
}) {
   const card = card_data.find((data) => data.cardid.toString() === id);
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
                        {card?.studentname}
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
                        {card?.cardtitle}
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
                        {card?.cardrarity}
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
                        {card?.cardtype}
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
                        {card?.acquisition}
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
                           alt={card?.studentname.concat(
                              " ",
                              card.cardrarity,
                              " ",
                              card.cardtitle,
                              " ",
                              "Normal Thumbnail"
                           )}
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
                           alt={card?.studentname.concat(
                              " ",
                              card.cardrarity,
                              " ",
                              card.cardtitle,
                              " ",
                              "Groovy Thumbnail"
                           )}
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
                        {card?.spell1}
                     </Grid.Col>
                     <Grid.Col span={2} className="my-auto">
                        <SpellElement spell={card?.spell1}></SpellElement>
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
                        {card?.spell2}
                     </Grid.Col>
                     <Grid.Col span={2}>
                        <SpellElement spell={card?.spell2}></SpellElement>
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
                        {card?.spell3}
                     </Grid.Col>
                     <Grid.Col span={2}>
                        <SpellElement spell={card?.spell3}></SpellElement>
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
                           src={getAssetURL(
                              `images_webp/thumbnails/characters/riddle_icon.webp`
                           )}
                           alt="Riddle icon"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        {card?.buddy1}
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        {card?.bonus1}
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
                           src={getAssetURL(
                              `images_webp/thumbnails/characters/riddle_icon.webp`
                           )}
                           alt="Riddle icon"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        {card?.buddy2}
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        {card?.bonus2}
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
                           src={getAssetURL(
                              `images_webp/thumbnails/characters/riddle_icon.webp`
                           )}
                           alt="Riddle icon"
                        ></img>
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg font-bold my-auto"
                     >
                        {card?.buddy3}
                     </Grid.Col>
                     <Grid.Col
                        span={5}
                        className="text-md sm:text-lg text-right my-auto"
                     >
                        {card?.bonus3}
                     </Grid.Col>
                  </Grid>
               </Accordion.Panel>
            </Accordion.Control>
         </Accordion.Item>
         <Divider></Divider>
      </Accordion>
   );
}
