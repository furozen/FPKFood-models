export interface IPlace {
    name: string;
}
export declare type DayHour = 0 | 1 | 2 | 3 | 4 | 5 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
export interface ITimeSlots {
    from: DayHour;
    to: DayHour;
}
export declare enum ECousinFlags {
    cosher = 0,
    vegan = 1,
    halyal = 2,
    fish = 3,
    seafood = 4
}
export declare enum EDishType {
    salad = 0,
    main = 1,
    soup = 2,
    drink = 3
}
export declare enum ECousinType {
    europian = 0,
    russian = 1,
    east = 2
}
export declare type TMinutes = number;
export declare type TPositionsCollection = {
    place: IPlace;
    dishName: string;
    timeAccessibleSlots: ITimeSlots[];
    cousinFlags: Set<ECousinFlags>;
    dishType: EDishType;
    cousinType: ECousinType;
    timeOfDelivery: TMinutes;
};
