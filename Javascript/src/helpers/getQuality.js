const getQualityWithInMinMaxWithInMinMax = (value, minMaxValue = { minValue: 0, maxValue: 50 }) => {
    const quality = Number(value) || 0;
    const { minValue, maxValue } = minMaxValue;

    if (quality < minValue) return minValue;

    if (quality > maxValue) return maxValue;

    return quality;
};

export default getQualityWithInMinMaxWithInMinMax;
