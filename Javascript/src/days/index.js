import { getType } from "../helpers/index.js";
import { defaultDays } from "./const/index.js";

const getDays = () => {
    const processArgv = process.argv.slice(2);

    const [_, daysAsString] = processArgv.find((value) => value.includes("days"))?.split("=") || [];

    const days = getType(daysAsString) === "string" && daysAsString.trim().length ? Number(daysAsString) : NaN;

    if (!isNaN(days)) return days || defaultDays;

    return defaultDays;
};

const getArrayWithDaysAsLength = () => {
    const arrayLength = getDays();
    const arrayWithDaysLength = Array.from(Array(arrayLength));

    return arrayWithDaysLength;
};

const arrayWithDaysAsLength = getArrayWithDaysAsLength();

export default arrayWithDaysAsLength;
