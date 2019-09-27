export interface IPlace {
  name:string
}

export type DayHour =
  0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export interface ITimeSlots {
  from:DayHour
  to:DayHour
}


export enum ECousinFlags {
  cosher,
  vegan,
  halyal,
  fish,
  seafood
}

export enum EDishType {
  salad,
  main,
  soup,
  drink
}

export enum ECousinType {
  europian,
  russian,
  east
}

export type TMinutes = number;

export type TPositionsCollection = {

  place : IPlace,
  dishName:string,
  timeAccessibleSlots:ITimeSlots[]
  cousinFlags:Set<ECousinFlags>,
  dishType:EDishType,
  cousinType:ECousinType,
  timeOfDelivery:TMinutes
};
