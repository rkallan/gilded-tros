import { GildedTros } from "./gildedTros";
import arrayWithDaysAsLength from "./days";
import items from "./items";

const app = new GildedTros(items);

console.log("AXXES CODE KATA - GILDED TROS");

arrayWithDaysAsLength.forEach((_, indexDay) => {
    const dayNumber = indexDay + 1;
    console.log("-------- day", dayNumber, "--------");
    console.table(items);

    app.updateQuality();
});
