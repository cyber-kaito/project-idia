import { Select } from "@mantine/core";

export default function RarityFilter() {
   return (
      <div className="flex justify-center my-2">
         <Select
            label="Filter by rarity:"
            placeholder="SSR"
            searchable
            clearable
            data={[
               { value: "r", label: "R" },
               { value: "sr", label: "SR" },
               { value: "ssr", label: "SSR" },
            ]}
         />
      </div>
   );
}
