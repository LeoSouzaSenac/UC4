import { IStack } from "./IStack";

export class Stack implements IStack {
    private items: any[];

    constructor() {
        this.items = [];
    }

    push(item: any): void {
        this.items.push(item);
    }

    pop(): any | null {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }

    peek(): any | null {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}
