export default function two_crystal_balls(breaks: boolean[]): number {
    const t0 = performance.now()

    let lo = 0;
    let hi = breaks.length;
    const diff = Math.floor(Math.sqrt(hi - lo));
    do {
        if (breaks[lo] === false) {
            lo += diff;
        } else if (breaks[lo] === true) {
            hi = lo;
            lo -= diff;
            while (breaks[lo] === false) {
                lo++;
            }
            const t1 = performance.now();
            console.log(`Time it takes to run the function: ${t1 - t0} ms`);
            //Time it takes to run Primeagen function: 0.0822560042142868 ms
            return lo;
        }
    } while (hi > lo);
    return -1;
}
