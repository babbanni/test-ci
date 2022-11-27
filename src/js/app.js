// TODO: write your code here
import sum from './basic';

export default function checkHealthColor({ name = '', health }) {
    if (health >= 50) {
        return 'healthy';
    } else if (health < 15) {
        return 'critical';
    } else {
        return 'wounded';
    }
}

const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
]

export function heroesSorting(heroesArray) {
    let result = heroesArray.sort((prev, next) => next.health - prev.health);
    return result;
}

console.log(heroesSorting(heroes));

console.log('worked');

console.log(sum([1, 2]));