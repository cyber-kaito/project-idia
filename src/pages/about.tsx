import { Title, Text, Paper } from "@mantine/core";

export default function Page() {
   return (
      <>
         <Title>About Project Idia</Title>
         <Paper radius="xs" className="p-4">
            <Text>
               Project Idia is a resource website for Twisted Wonderland. Disney
               Twisted-Wonderland is a registered trademark of Disney
               Enterprises, Inc. This repo is not affiliated with The Walt
               Disney Company, Aniplex, Inc., or Aniplex of America, Inc. All
               game resources are copyrighted to the respective owners.
            </Text>
         </Paper>

         <Title className="pt-4">Contributors</Title>
         <Paper radius="xs" className="p-4">
            <Text
               component="a"
               href="https://github.com/cyber-kaito"
               target="_blank"
               rel="noopener noreferrer"
            >
               cyberkaito (GitHub)
            </Text>
         </Paper>
      </>
   );
}
