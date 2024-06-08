import { GildedTros } from "./gildedTros/gilded-tros.js";
import arrayWithDaysAsLength from "./days/index.js";
import items from "./items/index.js";

console.log("AXXES CODE KATA - GILDED TROS");

const app = new GildedTros(items);

arrayWithDaysAsLength.forEach((_, index) => {
    console.log("-------- day", index, "--------");
    console.table(items);

    app.updateQuality();
});
