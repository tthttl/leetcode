class StockSpanner {
    stack: number[] = [];
    constructor() {}

    next(price: number): number {
        let ans = 0;
        this.stack.push(price);
        let pos = this.stack.length-1;
        while(this.stack.length && this.stack[pos] <= price){
            ans++;
            pos--;
        }
        return ans;
    }
}
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */