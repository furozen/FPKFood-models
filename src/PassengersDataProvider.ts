import {IPassenger} from './interfaces';

export class PassengersDataProvider {

  getPassengerByTicket(ticket:string){

    const passengers:IPassenger[]= [
      { name:'Andrey Malahovsky',
        ticket:"2233445566",
        trainNumber:'001М',
        trainDayOfStart:'2019-09-27'
      }
    ]


}
