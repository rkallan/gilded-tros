import { categories } from "../const/index.js";

const getCategory = (value) => {
    const valueAsLowerCase = value.toLowerCase();

    if (valueAsLowerCase.includes(categories.legendary.toLowerCase())) return "legendary";
    if (valueAsLowerCase.includes(categories.backstage.toLowerCase())) return "backstage";
    if (valueAsLowerCase.includes(categories.good.toLowerCase())) return "good";
    if (categories.smelly.map((name) => name.toLowerCase()).includes(valueAsLowerCase)) return "smelly";

    return "normal";
};

export default getCategory;
