type id = number;
type jpOnly = "Y" | "N";
type gameText = string;
type gameValue = number;

interface GameCardStripped {
   cardID: id;
   name: gameText;
   title: gameText;
   rarity: gameText;
}

interface GameCard extends GameCardStripped {
   internalCardID: id;
   jpOnly: jpOnly;
   dorm: gameText;
   type: gameText;
   minHP: gameValue;
   maxHP: gameValue;
   minPOW: gameValue;
   maxPOW: gameValue;
   spell1Name: gameText;
   spell2Name: gameText;
   spell3Name: gameText;
   spell1Type: gameText;
   spell2Type: gameText;
   spell3Type: gameText;
   spell1Desc: gameText;
   spell2Desc: gameText;
   spell3Desc: gameText;
   spell1Effect1: gameText;
   spell1Effect2: gameText;
   spell2Effect: gameText;
   spell3Effect1: gameText;
   spell3Effect2: gameText;
   buddy1: gameText;
   buddy2: gameText;
   buddy3: gameText;
   bonus1: gameText;
   bonus2: gameText;
   bonus3: gameText;
   duoPartner: gameText;
   acquisition: gameText;
}
