import {
   Text,
   Title,
   Paper,
   Center,
   Grid,
   Table,
   Tabs,
   Divider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { getAssetURL } from "../utils";
// import alchemy_data from "../data/alchemy.json";
// import gauntlet_data from "../data/gauntlet.json";
import { TwitterTimelineEmbed } from "react-twitter-embed";

// function AlchemyCharacters({ setNumber }: { setNumber: number }) {
//    if (setNumber === 1 || setNumber === 3 || setNumber === 5) {
//       return (
//          <Center>
//             <Grid columns={4}>
//                {alchemy_data.characters[setNumber - 1].characters.map((c) => (
//                   <Grid.Col span={1}>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/alchemy/${c}_alchemy.webp`
//                         )}
//                         alt={c.concat(" ", "alchemy image")}
//                         loading="lazy"
//                         decoding="async"
//                      ></img>
//                   </Grid.Col>
//                ))}
//             </Grid>
//          </Center>
//       );
//    } else {
//       return (
//          <Center>
//             <Grid columns={5}>
//                {alchemy_data.characters[setNumber - 1].characters.map((c) => (
//                   <Grid.Col span={1}>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/alchemy/${c}_alchemy.webp`
//                         )}
//                         alt={c.concat(" ", "alchemy image")}
//                         loading="lazy"
//                         decoding="async"
//                      ></img>
//                   </Grid.Col>
//                ))}
//             </Grid>
//          </Center>
//       );
//    }
// }

// function AlchemyBooks({ setNumber }: { setNumber: number }) {
//    const element = alchemy_data.books[setNumber - 1].element;
//    return (
//       <Center>
//          <Grid columns={3} className="px-20">
//             <Grid.Col span={1} className="flex justify-end">
//                <img
//                   src={getAssetURL(
//                      `images_webp/ui/items/magic_${element}.webp`
//                   )}
//                   alt={element.concat(" ", "book (small)")}
//                   loading="lazy"
//                   decoding="async"
//                ></img>
//             </Grid.Col>
//             <Grid.Col span={1} className="flex justify-center">
//                <img
//                   src={getAssetURL(
//                      `images_webp/ui/items/magic_${element}_p.webp`
//                   )}
//                   alt={element.concat(" ", "book (medium)")}
//                   loading="lazy"
//                   decoding="async"
//                ></img>
//             </Grid.Col>
//             <Grid.Col span={1} className="flex justify-start">
//                <img
//                   src={getAssetURL(
//                      `images_webp/ui/items/magic_${element}_pp.webp`
//                   )}
//                   alt={element.concat(" ", "book (large)")}
//                   loading="lazy"
//                   decoding="async"
//                ></img>
//             </Grid.Col>
//          </Grid>
//       </Center>
//    );
// }

// function GauntletRewards() {
//    return (
//       <Center>
//          <Table>
//             <thead>
//                <tr>
//                   <th>Location </th>
//                   <th>Rewards</th>
//                </tr>
//             </thead>
//             <tbody>
//                <tr>
//                   <td>Woods Behind Campus</td>
//                   <td className="flex justify-center">
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_10001.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                   </td>
//                </tr>
//                <tr>
//                   <td>Library</td>
//                   <td className="flex justify-center">
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_10009.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                   </td>
//                </tr>
//                <tr>
//                   <td>Sports Field</td>
//                   <td className="flex justify-center">
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_10007.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_20002.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                   </td>
//                </tr>
//                <tr>
//                   <td>Hall of Mirrors</td>
//                   <td className="flex justify-center">
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_10006.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_20003.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                   </td>
//                </tr>
//                <tr>
//                   <td>Botanical Garden</td>
//                   <td className="flex justify-center">
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_10002.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_20001.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                   </td>
//                </tr>
//                <tr>
//                   <td>Mystery Shop</td>
//                   <td className="flex justify-center">
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_10008.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_20005.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                   </td>
//                </tr>
//                <tr>
//                   <td>Coliseum</td>
//                   <td className="flex justify-center">
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_20004.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_30012.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_30011.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                      <img
//                         src={getAssetURL(
//                            `images_webp/ui/items/material_30010.webp`
//                         )}
//                         alt="Cosmic book (medium)"
//                         loading="lazy"
//                         decoding="async"
//                         className="w-1/4"
//                      ></img>
//                   </td>
//                </tr>
//             </tbody>
//          </Table>
//       </Center>
//    );
// }

// idea:
// make 2 "cycle" variables, one for the charas and one for the books
// increment the vars by 1 when the time reaches a certain hour (EN server reset time)
// display the corresponding chara set and books depending on the values of vars
// idk how to check if a day has passed though

export default function Page() {
   // const [charaSet, setCharaSet] = useState<number>(1);
   // const [bookSet, setBookSet] = useState<number>(1);
   // const [day, setDay] = useState();

   // useEffect(() => {
   //    if (charaSet === 5) setCharaSet(0);
   //    if (bookSet === 4) setBookSet(0);
   //    setCharaSet(charaSet + 1);
   //    setBookSet(bookSet + 1);
   // }, [day]);

   return (
      <div className="w-full sm:grid grid-cols-2 gap-12">
         <div className="sm:col-span-1">
            <Title order={1}>Project Idia</Title>
            <Divider></Divider>
            <Title order={3} className="py-4">
               Welcome to the Villains&apos; World!
            </Title>
            <Paper radius="xs" className="p-4">
               <Text>
                  This is a resource website for Twisted Wonderland! Here you
                  can find information and view media from the game, as well as
                  use various tools (coming soon) to help you with your time as
                  a student at Night Raven College!
               </Text>
            </Paper>
            <Center>
               <img
                  src="/idia_sticker.webp"
                  alt="Idia Shroud sticker"
                  loading="lazy"
                  decoding="async"
                  className="w-7/12"
               ></img>
            </Center>
            <Center>
               <Text fz="sm" fs="italic">
                  Thx!
               </Text>
            </Center>
         </div>
         {/* {/* <Title order={2}>Dailies</Title>
         <Paper withBorder>
            <Title order={4}>Alchemy Lessons</Title>
            <AlchemyCharacters setNumber={charaSet} />
            <Title order={5}>Upgrade Items</Title>
            <AlchemyBooks setNumber={bookSet} />
            <Title order={4}>Crafter's Gauntlet</Title>
            <GauntletRewards />
         </Paper>
         <Title order={2}>Current Exams</Title>
         <Paper withBorder></Paper>
         <Title order={2}>Birthdays</Title>
         <Paper withBorder></Paper>
         <Title order={2}>Site Announcements</Title>
         <Paper withBorder></Paper> */}
         <div className="my-4 col-span-1">
            <Title order={2}>Official Twitter</Title>
            <Tabs
               color="dark"
               variant="outline"
               defaultValue="en"
               className="w-full"
            >
               <Tabs.List grow position="center">
                  <Tabs.Tab value="en">EN</Tabs.Tab>
                  <Tabs.Tab value="jp">JP</Tabs.Tab>
               </Tabs.List>

               <Tabs.Panel value="en" pt="xs">
                  <TwitterTimelineEmbed
                     sourceType="profile"
                     screenName="twst_english"
                     options={{ height: 500 }}
                     theme="dark"
                     noBorders
                  ></TwitterTimelineEmbed>
               </Tabs.Panel>
               <Tabs.Panel value="jp" pt="xs">
                  <TwitterTimelineEmbed
                     sourceType="profile"
                     screenName="twst_jp"
                     options={{ height: 500 }}
                     theme="dark"
                     noBorders
                  ></TwitterTimelineEmbed>
               </Tabs.Panel>
            </Tabs>
         </div>
      </div>
   );
}
