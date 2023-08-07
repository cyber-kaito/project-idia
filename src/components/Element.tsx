import { Paper } from "@mantine/core";
import { getAssetURL } from ".././utils";
import Link from "next/link";

export default function Element({ id }: { id: number }) {
   return (
      <div className="flex justify-center relative">
         <Link
            href={{
               pathname: `/cards/${encodeURIComponent(id)}`,
               query: { id },
            }}
            as={`/cards/${encodeURIComponent(id)}`}
         >
            <Paper className="my-3 w-11/12" withBorder>
               <img
                  src="/r.webp"
                  alt="R icon"
                  className="absolute z-10 p-2 w-18"
                  loading="lazy"
                  decoding="async"
               />
               <div className="flex flex-row items-center justify-center">
                  <img
                     src={getAssetURL(
                        `images_webp/cards/full_${id}_normal.webp`
                     )}
                     alt="ill figure out what to put here later"
                     className="rounded-tl-[3px] w-1/2"
                     loading="lazy"
                     decoding="async"
                  />
                  <img
                     src={getAssetURL(
                        `images_webp/cards/full_${id}_groovy.webp`
                     )}
                     alt="ill figure out what to put here later"
                     className="rounded-tr-[3px] w-1/2"
                     loading="lazy"
                     decoding="async"
                  />
               </div>
               <h2 className="pl-4 pt-3 text-xl">School Uniform</h2>
               <h4 className="pl-4 pb-3 text-md">Malleus Draconia</h4>
            </Paper>
         </Link>
      </div>
   );
}
