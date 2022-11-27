import checkHealthColor from '../app';
import { heroesSorting } from '../app';

test('checkHealthColor healthy', () => {
    const hero = { name: 'Маг', health: 90 };
    const result = checkHealthColor(hero);

    expect(result).toBe('healthy');
});

test('checkHealthColor wounded', () => {
    const hero = { name: 'Маг', health: 45 };
    const result = checkHealthColor(hero);

    expect(result).toBe('wounded');
});

test('checkHealthColor critical', () => {
    const hero = { name: 'Маг', health: 10 };
    const result = checkHealthColor(hero);

    expect(result).toBe('critical');
});

test('testing heroesSorting function', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const heroesSorted = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    let result = heroesSorting(heroes);

    expect(result).toEqual(heroesSorted);
});