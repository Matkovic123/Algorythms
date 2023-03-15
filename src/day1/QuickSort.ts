// https://www.youtube.com/watch?v=SLauY6PpjW4
function qs(arr: number[], left: number, right: number): void {
    if (left >= right) {
        return;
    }
    const pivot = arr[Math.floor(left + (right - left) / 2)];

    const pivotIndex = partition(arr, left, right, pivot);

    qs(arr, left, pivotIndex - 1);
    qs(arr, pivotIndex, right);
}

function partition(arr: number[], left: number, right: number, pivot: number) {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            const tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left++;
            right--;
        }
    }
    return left;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}