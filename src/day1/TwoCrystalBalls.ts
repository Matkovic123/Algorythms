export default function two_crystal_balls(breaks: boolean[]): number {
    let lo = 0;
    let hi = breaks.length;
    do {
        const diff = Math.floor(Math.sqrt(hi-lo));
        if(breaks[lo] === false) {
            lo+=diff;
        }
        else if(breaks[lo] === true) {
            hi = lo;
            lo-=diff;
            while(breaks[lo] === false) {
                lo++;
            }
            return lo;
        }
    } while (hi > lo);
    return -1;

}
