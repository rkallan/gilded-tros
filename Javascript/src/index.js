import { getArrayWithDaysAsLength } from "./days/index.js";
import dataItems from "./resources/data/items.js";

const arrayWithDaysAsLength = getArrayWithDaysAsLength();

console.log(dataItems.length);

console.log("AXXES CODE KATA - GILDED TROS");

arrayWithDaysAsLength.forEach((_, index) => {
    console.log("-------- day " + index + " --------");
});
