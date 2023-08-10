import CardImages from "./components/CardImages";
import CardStats from "./components/CardStats";
import CardInfo from "./components/CardInfo";
import { useRouter } from "next/router";

export default function Page() {
   const router = useRouter();
   const { id } = router.query;
   return (
      <>
         <h1 className="text-xl sm:text-2xl font-bold pt-1 pb-6">
            Birthday Boy
         </h1>
         <CardImages id={id} />
         <CardStats id={id} />
         <CardInfo id={id} />
      </>
   );
}
