export class AutoCompleteDemo {
    public selectedItem: DemoAutoCompleteItem | null;
    public selectedItems: DemoAutoCompleteItem[];

    private _availableItems: DemoAutoCompleteItem[];

    public constructor() {
        let makeString = (): string => {
            let result = "";
            let possible = "abcdef";

            for (let i = 0; i < 5; i++) {
                result += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return result;
        };

        let items: DemoAutoCompleteItem[] = [];
        for (let i = 0; i < 1000; i++) {
            items.push(new DemoAutoCompleteItem(makeString(), i, i % 3 === 0 ? true : false));
        }

        this._availableItems = items;
        this.selectedItem = null;
        this.selectedItems = [];// [items[Math.floor(Math.random() * 1000)], items[Math.floor(Math.random() * 1000)]];
    }

    public getSuggestions(value: string): DemoAutoCompleteItem[] {
        return this._availableItems.filter((item) => item.name.startsWith(value) ? item : undefined);
    }

    public getSuggestionsForMulti(value: string): DemoAutoCompleteItem[] {
        return this._availableItems.filter((item) => this.selectedItems.indexOf(item) < 0 && item.name.startsWith(value) ? item : undefined);
    }

    public getOrCreateItemByValue(value: string): DemoAutoCompleteItem {
        let existingItem = this._availableItems.filter((item: DemoAutoCompleteItem) => item.name === value ? item : undefined)[0];
        if (existingItem == undefined) {
            existingItem = new DemoAutoCompleteItem(value, 0, false);
            this._availableItems.push(existingItem);
        }

        return existingItem;
    }
}

class DemoAutoCompleteItem {
    public name: string;
    public count: number;
    public isDisabled: boolean;

    public constructor(name: string, count: number, isDisabled: boolean) {
        this.name = name;
        this.count = count;
        this.isDisabled = isDisabled;
    }

    public toString(): string {
        return `${this.name} (${this.count})`;
    }
}
