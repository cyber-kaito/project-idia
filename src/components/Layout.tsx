import { useState } from "react";
import Link from "next/link";
import {
   AppShell,
   Navbar,
   Header,
   Text,
   MediaQuery,
   Burger,
   useMantineTheme,
} from "@mantine/core";
// import { Home, Cards } from "tabler-icons-react";

export default function Layout({ children }: { children: any }) {
   const theme = useMantineTheme();
   const [collapsed, setCollapsed] = useState(true);
   return (
      <AppShell
         styles={{
            main: {
               background:
                  theme.colorScheme === "dark"
                     ? theme.colors.dark[8]
                     : theme.colors.gray[0],
            },
         }}
         navbarOffsetBreakpoint="sm"
         navbar={
            <Navbar
               p="lg"
               hiddenBreakpoint="10000" // i literally dont know how else to make it always collapsed no matter the screen size
               hidden={collapsed}
               width={{
                  base: 225,
               }}
               withBorder
            >
               <Navbar.Section mt="lg" ml="md">
                  <Link href="/" className="text-lg">
                     Home
                  </Link>
               </Navbar.Section>
               <Navbar.Section mt="lg" ml="md">
                  <Link href="/cards" className="text-lg">
                     Cards
                  </Link>
               </Navbar.Section>
               <Navbar.Section mt="lg" ml="md">
                  <Link
                     href="https://cyber-kaito.github.io/twst-spine/"
                     className="text-lg"
                  >
                     Animations
                  </Link>
               </Navbar.Section>
            </Navbar>
         }
         header={
            <Header height={{ base: 50 }} p="md">
               <div
                  style={{
                     display: "flex",
                     alignItems: "center",
                     height: "100%",
                  }}
               >
                  <MediaQuery styles={{ display: "none" }}>
                     <Burger
                        opened={!collapsed}
                        onClick={() => setCollapsed((collapsed) => !collapsed)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                     />
                  </MediaQuery>

                  <Text fz="xl">Project Idia</Text>
               </div>
            </Header>
         }
      >
         {children}
      </AppShell>
   );
}
