import Element from "../components/Element";

export default function Gallery() {
   return (
      <>
         <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <Element id={1} />
            <Element id={2} />
            <Element id={3} />
            <Element id={4} />
            <Element id={5} />
            <Element id={6} />
            <Element id={7} />
            <Element id={8} />
            <Element id={9} />
            <Element id={10} />
            <Element id={11} />
            <Element id={12} />
         </div>
      </>
   );
}
