import { getImageUrl } from ".././utils";
import { Paper } from "@mantine/core";

export default function Element({
   type,
   size,
   id,
}: {
   type: string;
   size: string;
   id: number;
}) {
   return (
      <div className="flex justify-center relative">
         <Paper
            component="a"
            href={`/cards/${encodeURIComponent(id)}`}
            className="my-3 w-11/12"
            withBorder
         >
            <img
               src="/r.webp"
               alt="R icon"
               className="absolute z-10 p-2 w-18"
               loading="lazy"
               decoding="async"
            />
            <div className="flex flex-row items-center justify-center">
               <img
                  src={getImageUrl(type, size, id, "normal")}
                  alt="ill figure out what to put here later"
                  className="rounded-tl-[3px] w-1/2"
                  loading="lazy"
                  decoding="async"
               />
               <img
                  src={getImageUrl(type, size, id, "groovy")}
                  alt="ill figure out what to put here later"
                  className="rounded-tr-[3px] w-1/2"
                  loading="lazy"
                  decoding="async"
               />
            </div>
            <h2 className="pl-4 pt-3 text-xl">School Uniform</h2>
            <h4 className="pl-4 pb-3 text-md">Malleus Draconia</h4>
         </Paper>
      </div>
   );
}
