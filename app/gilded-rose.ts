export class Item {
    constructor(public name: string, public sellIn: number, public quality: number) {
    }
}

export class BasicItem extends Item {
    public updateSellIn(): void {
        this.sellIn = this.sellIn - 1;
    }

    public updateQuality(increase?: boolean): void {
        this.updateSellIn();
        
        if (increase) {
            this.quality = this.quality + 1;
        } else {
            if (this.sellIn <= 0) this.quality = this.quality - 2;
            else this.quality = this.quality - 1;
        }
        
        if (this.quality <= 0) this.quality = 0;
        else if (this.quality > 50) this.quality = 50;
    }
}

export class BrieItem extends BasicItem {
    public updateQuality(): void {
        super.updateQuality(true);
    }
}

export class SulfurasItem extends BasicItem {
    public updateQuality(): void {
    }
}

export class BackStagePassItem extends BasicItem {
    public updateQuality(): void {
        super.updateQuality(true);
        
        if (this.sellIn <= 10) this.quality = this.quality + 1;
        if (this.sellIn <= 5) this.quality = this.quality + 1;
        if (this.sellIn <= 0) this.quality = 0;
    }
}

export class ConjuredItem extends BasicItem {
    public updateQuality(): void {
        super.updateQuality();
        
        this.quality = this.quality - 1;
    }
}

export class GildedRose {
    constructor(private _items = []) {}

    public updateQuality(): Array<Item> {
        this._items.map((item) => {
            item.updateQuality();
        });

        return this._items;
    }
}
