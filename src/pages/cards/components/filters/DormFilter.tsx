import { Select } from "@mantine/core";

export default function DormFilter() {
   return (
      <div className="flex justify-center my-2">
         <Select
            label="Filter by dorm:"
            placeholder="Diasomnia"
            searchable
            clearable
            data={[
               { value: "he", label: "Heartslabyul" },
               { value: "sa", label: "Savanaclaw" },
               { value: "oc", label: "Octavinelle" },
               { value: "sc", label: "Scarabia" },
               { value: "po", label: "Pomefiore" },
               { value: "ig", label: "Ignihyde" },
               { value: "di", label: "Diasomnia" },
               { value: "ra", label: "Ramshackle Dorm" },
            ]}
         />
      </div>
   );
}
