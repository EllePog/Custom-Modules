function getFortune(){
    const Fortunes = require('./fortunes.json')
const r = Math.floor(Math.random() * Fortunes.length)
return fortune = Fortunes[r].message;
}
console.log(getFortune())