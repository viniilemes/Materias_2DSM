var letra: string = "a";

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("A letra digitada é uma vogal!");
    break;
  default:
    console.log("A letra digitada é uma consoante!");
}