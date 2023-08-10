import { Select } from "@mantine/core";

export default function DuoFilter() {
   return (
      <div className="flex justify-center my-2">
         <Select
            label="Filter by Duo Partner:"
            placeholder="🐊Sebek Zigvolt"
            searchable
            clearable
            data={[
               {
                  value: "riddle",
                  label: "🌹Riddle Rosehearts",
                  group: "Heartslabyul",
               },
               { value: "ace", label: "♥️Ace Trappola", group: "Heartslabyul" },
               {
                  value: "deuce",
                  label: "♠️Deuce Spade",
                  group: "Heartslabyul",
               },
               {
                  value: "cater",
                  label: "♦️Cater Diamond",
                  group: "Heartslabyul",
               },
               { value: "trey", label: "♣️Trey Clover", group: "Heartslabyul" },
               {
                  value: "leona",
                  label: "🦁Leona Kingscholar",
                  group: "Savanaclaw",
               },
               { value: "jack", label: "🐺Jack Howl", group: "Savanaclaw" },
               {
                  value: "ruggie",
                  label: "🍩Ruggie Bucchi",
                  group: "Savanaclaw",
               },
               {
                  value: "azul",
                  label: "🐙Azul Ashengrotto",
                  group: "Octavinelle",
               },
               { value: "jade", label: "🐬Jade Leech", group: "Octavinelle" },
               { value: "floyd", label: "🦈Floyd Leech", group: "Octavinelle" },
               { value: "kalim", label: "☀️Kalim Al-Asim", group: "Scarabia" },
               { value: "jamil", label: "🐍Jamil Viper", group: "Scarabia" },
               { value: "vil", label: "👑Vil Schoenheit", group: "Pomefiore" },
               { value: "epel", label: "🏹Epel Felmier", group: "Pomefiore" },
               { value: "rook", label: "🍎Rook Hunt", group: "Pomefiore" },
               { value: "idia", label: "💀Idia Shroud", group: "Ignihyde" },
               { value: "ortho", label: "🤖Ortho Shroud", group: "Ignihyde" },
               {
                  value: "malleus",
                  label: "🐉Malleus Draconia",
                  group: "Diasomnia",
               },
               { value: "silver", label: "🗡Silver", group: "Diasomnia" },
               { value: "sebek", label: "🐊Sebek Zigvolt", group: "Diasomnia" },
               {
                  value: "lilia",
                  label: "🦇Lilia Vanrouge",
                  group: "Diasomnia",
               },
            ]}
         />
      </div>
   );
}
