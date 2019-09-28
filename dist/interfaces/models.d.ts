export interface IPlace {
    name: string;
}
export declare type DayHour = 0 | 1 | 2 | 3 | 4 | 5 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
export interface ITimeSlots {
    from: DayHour;
    to: DayHour;
}
export declare enum ECousinFlags {
    cosher = "cosher",
    vegan = "vegan",
    halyal = "halyal",
    fish = "fish",
    seafood = "seafood",
    diet = "diet"
}
export declare enum EDishType {
    snack = "snack",
    salad = "salad",
    main = "main",
    desert = "desert",
    soup = "soup",
    drink = "drink"
}
export declare enum ECousinType {
    europian = "europian",
    russian = "russian",
    east = "east"
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
export interface TrainStation {
    name: string;
    arrive: number;
    left: number;
    day: number;
    platform?: number;
    path?: number;
}
export interface TrainTrack {
    number: string;
    name: string;
    stations: TrainStation[];
}
export interface ConcreteTrainTrack extends TrainTrack {
    dayOfStart: string;
}
export interface IPassenger {
    name: string;
    ticket: string;
    trainDayOfStart: string;
    trainNumber: string;
}
