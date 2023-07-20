function findCost(n) {
    let totalCost = 0;
    while(n > 0){
        const candy = Math.ceil(n / 3);
        totalCost += candy * candy;
        n -= candy;     
    }
    return totalCost;
}
