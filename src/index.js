import { GildedTros } from "./gildedTros/index.js";
import arrayWithDaysAsLength from "./days/index.js";
import items from "./items/index.js";

const app = new GildedTros(items);

console.log("AXXES CODE KATA - GILDED TROS");

arrayWithDaysAsLength.forEach((_, indexDay) => {
    const dayNumber = indexDay + 1;
    console.log("-------- day", dayNumber, "--------");
    console.table(items);

    app.updateQuality();
});
