export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0;
    let high = haystack.length
    do {
        const mid = Math.floor(low + (high-low) / 2)
        if(haystack[mid] === needle) {
            return true;
        }
        if(haystack[mid] > needle) {
            high = mid;
        }
        if(haystack[mid] < needle) {
            low = mid+1
        }
    } while(low < high)

    return false;
}