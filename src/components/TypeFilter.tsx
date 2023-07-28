import { Select } from "@mantine/core";

export default function TypeFilter() {
   return (
      <div className="flex justify-center my-2">
         <Select
            label="Filter by type:"
            placeholder="Attack"
            searchable
            clearable
            data={[
               { value: "atk", label: "Attack" },
               { value: "bal", label: "Balanced" },
               { value: "def", label: "Defense" },
            ]}
         />
      </div>
   );
}
