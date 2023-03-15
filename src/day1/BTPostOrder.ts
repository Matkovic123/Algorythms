function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    // pre recursion step

    //recursion step
    walk(curr.left, path);
    walk(curr.right, path);

    //post recursion step
    path.push(curr.value);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
