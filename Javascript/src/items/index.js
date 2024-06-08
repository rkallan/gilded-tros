import { getType, getCategory, getQuality } from "../helpers/index.js";
import { Item } from "./item.js";
import dataItems from "./data/items.js";

const getItems = () => {
    if (getType(dataItems) !== "array") return [];

    const items = dataItems.map(({ name, ...item }) => {
        const category = getCategory(name);
        const sellIn = category === "legendary" ? null : Number(item.sellIn) || 0;
        const quality = category === "legendary" ? 80 : getQuality(item.quality);

        return new Item(name, sellIn, quality);
    });

    return items;
};

const items = getItems();

export default items;
