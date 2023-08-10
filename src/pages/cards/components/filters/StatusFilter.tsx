import { Select } from "@mantine/core";

export default function StatusFilter() {
   return (
      <div className="flex justify-center my-2">
         <Select
            label="Filter by status effect:"
            placeholder="Fire"
            searchable
            clearable
            data={[
               {
                  value: "tpb",
                  label: "Tiny Power Boost",
                  group: "Power Boost",
               },
               {
                  value: "mipb",
                  label: "Minor Power Boost",
                  group: "Power Boost",
               },
               {
                  value: "mopb",
                  label: "Modest Power Boost",
                  group: "Power Boost",
               },
               {
                  value: "mapb",
                  label: "Major Power Boost",
                  group: "Power Boost",
               },
               {
                  value: "tdb",
                  label: "Tiny Damage Boost",
                  group: "Damage Boost",
               },
               {
                  value: "midb",
                  label: "Minor Damage Boost",
                  group: "Damage Boost",
               },
               {
                  value: "modb",
                  label: "Modest Damage Boost",
                  group: "Damage Boost",
               },
               {
                  value: "madb",
                  label: "Major Damage Boost",
                  group: "Damage Boost",
               },
               {
                  value: "mifib",
                  label: "Minor Fire Boost",
                  group: "Element Boost",
               },
               {
                  value: "mofib",
                  label: "Modest Fire Boost",
                  group: "Element Boost",
               },
               {
                  value: "moflb",
                  label: "Modest Flora Boost",
                  group: "Element Boost",
               },
               {
                  value: "mocb",
                  label: "Modest Cosmic Boost",
                  group: "Element Boost",
               },
               {
                  value: "mafib",
                  label: "Major Fire Boost",
                  group: "Element Boost",
               },
               {
                  value: "mawb",
                  label: "Major Water Boost",
                  group: "Element Boost",
               },
               {
                  value: "maflb",
                  label: "Major Flora Boost",
                  group: "Element Boost",
               },
               {
                  value: "macb",
                  label: "Major Cosmic Boost",
                  group: "Element Boost",
               },
               {
                  value: "midr",
                  label: "Minor Damage Resistance",
                  group: "Damage Resistance",
               },
               {
                  value: "modr",
                  label: "Modest Damage Resistance",
                  group: "Damage Resistance",
               },
               {
                  value: "madr",
                  label: "Major Damage Resistance",
                  group: "Damage Resistance",
               },
               {
                  value: "teb",
                  label: "Tiny Evasion Boost",
                  group: "Evasion Boost",
               },
               {
                  value: "mieb",
                  label: "Minor Evasion Boost",
                  group: "Evasion Boost",
               },
               {
                  value: "moeb",
                  label: "Modest Evasion Boost",
                  group: "Evasion Boost",
               },
               {
                  value: "bim",
                  label: "Blind Immunity",
                  group: "Debuff Immunity",
               },
               {
                  value: "cim",
                  label: "Curse Immunity",
                  group: "Debuff Immunity",
               },
               {
                  value: "fim",
                  label: "Freeze Immunity",
                  group: "Debuff Immunity",
               },
               {
                  value: "dre",
                  label: "Debuff Removal",
                  group: "Debuff Removal",
               },
               {
                  value: "mihpres",
                  label: "Minor HP Restoration",
                  group: "HP Restoration",
               },
               {
                  value: "mohpres",
                  label: "Modest HP Restoration",
                  group: "HP Restoration",
               },
               { value: "mihpreg", label: "Minor HP Regen", group: "HP Regen" },
               {
                  value: "mohpreg",
                  label: "Modest HP Regen",
                  group: "HP Regen",
               },
               {
                  value: "tpd",
                  label: "Tiny Power Drain",
                  group: "Power Drain",
               },
               {
                  value: "mipd",
                  label: "Minor Power Drain",
                  group: "Power Drain",
               },
               {
                  value: "mopd",
                  label: "Modest Power Drain",
                  group: "Power Drain",
               },
               {
                  value: "mapd",
                  label: "Major Power Drain",
                  group: "Power Drain",
               },
               { value: "tdc", label: "Tiny Damage Cut", group: "Damage Cut" },
               {
                  value: "midc",
                  label: "Minor Damage Cut",
                  group: "Damage Cut",
               },
               {
                  value: "modc",
                  label: "Modest Damage Cut",
                  group: "Damage Cut",
               },
               {
                  value: "madc",
                  label: "Major Damage Cut",
                  group: "Damage Cut",
               },
               {
                  value: "mafidc",
                  label: "Major Fire Damage Cut",
                  group: "Damage Cut",
               },
               {
                  value: "macdc",
                  label: "Major Cosmic Damage Cut",
                  group: "Damage Cut",
               },
               { value: "mic", label: "Minor Curse", group: "Curse" },
               { value: "moc", label: "Modest Curse", group: "Curse" },
               { value: "mac", label: "Major Curse", group: "Curse" },
            ]}
         />
      </div>
   );
}
