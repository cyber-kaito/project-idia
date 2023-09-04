import { Title, Text, Paper } from "@mantine/core";

export default function Page() {
   return (
      <>
         <Title>About Project Idia</Title>
         <Paper radius="xs" className="p-4">
            <Text>
               Project Idia is a resource website for Twisted Wonderland. This
               website is still in development! Planned features include a team
               builder and the ability to view information on past events and
               gacha banners. If you have any suggestions or need to report an
               issue/bug, please fill out the form linked below!
            </Text>
            <Text className="font-bold">
               Important note: currently Project Idia only supports content
               released in the English version of the game. JP server content
               will be added in a future update.
            </Text>
         </Paper>

         <Title className="pt-4">Contact Form</Title>
         <Paper radius="xs" className="p-4">
            <Text
               component="a"
               href="https://forms.gle/pres8rmwcQ2DT6NB8"
               target="_blank"
               rel="noopener noreferrer"
               className="underline"
            >
               Link
            </Text>
         </Paper>

         <Title className="pt-4">Contributors</Title>
         <Paper radius="xs" className="p-4">
            <Text
               component="a"
               href="https://github.com/cyber-kaito"
               target="_blank"
               rel="noopener noreferrer"
               className="underline"
            >
               cyberkaito (GitHub)
            </Text>
         </Paper>
      </>
   );
}
