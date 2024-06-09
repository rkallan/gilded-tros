import { getType, getCategory, getQualityWithInMinMax } from "../helpers";
import { Item } from "./item";
import dataItems from "./data/items";

const getItems = () => {
    if (getType(dataItems) !== "array") return [];

    const items = dataItems.map(({ name, ...item }) => {
        const category = getCategory(name);
        const sellIn = category === "legendary" ? null : Number(item.sellIn) || 0;
        const quality = category === "legendary" ? 80 : getQualityWithInMinMax(item.quality);

        return new Item(name, sellIn, quality);
    });

    return items;
};

const items = getItems();

export default items;
