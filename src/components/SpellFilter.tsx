import { Select } from "@mantine/core";

export default function SpellFilter() {
   return (
      <div className="flex justify-center my-2">
         <Select
            label="Filter by spell:"
            placeholder="Fire"
            searchable
            clearable
            data={[
               { value: "fire", label: "Fire", group: "Element" },
               { value: "water", label: "Water", group: "Element" },
               { value: "flora", label: "Flora", group: "Element" },
               { value: "cosmic", label: "Cosmic", group: "Element" },
               { value: "atk", label: "Attack Magic", group: "Type" },
               { value: "heal", label: "Healing Magic", group: "Type" },
            ]}
         />
      </div>
   );
}
