export const startingPrice = (tickets) => {
    let lowerPrice = 0
    tickets.forEach(ticket => {
        lowerPrice = ticket.price
        if(ticket.price > lowerPrice){
            lowerPrice = ticket.price
        }
    });
    switch (lowerPrice) {
        case 0:
            const freeEntrance = "Free"
            return freeEntrance
        default:
            const lowPrice = 'Starting price: $'.concat(lowerPrice)
            return lowPrice
    }
}
