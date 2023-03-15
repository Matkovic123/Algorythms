type Node<T> = {
    value: T;
    next?: Node<T>;
    previous?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    head?: Node<T>;
    tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = { value: item, next: this.head } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        const oldHead = this.head;
        oldHead!.previous = newNode;
        this.head = newNode;
    }
    insertAt(item: T, idx: number): void {
        const newNode = { value: item } as Node<T>;
        let i = 0;
        let curr = this.head;
        while (idx !== i) {
            curr = curr?.next;
            i++;
        }
        const previous = curr?.previous;
        const next = curr?.next;
        if (!curr) {
            return undefined;
        }
        this.length++;
        if (previous && next) {
            previous.next = newNode;
            newNode.previous = previous;
            newNode.next = curr;
            curr.previous = newNode;
            return;
        }
        if (previous) {
            curr.next = newNode;
            newNode.previous = curr;
            this.tail = newNode;
        }
        if (next) {
            this.head = newNode;
            curr.previous = newNode;
            newNode.next = curr;
        }
        return undefined;
    }

    append(item: T): void {
        const newNode = { value: item } as Node<T>;
        let curr = this.tail;
        this.length++;
        if (!curr) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail = newNode;
        curr.next = newNode;
        newNode.previous = curr;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        let i = 0;
        while (curr?.value != item) {
            if (i === this.length - 1) {
                return undefined;
            }
            curr = curr?.next;
            i++;
        }
        const previous = curr?.previous;
        const next = curr?.next;
        if (!curr) {
            return undefined;
        }
        this.length--;
        if (previous && next) {
            previous.next = next;
            next.previous = previous;
            return curr.value;
        }
        if (previous) {
            previous.next = undefined;
            this.tail = curr;
            return curr?.value;
        }
        if (next) {
            next.previous = undefined;
            this.head = next;
            return curr?.value;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        let i = 0;
        let curr = this.head;
        while (idx !== i) {
            curr = curr?.next;
            i++;
        }
        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        let i = 0;
        let curr = this.head;
        while (idx !== i) {
            curr = curr?.next;
            i++;
        }
        const previous = curr?.previous;
        const next = curr?.next;
        if (!curr) {
            return undefined;
        }
        this.length--;
        if (previous && next) {
            previous.next = next;
            next.previous = previous;
            return curr?.value;
        }
        if (previous) {
            previous.next = undefined;
            this.tail = curr;
            return curr?.value;
        }
        if (next) {
            next.previous = undefined;
            this.head = next;
            return curr?.value;
        }
        if (!curr.next && !curr.previous) {
            this.head = this.tail = undefined;
            return curr.value;
        }

        return undefined;
    }
}
