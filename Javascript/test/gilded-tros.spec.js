import { Item } from "../src/items/item";
import { GildedTros } from "../src/gildedTros/index";

describe("GildedTros", () => {
    test("Test Item normal with positive sellIn", () => {
        const items = [new Item("foo", 6, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(5);
        expect(app.items[0].quality).toEqual(4);
    });
    test("Test Item normal with negative sellIn", () => {
        const items = [new Item("foo", -6, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(-7);
        expect(app.items[0].quality).toEqual(3);
    });
    test("Test Item Good with positive sellIn", () => {
        const items = [new Item("Good Wine", 6, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(5);
        expect(app.items[0].quality).toEqual(6);
    });
    test("Test Item Good with negative sellIn", () => {
        const items = [new Item("Good Wine", -6, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(-7);
        expect(app.items[0].quality).toEqual(7);
    });
    test("Test Item B-DAWG Keychain", () => {
        const items = [new Item("B-DAWG Keychain", -6, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(null);
        expect(app.items[0].quality).toEqual(80);
    });
    test("Test Item Backstage passes negative sellIn", () => {
        const items = [new Item("Backstage passes", -6, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(-7);
        expect(app.items[0].quality).toEqual(0);
    });
    test("Test Item Backstage passes sellIn < 5", () => {
        const items = [new Item("Backstage passes", 4, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(3);
        expect(app.items[0].quality).toEqual(8);
    });
    test("Test Item Backstage passes sellIn < 11", () => {
        const items = [new Item("Backstage passes", 9, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(8);
        expect(app.items[0].quality).toEqual(7);
    });
    test("Test Item Backstage passes sellIn > 10", () => {
        const items = [new Item("Backstage passes", 19, 5)];
        const app = new GildedTros(items);
        app.updateQuality();
        expect(app.items[0].sellIn).toEqual(18);
        expect(app.items[0].quality).toEqual(6);
    });
});
