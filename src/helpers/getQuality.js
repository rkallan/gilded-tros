import { qualityMinMaxValue } from "../const/index.js";

const getQualityWithInMinMaxWithInMinMax = (value, { minValue, maxValue } = qualityMinMaxValue) => {
    const quality = Number(value) || 0;

    if (quality < minValue) return minValue;

    if (quality > maxValue) return maxValue;

    return quality;
};

export default getQualityWithInMinMaxWithInMinMax;
