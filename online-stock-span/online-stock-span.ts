class StockSpanner {
    stack: number[] = [];
    numOfConsLessItems = 0;
    constructor() {}

    next(price: number): number {
        this.stack.push(price);
        let pos = this.stack.length-1;
        if(price > this.stack[pos]){
            return this.numOfConsLessItems++;
        } else {
            this.numOfConsLessItems = 0;
            while(this.stack.length && this.stack[pos] <= price){
                this.numOfConsLessItems++
                pos--;
            }
            return this.numOfConsLessItems;
        }
    }
}
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */