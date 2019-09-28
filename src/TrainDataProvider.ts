import {TrainTrack} from './interfaces';

export class TrainDataProvider {
//^\s+([А-Яа-яё0-9 \.-]+)\s+(\d+):(\d+)\s+(\d)+:(\d+)\s+(\d+)$
//   {name:"$1", arrive:$2$3, left:$4$5, day:$6},
  getTrainTrackByNumber(number:string) {

    const trains:TrainTrack[] = [
      {
        name:'Владивосток Город → Москва',
        number:'001М',
        stations:[
          {name:'Угольная', arrive:1252, left:254, day:0},
          {name:'Уссурийск', arrive:1409, left:424, day:0},
          {name:'Сибирцево', arrive:1526, left:527, day:0},
          {name:'Мучная', arrive:1549, left:550, day:0},
          {name:'Спасск-Дальний', arrive:1627, left:630, day:0},
          {name:'Ружино', arrive:1802, left:817, day:0},
          {name:'Дальнереченск-1', arrive:1906, left:908, day:0},
          {name:'Лучегорск', arrive:2009, left:11, day:0},
          {name:'Бикин', arrive:2049, left:51, day:0},
          {name:'Вяземская', arrive:2223, left:238, day:0},
          {name:'Хабаровск', arrive:50, left:120, day:1},
          {name:'Хабаровск-1', arrive:50, left:120, day:1},
          {name:'Биробиджан', arrive:339, left:346, day:1},
          {name:'Облучье', arrive:628, left:643, day:1},
          {name:'Архара', arrive:827, left:829, day:1},
          {name:'Бурея', arrive:912, left:914, day:1},
          {name:'Завитая', arrive:955, left:957, day:1},
          {name:'Екатеринославка', arrive:1033, left:35, day:1},
          {name:'Белогорск', arrive:1142, left:212, day:1},
          {name:'Свободный', arrive:1301, left:304, day:1},
          {name:'Ледяная', arrive:1337, left:339, day:1},
          {name:'Шимановская', arrive:1417, left:419, day:1},
          {name:'Тыгда', arrive:1624, left:626, day:1},
          {name:'Магдагачи', arrive:1731, left:818, day:1},
          {name:'Сковородино', arrive:2112, left:115, day:1},
          {name:'Ерофей Павлович', arrive:45, left:106, day:2},
          {name:'Амазар', arrive:247, left:305, day:2},
          {name:'Могоча', arrive:433, left:448, day:2},
          {name:'Чернышевск-Забайкальск', arrive:1012, left:42, day:2},
          {name:'Шилка-Пасс.', arrive:1256, left:258, day:2},
          {name:'Карымская', arrive:1531, left:549, day:2},
          {name:'Чита', arrive:1734, left:815, day:2},
          {name:'Чита-2', arrive:1734, left:815, day:2},
          {name:'Хилок', arrive:2239, left:254, day:2},
          {name:'Петровский Завод', arrive:122, left:124, day:3},
          {name:'Улан-Удэ', arrive:332, left:355, day:3},
          {name:'Улан-Удэ Пасс.', arrive:332, left:355, day:3},
          {name:'Слюдянка-1', arrive:825, left:827, day:3},
          {name:'Иркутск', arrive:1031, left:54, day:3},
          {name:'Иркутск Пасс.', arrive:1031, left:54, day:3},
          {name:'Иркутск Сортировочный', arrive:1108, left:110, day:3},
          {name:'Ангарск', arrive:1148, left:150, day:3},
          {name:'Усолье-Сибирское', arrive:1217, left:219, day:3},
          {name:'Черемхово', arrive:1311, left:313, day:3},
          {name:'Зима', arrive:1452, left:522, day:3},
          {name:'Тулун', arrive:1716, left:718, day:3},
          {name:'Нижнеудинск', arrive:1853, left:906, day:3},
          {name:'Тайшет', arrive:2133, left:135, day:3},
          {name:'Иланская', arrive:2334, left:354, day:3},
          {name:'Канск-Енисейский', arrive:25, left:26, day:4},
          {name:'Красноярск', arrive:359, left:421, day:4},
          {name:'Красноярск Пасс', arrive:359, left:421, day:4},
          {name:'Ачинск-1', arrive:712, left:714, day:4},
          {name:'Боготол', arrive:818, left:819, day:4},
          {name:'Мариинск', arrive:1007, left:39, day:4},
          {name:'Тайга', arrive:1235, left:237, day:4},
          {name:'Новосибирск', arrive:1543, left:601, day:4},
          {name:'Новосибирск-Главный', arrive:1543, left:601, day:4},
          {name:'Барабинск', arrive:1909, left:939, day:4},
          {name:'Омск', arrive:2315, left:352, day:4},
          {name:'Ишим', arrive:305, left:320, day:5},
          {name:'Тюмень', arrive:640, left:700, day:5},
          {name:'Екатеринбург Пасс.', arrive:1136, left:206, day:5},
          {name:'Пермь-2', arrive:1736, left:756, day:5},
          {name:'Балезино', arrive:2131, left:157, day:5},
          {name:'Киров Пасс', arrive:105, left:125, day:6},
          {name:'Семёнов', arrive:625, left:627, day:6},
          {name:'Нижний Новгород Моск.', arrive:733, left:748, day:6},
          {name:'Владимир', arrive:1044, left:114, day:6}
        ]
      },{
        name:'Москва-Хабаровск',
        number:'002щ',
        stations:[
            {name:"Владимир", arrive:226, left:252, day:0},
            {name:"Нижний Новгород Моск.", arrive:537, left:549, day:0},
            {name:"Семёнов", arrive:639, left:641, day:0},
            {name:"Киров Пасс", arrive:1148, left:203, day:0},
            {name:"Балезино", arrive:1535, left:601, day:0},
            {name:"Пермь-2", arrive:1941, left:1, day:0},
            {name:"Екатеринбург Пасс.", arrive:104, left:132, day:1},
            {name:"Тюмень", arrive:550, left:610, day:1},
            {name:"Ишим", arrive:1000, left:15, day:1},
            {name:"Омск", arrive:1320, left:401, day:1},
            {name:"Барабинск", arrive:1727, left:757, day:1},
            {name:"Новосибирск", arrive:2126, left:144, day:1},
            {name:"Новосибирск-Главный", arrive:2126, left:144, day:1},
            {name:"Юрга", arrive:2352, left:354, day:1},
            {name:"Юрга-1", arrive:2352, left:354, day:1},
            {name:"Тайга", arrive:102, left:106, day:2},
            {name:"Мариинск", arrive:259, left:333, day:2},
            {name:"Красноярск", arrive:858, left:920, day:2},
            {name:"Красноярск Пасс", arrive:858, left:920, day:2},
            {name:"Канск-Енисейский", arrive:1302, left:303, day:2},
            {name:"Иланская", arrive:1337, left:357, day:2},
            {name:"Тайшет", arrive:1555, left:557, day:2},
            {name:"Нижнеудинск", arrive:1825, left:838, day:2},
            {name:"Тулун", arrive:2017, left:19, day:2},
            {name:"Зима", arrive:2215, left:245, day:2},
            {name:"Черемхово", arrive:28, left:30, day:3},
            {name:"Усолье-Сибирское", arrive:123, left:125, day:3},
            {name:"Ангарск", arrive:149, left:151, day:3},
            {name:"Иркутск Сортировочный", arrive:224, left:226, day:3},
            {name:"Иркутск", arrive:240, left:303, day:3},
            {name:"Иркутск Пасс.", arrive:240, left:303, day:3},
            {name:"Слюдянка-1", arrive:534, left:536, day:3},
            {name:"Улан-Удэ", arrive:956, left:17, day:3},
            {name:"Улан-Удэ Пасс.", arrive:956, left:17, day:3},
            {name:"Петровский Завод", arrive:1218, left:220, day:3},
            {name:"Хилок", arrive:1447, left:508, day:3},
            {name:"Чита", arrive:1911, left:947, day:3},
            {name:"Чита-2", arrive:1911, left:947, day:3},
            {name:"Карымская", arrive:2132, left:150, day:3},
            {name:"Шилка-Пасс.", arrive:22, left:24, day:4},
            {name:"Чернышевск-Забайкальск", arrive:246, left:316, day:4},
            {name:"Могоча", arrive:836, left:851, day:4},
            {name:"Амазар", arrive:1025, left:43, day:4},
            {name:"Ерофей Павлович", arrive:1237, left:258, day:4},
            {name:"Сковородино", arrive:1625, left:628, day:4},
            {name:"Магдагачи", arrive:1932, left:947, day:4},
            {name:"Тыгда", arrive:2046, left:48, day:4},
            {name:"Шимановская", arrive:2259, left:301, day:4},
            {name:"Ледяная", arrive:2338, left:340, day:4},
            {name:"Свободный", arrive:12, left:15, day:5},
            {name:"Белогорск", arrive:108, left:138, day:5},
            {name:"Екатеринославка", arrive:248, left:250, day:5},
            {name:"Завитая", arrive:331, left:333, day:5},
            {name:"Бурея", arrive:413, left:415, day:5},
            {name:"Архара", arrive:456, left:457, day:5},
            {name:"Облучье", arrive:651, left:706, day:5},
            {name:"Биробиджан", arrive:942, left:947, day:5}
            ]
      
      }
      
      
    ];

    const train = trains.filter((train:TrainTrack) => train.number === number);
    return train[0];
  }


}