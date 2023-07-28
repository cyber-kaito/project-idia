import Gallery from "../../components/Gallery";
import CardFilter from "../../components/CardFilter";
import { Collapse, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Page() {
   const [opened, { toggle }] = useDisclosure(false);
   return (
      <>
         <div className="grid grid-cols-2 gap-x-32 justify-center items-center">
            <h1 className="text-left text-2xl pt-4 pl-4 font-bold">Cards</h1>
            <Button onClick={toggle} variant="outline" color="gray">
               Filters
            </Button>
         </div>
         <Collapse in={opened}>
            <CardFilter />
         </Collapse>
         <Gallery />
      </>
   );
}
