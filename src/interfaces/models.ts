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
  cosher = "cosher",
  vegan = "vegan",
  halyal = "halyal",
  fish = "fish",
  seafood = "seafood",
  diet = "diet"
}

export enum EDishType {
  snack = "snack",
  salad = "salad",
  main = "main",
  desert = "desert",
  soup = "soup",
  drink = "drink"
}


export enum ECousinType {
  europian = "europian",
  russian = "russian",
  east = "east",
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

export interface TrainStation {
  name: string,
  //time of day in hours+minutes as string  12:30=>1230, 0:10 => 10 of arrived time MSK
  arrive:number,
  //time of day in hours+minutes as string  12:30=>1230, 0:10 => 10 of arrived time MSK
  left:number,
  day:number,
  platform?:number,
  path?:number

}


export interface TrainTrack{
  number:string,     //  id
  name: string,
  stations:TrainStation[]
}
export interface ConcreteTrainTrack extends TrainTrack{
  dayOfStart:string //  id
}

export interface IPassenger {
  name:string,
  ticket: string,
  trainDayOfStart:string,
  trainNumber:string
}
