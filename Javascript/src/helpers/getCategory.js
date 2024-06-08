const categories = {
    legendary: "B-DAWG Keychain",
    backstage: "Backstage passes",
    good: "Good Wine",
};

const getCategory = (value) => {
    const valueAsLowerCase = value.toLowerCase();

    if (valueAsLowerCase.includes(categories.legendary.toLowerCase())) return "legendary";
    if (valueAsLowerCase.includes(categories.backstage.toLowerCase())) return "backstage";
    if (valueAsLowerCase.includes(categories.good.toLowerCase())) return "good";

    return "normal";
};

export default getCategory;
