import Gallery from "./components/Gallery";
import CardFilter from "./components/filters/CardFilter";
import { Collapse, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { getDataURL } from "../../utils";

export default function Page({ card_data }: { card_data: any[] }) {
   const [opened, { toggle }] = useDisclosure(false);
   return (
      <>
         <div className="grid grid-cols-2 gap-x-32 justify-center items-center">
            <h1 className="text-left text-2xl pt-4 pl-4 font-bold">Cards</h1>
            <Button onClick={toggle} variant="outline" color="gray" size="md">
               Filters
            </Button>
         </div>
         <Collapse in={opened}>
            <CardFilter />
         </Collapse>
         <Gallery cards={card_data} />
      </>
   );
}

export async function getStaticProps() {
   const res = await fetch(getDataURL(`cards.json`));
   const card_data = await res.json();
   return {
      props: {
         card_data,
      },
      revalidate: 10,
   };
}
