type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = { value: item };
            return;
        }
        const newItem = { value: item, next: this.head };
        this.head = newItem;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const oldHead = this.head;
        this.head = this.head.next;
        return oldHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
