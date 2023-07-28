import Element from "../components/Element";

export default function Gallery() {
   return (
      <>
         <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <Element type={"card"} size={"full"} id={1} />
            <Element type={"card"} size={"full"} id={2} />
            <Element type={"card"} size={"full"} id={3} />
            <Element type={"card"} size={"full"} id={4} />
            <Element type={"card"} size={"full"} id={5} />
            <Element type={"card"} size={"full"} id={6} />
         </div>
      </>
   );
}
