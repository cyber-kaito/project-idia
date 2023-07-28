import { Select } from "@mantine/core";

export default function SetFilter() {
   return (
      <div className="flex justify-center my-2">
         <Select
            label="Filter by set:"
            placeholder="Dorm Uniform"
            searchable
            clearable
            data={[
               { value: "schuni", label: "School Uniform" },
               { value: "peuni", label: "PE Uniform" },
               { value: "lab", label: "Labwear" },
               { value: "robe", label: "Ceremonial Robes" },
               { value: "doruni", label: "Dorm Uniform" },
               { value: "club", label: "Club Wear" },
               { value: "bboy", label: "Birthday Boy" },
               { value: "bjac", label: "Birthday Jacket" },
               { value: "bean", label: "Beans Camo" },
               { value: "gala", label: "Gala Couture" },
               { value: "suit", label: "Suitor Suits" },
               { value: "star", label: "Starsending Robes" },
               { value: "out", label: "Outdoor Wear" },
               { value: "hlwn", label: "Halloween" },
               { value: "chef", label: "Apprentice Chef" },
               { value: "silk", label: "Silk Adorned" },
               { value: "apple", label: "Applepom" },
               { value: "nya", label: "New Year's Attire" },
               { value: "tsum", label: "Tsumsitter" },
            ]}
         />
      </div>
   );
}
