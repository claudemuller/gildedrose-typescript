import { expect } from 'chai';
import { GildedRose, BackStagePassItem, BasicItem, BrieItem, SulfurasItem } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    let gilgedRose;

    beforeEach(() => {
        gilgedRose = new GildedRose([
            new BrieItem('Aged Brie', 10, 25),
            new SulfurasItem('Sulfuras, Hand of Ragnaros', 0, 0),
            new BackStagePassItem('Backstage passes to a TAFKAL80ETC concert', 15, 15),
            new BasicItem('Something here', 25, 5),
        ]);
    });

    describe('Aged Brie', () => {
        let items;

        beforeEach(() => {
            items = gilgedRose.updateQuality();
        });

        it('should return Aged Brie', () => {
            expect(items[0].name).to.equal('Aged Brie');
        });

        it('should have decreased in sellIn', () => {
            expect(items[0].sellIn).to.equal(9);
        });

        it('should have increased in quality', () => {
            expect(items[0].quality).to.equal(26);
        });
    });

    describe('Sulfuras, Hand of Ragnaros', () => {
        let items;

        beforeEach(() => {
            items = gilgedRose.updateQuality();
        });

        it('should return Sulfuras, Hand of Ragnaros', () => {
            expect(items[1].name).to.equal('Sulfuras, Hand of Ragnaros');
        });

        it('should not have decreased in sellIn', () => {
            expect(items[1].sellIn).to.equal(0);
        });

        it('should not have increased in quality', () => {
            expect(items[1].quality).to.equal(0);
        });
    });

    describe('Backstage passes to a TAFKAL80ETC concert', () => {
        let items;

        beforeEach(() => {
            items = gilgedRose.updateQuality();
        });

        it('should return Backstage passes to a TAFKAL80ETC concert', () => {
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
                items = gilgedRose.updateQuality();
            }

            expect(items[2].quality).to.equal(23);
        });

        it('should have increased in quality to double when sellIn less than 5', () => {
            for (let i = 0; i < 10; i++) {
                items = gilgedRose.updateQuality();
            }

            expect(items[2].quality).to.equal(35);
        });
    });

    describe('Something here', () => {
        let items;

        beforeEach(() => {
            items = gilgedRose.updateQuality();
        });

        it('should return Something here', () => {
            expect(items[3].name).to.equal('Something here');
        });

        it('should have decreased in sellIn', () => {
            expect(items[3].sellIn).to.equal(24);
        });

        it('should have increased in quality', () => {
            expect(items[3].quality).to.equal(4);
        });
    });
});
