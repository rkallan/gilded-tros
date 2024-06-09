import { getCategory, getQualityWithInMinMax } from "../helpers";

export class GildedTros {
    constructor(items) {
        this.items = items;
    }

    getIncreaseValueBackstageItem(sellIn) {
        if (sellIn < 0) return 0;

        if (sellIn >= 0 && sellIn <= 5) return 3;

        if (sellIn <= 10 && sellIn > 5) return 2;

        return 1;
    }

    getIncreaseValue(sellIn, category) {
        if (category === "backstage") return this.getIncreaseValueBackstageItem(sellIn);

        const increaseValues = [1, 2];
        const increaseKey = Number(Math.sign(sellIn) === -1);
        const increaseWith = increaseValues[increaseKey];

        if (category === "good") return increaseWith;

        const increaseNormalItemWith = -Math.abs(increaseWith);

        if (category === "smelly") return increaseNormalItemWith * 2;

        return increaseNormalItemWith;
    }

    setLegendaryItem(item) {
        if (item.sellIn !== null) item.sellIn = null;
        if (item.quality !== 80) item.quality = 80;
    }

    setItem(item, category) {
        const sellIn = item.sellIn - 1;
        const increaseWith = this.getIncreaseValue(sellIn, category);
        const quality = Math.sign(sellIn) === -1 && category === "backstage" ? 0 : this.calculateQuality(item.quality, increaseWith);

        item.sellIn = sellIn;
        item.quality = quality;
    }

    calculateQuality(currentQuality, increaseWith) {
        const newQualityValue = currentQuality + increaseWith;
        const quality = getQualityWithInMinMax(newQualityValue);

        return quality;
    }

    updateQuality() {
        this.items.forEach((item) => {
            const category = getCategory(item.name);

            if (category === "legendary") return this.setLegendaryItem(item);

            this.setItem(item, category);
        });
    }
}
