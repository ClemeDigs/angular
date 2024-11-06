export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = 'fire',
    WATER = 'water'
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT] : {
        imageUrl: '/assets/img/leef.png',
        color: 'rgb(135, 255, 124)'
    },
    [MonsterType.ELECTRIC] : {
        imageUrl: '/assets/img/electricity.png',
        color: 'rgb(255, 255, 104)'
    },
    [MonsterType.FIRE] : {
        imageUrl: '/assets/img/fire.png',
        color: 'rgb(255, 104, 104)'
    },
    [MonsterType.WATER] : {
        imageUrl: '/assets/img/water.png',
        color: 'rgb(168, 208, 245)'
    },
}