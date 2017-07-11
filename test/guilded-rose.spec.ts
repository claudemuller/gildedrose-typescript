import { expect } from 'chai';
import { GildedRose, BackStagePassItem, BasicItem, BrieItem, SulfurasItem, ConjuredItem } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    let gildedRose;

    beforeEach(() => {
        gildedRose = new GildedRose([
            new BrieItem('Aged Brie', 10, 25),
            new SulfurasItem('Sulfuras, Hand of Ragnaros', 0, 0),
            new BackStagePassItem('Backstage passes to a TAFKAL80ETC concert', 15, 15),
            new BasicItem('Cheddar Cheese', 25, 5),
            new BasicItem('Bread', 2, 10),
            new ConjuredItem('Conjured', 10, 10)
        ]);
    });

    describe('Aged Brie', () => {
        let items;

        beforeEach(() => {
            items = gildedRose.updateQuality();
        });

        it('should return the name Aged Brie', () => {
            expect(items[0].name).to.equal('Aged Brie');
        });

        it('should have decreased in sellIn', () => {
            expect(items[0].sellIn).to.equal(9);
        });

        it('should have increased in quality', () => {
            expect(items[0].quality).to.equal(26);
        });

        it('should not exceed a quality level of 50', () => {
            for (let i = 0; i < 25; i++) {
                items = gildedRose.updateQuality();
            }

            expect(items[0].quality).to.equal(50);
        });
    });

    describe('Sulfuras, Hand of Ragnaros', () => {
        let items;

        beforeEach(() => {
            items = gildedRose.updateQuality();
        });

        it('should return the name Sulfuras, Hand of Ragnaros', () => {
            expect(items[1].name).to.equal('Sulfuras, Hand of Ragnaros');
        });

        it('should not have increased or decreased in sellIn', () => {
            expect(items[1].sellIn).to.equal(0);
        });

        it('should not have increased or decreased in quality', () => {
            expect(items[1].quality).to.equal(0);
        });
    });

    describe('Backstage passes to a TAFKAL80ETC concert', () => {
        let items;

        beforeEach(() => {
            items = gildedRose.updateQuality();
        });

        it('should return the name Backstage passes to a TAFKAL80ETC concert', () => {
            expect(items[2].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        });

        it('should have decreased in sellIn', () => {
            expect(items[2].sellIn).to.equal(14);
        });

        it('should have increased in quality', () => {
            expect(items[2].quality).to.equal(16);
        });

        it('should have increased in quality to double when sellIn less than 10', () => {
            for (let i = 0; i < 5; i++) {
                items = gildedRose.updateQuality();
            }

            expect(items[2].quality).to.equal(23);
        });

        it('should have increased in quality to double when sellIn less than 5', () => {
            for (let i = 0; i < 10; i++) {
                items = gildedRose.updateQuality();
            }

            expect(items[2].quality).to.equal(35);
        });
    });

    describe('Cheddar Cheese', () => {
        let items;

        beforeEach(() => {
            items = gildedRose.updateQuality();
        });

        it('should return the name Cheddar Cheese', () => {
            expect(items[3].name).to.equal('Cheddar Cheese');
        });

        it('should have decreased in sellIn', () => {
            expect(items[3].sellIn).to.equal(24);
        });

        it('should have decreased in quality', () => {
            expect(items[3].quality).to.equal(4);
        });

        it('should have stopped increasing in quality after 5 days', () => {
            for (let i = 0; i < 5; i++) {
                items = gildedRose.updateQuality();
            }

            expect(items[3].quality).to.equal(0);
        });
    });

    describe('Bread', () => {
        let items;

        beforeEach(() => {
            items = gildedRose.updateQuality();
        });

        it('should return the name Bread', () => {
            expect(items[4].name).to.equal('Bread');
        });

        it('should have decreased in sellIn', () => {
            expect(items[4].sellIn).to.equal(1);
        });

        it('should have decreased in quality', () => {
            expect(items[4].quality).to.equal(9);
        });

        it('should have stopped increasing in quality after 2 days', () => {
            for (let i = 0; i < 2; i++) {
                items = gildedRose.updateQuality();
            }

            expect(items[4].quality).to.equal(5);
        });
    });

    describe('Conjured', () => {
        let items;

        beforeEach(() => {
            items = gildedRose.updateQuality();
        });

        it('should return the name Conjured', () => {
            expect(items[5].name).to.equal('Conjured');
        });

        it('should have decreased in sellIn', () => {
            expect(items[5].sellIn).to.equal(9);
        });

        it('should have decreased double in quality', () => {
            expect(items[5].quality).to.equal(8);
        });
    });
});
