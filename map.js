// const player = new Map([['key', 'value'], ['lawal', 'kamal']])
// console.log(player);

// const player1 = { name: 'mahi', age: 24 }
// const playerData = new Map([[player1, [{ date: 'today', price: 400 }]]])

const player2 = new Map()
player2.set('muhammad', 'mahi')
player2.set('ikhtiar uddin', 'bokhtiar kholji')

// Keys method
for (const playerKey of player2.keys()) {
    console.log("Player key:", playerKey);
}
for (const playerValue of player2.values()) {
    console.log("Player Value: ", playerValue);
}







// console.log(player2);
// player2.delete('muhammad')
// console.log(player2);
// player2.clear()
// console.log(player2.entries());

