import { Item } from "./item.js";
import { getType } from "../helpers/index.js";

import dataItems from "./data/items.js";

const getItems = () => {
    if (getType(dataItems) !== "array") return [];

    const items = dataItems.map(({ name, sellIn, quality }) => new Item(name, sellIn, quality));

    return items;
};

const items = getItems();

export default items;
