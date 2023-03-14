type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        if (!this.tail) {
            this.head = this.tail = { value: item };
            return;
        }
        this.tail.next = { value: item };
        this.tail = this.tail.next;
    }
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
