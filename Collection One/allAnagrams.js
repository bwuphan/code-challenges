function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.

  //create a results array
  var results = [];

  //split string into array
  var stringArray = string.split('');
  //create a subroutine passing in current string string array and previous letter
  var recurseThruString = function(comboString, stringArr, position) {
    //if current string.length === string.length, return
    if(comboString.length === string.length){
      if(results.indexOf(comboString) === -1){
        results.push(comboString);
      }
      return;
    }
    //find index of previous letter and splice it from array
    if(position !== null) {
      var newArray = stringArr.slice();
      newArray.splice(position, 1);
    }
    //iterate thru string array
    var thisArray = newArray || stringArr;
    for(let i = 0; i < thisArray.length; i++) {
      //recurse and pass in current string string array and letter added
      recurseThruString(comboString + thisArray[i], thisArray, i);
    }
  }
  //return results
  recurseThruString('', stringArray, null)
  return results;
}

// console.log(allAnagrams('apps'));
// var exp = "1+1";
// console.log(eval(exp))

// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// arr.splice(15, arr.length)
// console.log(arr)
/*
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples
Input Output
string:
"abc" [ "abc", "acb", "bac", "bca", "cab", "cba" ]
*/

var data = [
  {
    "id": 2,
    "name": "Jon Snow",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 283 AC",
    "died": "",
    "titles": [
      "Lord Commander of the Night's Watch"
    ],
    "aliases": [
      "Lord Snow",
      "Ned Stark's Bastard",
      "The Snow of Winterfell",
      "The Crow-Come-Over",
      "The 998th Lord Commander of the Night's Watch",
      "The Bastard of Winterfell",
      "The Black Bastard of the Wall",
      "Lord Crow"
    ],
    "parent": 1,
    "children": [],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Feast for Crows"
    ],
    "povBooks": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Kit Harington"
    ]
  },
  {
    "id": 1,
    "name": "Eddard Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 263 AC, at Winterfell",
    "died": "In 299 AC, at Great Sept of Baelor in King's Landing",
    "titles": [
      "Lord of Winterfell",
      "Warden of the North",
      "Hand of the King",
      "Protector of the Realm",
      "Regent"
    ],
    "aliases": [
      "Ned",
      "The Ned",
      "The Quiet Wolf"
    ],
    "parent": 3,
    "children": [2, 7, 8, 4, 14, 11],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons",
      "The World of Ice and Fire"
    ],
    "povBooks": [
      "A Game of Thrones"
    ],
    "tvSeries": [
      "Season 1",
      "Season 6"
    ],
    "playedBy": [
      "Sean Bean",
      "Sebastian Croft",
      "Robert Aramayo"
    ]
  },
  {
    "id": 7,
    "name": "Robb Stark",
    "gender": "Male",
    "culture": "",
    "born": "283 AC, at Riverrun",
    "died": "299 AC, at the Twins",
    "titles": [
      "King in the North",
      "King of the Trident\nLord of Winterfell"
    ],
    "aliases": [
      "The Young Wolf",
      "The King Who Lost the North",
      "Robb the Lord",
      "The Boy Wolf"
    ],
    "parent": 1,
    "children": [],
    "allegiances": [],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3"
    ],
    "playedBy": [
      "Richard Madden"
    ]
  },
  {
    "id": 16,
    "name": "Jeyne Westerling",
    "gender": "Female",
    "culture": "Westerman",
    "born": "In 283 AC, at the Crag",
    "died": "",
    "titles": [
      "Queen",
      "Lady of Winterfell"
    ],
    "aliases": [],
    "parent": "",
    "children": [],
    "allegiances": [
      "House Stark of Winterfell",
      "House Westerling of the Crag"
    ],
    "books": [
      "A Storm of Swords",
      "A Feast for Crows"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 8,
    "name": "Sansa Stark",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 286 AC, at Winterfell",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      "Little bird",
      "Alayne Stone",
      "Jonquil"
    ],
    "parent": 1,
    "children": [],
    "allegiances": [
      "House Bar Emmon of Sharp Point",
      "House Stark of Winterfell"
    ],
    "books": [
      "A Dance with Dragons"
    ],
    "povBooks": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Sophie Turner"
    ]
  },
  {
    "id": 4,
    "name": "Arya Stark",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 289 AC, at Winterfell",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      "Arya Horseface",
      "Arya Underfoot",
      "Arry",
      "Lumpyface",
      "Lumpyhead",
      "Stickboy",
      "Weasel",
      "Nymeria",
      "Squan",
      "Saltb",
      "Cat of the Canaly",
      "Bets",
      "The Blind Girh",
      "The Ugly Little Girl",
      "Mercedenl",
      "Mercye"
    ],
    "parent": 1,
    "children": [],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [],
    "povBooks": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Maisie Williams"
    ]
  },
  {
    "id": 14,
    "name": "Brandon Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 290 AC, at Winterfell",
    "died": "",
    "titles": [
      "Prince of Winterfell"
    ],
    "aliases": [
      "Bran",
      "Bran the Broken",
      "The Winged Wolf"
    ],
    "parent": 1,
    "children": [],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Feast for Crows"
    ],
    "povBooks": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 6"
    ],
    "playedBy": [
      "Isaac Hempstead-Wright"
    ]
  },
  {
    "id": 11,
    "name": "Rickon Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 295 AC, at Winterfell",
    "died": "",
    "titles": [
      "Prince of Winterfell",
      "Heir to Winterfell"
    ],
    "aliases": [],
    "parent": 1,
    "children": [],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4"
    ],
    "playedBy": [
      "Art Parkinson"
    ]
  },
  {
    "id": 12,
    "name": "Hoster Tully",
    "gender": "Male",
    "culture": "Rivermen",
    "born": "In or between 237 AC and 240 AC",
    "died": "In 299 AC, at Riverrun",
    "titles": [
      "Lord Paramount of the Trident",
      "Lord of Riverrun"
    ],
    "aliases": [],
    "parent": "",
    "children": [13, 10, 15],
    "allegiances": [
      "House Tully of Riverrun"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 13,
    "name": "Lysa Arryn",
    "gender": "Female",
    "culture": "",
    "born": "In 266 AC or 267 AC, at Riverrun",
    "died": "In 300 AC, at the Eyrie",
    "titles": [
      "Lady of the Vale"
    ],
    "aliases": [
      "Lysa Tully"
    ],
    "parent": 12,
    "children": [],
    "allegiances": [
      "House Arryn of the Eyrie",
      "House Baelish of the Fingers",
      "House Tully of Riverrun"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 4"
    ],
    "playedBy": [
      "Kate Dickie"
    ]
  },
  {
    "id": 10,
    "name": "Edmure Tully",
    "gender": "Male",
    "culture": "Rivermen",
    "born": "In or between 267 AC and 274 AC",
    "died": "",
    "titles": [
      "Ser",
      "Lord of Riverrun (lost to Emmon Frey)"
    ],
    "aliases": [],
    "parent": 12,
    "children": [],
    "allegiances": [
      "House Tully of Riverrun"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 3",
      "Season 6"
    ],
    "playedBy": [
      "Tobias Menzies"
    ]
  },
  {
    "id": 15,
    "name": "Catelyn Stark",
    "gender": "Female",
    "culture": "Rivermen",
    "born": "In 264 AC, at Riverrun",
    "died": "In 299 AC, at the Twins",
    "titles": [
      "Lady of Winterfell"
    ],
    "aliases": [
      "Catelyn Tully",
      "Lady Stoneheart",
      "The Silent Sistet",
      "Mother Mercilesr",
      "The Hangwomans"
    ],
    "parent": 12,
    "children": [7, 8, 4, 14, 11],
    "allegiances": [
      "House Stark of Winterfell",
      "House Tully of Riverrun"
    ],
    "books": [
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3"
    ],
    "playedBy": [
      "Michelle Fairley"
    ]
  },
  {
    "id": 6,
    "name": "Lyanna Stark",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 266 AC or 267 AC",
    "died": "In 283 AC, at Tower of Joy",
    "titles": [],
    "aliases": [
      "The She-Wolf",
      "The Wolf Maid",
      "Lya"
    ],
    "parent": 3,
    "children": [],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons",
      "The World of Ice and Fire"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Cordelia Hill"
    ]
  },
  {
    "id": 9,
    "name": "Benjen Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 267 AC or later, at Winterfell",
    "died": "",
    "titles": [
      "First Ranger"
    ],
    "aliases": [
      "The Wolf Pup",
      "Ben Stark"
    ],
    "parent": 3,
    "children": [],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 6"
    ],
    "playedBy": [
      "Joseph Mawle",
      "Matteo Elezi"
    ]
  },
  {
    "id": 3,
    "name": "Rickard Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In or between 230 AC and 249 AC, at Winterfell",
    "died": "In 282 AC, at King's Landing",
    "titles": [
      "Lord of Winterfell",
      "Warden of the North"
    ],
    "aliases": [],
    "parent": "",
    "children": [9, 5, 6, 1],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons",
      "The World of Ice and Fire"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Wayne Foskett"
    ]
  },
  {
    "id": 5,
    "name": "Brandon Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 262 AC, at Winterfell",
    "died": "In 282 AC, at King's Landing",
    "titles": [],
    "aliases": [
      "The Wild Wolf"
    ],
    "parent": 3,
    "children": [],
    "allegiances": [
      "House Stark of Winterfell"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 27,
    "name": "Tywin Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In 242 AC",
    "died": "In 300 AC, at King's Landing",
    "titles": [
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West",
      "Hand of the King",
      "Savior of the City (of King's Landing)"
    ],
    "aliases": [
      "The Lion of Lannister",
      "The Old Lion",
      "The Great Lion of the Rock"
    ],
    "parent": "",
    "children": [24, 17, 21],
    "allegiances": [
      "House Lannister of Casterly Rock"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons",
      "The World of Ice and Fire"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4"
    ],
    "playedBy": [
      "Charles Dance"
    ]
  },
  {
    "id": 24,
    "name": "Cersei Lannister",
    "gender": "Female",
    "culture": "Westerman",
    "born": "In 266 AC, at Casterly Rock",
    "died": "",
    "titles": [
      "Light of the West",
      "Queen Dowager",
      "Protector of the Realm",
      "Lady of Casterly Rock",
      "Queen Regent"
    ],
    "aliases": [
      "Brotherfuckerthe bitch queen"
    ],
    "parent": 27,
    "children": [20, 18, 23],
    "allegiances": [
      "House Lannister of Casterly Rock"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords"
    ],
    "povBooks": [
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Lena Headey"
    ]
  },
  {
    "id": 17,
    "name": "Jaime Lannister",
    "gender": "Male",
    "culture": "Westerlands",
    "born": "In 266 AC, at Casterly Rock",
    "died": "",
    "titles": [
      "Ser",
      "Lord Commander of the Kingsguard",
      "Warden of the East (formerly)"
    ],
    "aliases": [
      "The Kingslayer",
      "The Lion of Lannister",
      "The Young Lion",
      "Cripple"
    ],
    "parent": 27,
    "children": [],
    "allegiances": [
      "House Lannister of Casterly Rock"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings"
    ],
    "povBooks": [
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5"
    ],
    "playedBy": [
      "Nikolaj Coster-Waldau"
    ]
  },
  {
    "id": 21,
    "name": "Tyrion Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In 273 AC, at Casterly Rock",
    "died": "",
    "titles": [
      "Acting Hand of the King (former)",
      "Master of Coin (former)"
    ],
    "aliases": [
      "The Imp",
      "Halfman",
      "The boyman",
      "Giant of Lannister",
      "Lord Tywin's Doom",
      "Lord Tywin's Bane",
      "Yollo",
      "Hugor Hill",
      "No-Nose",
      "Freak",
      "Dwarf"
    ],
    "parent": 27,
    "children": [],
    "allegiances": [
      "House Lannister of Casterly Rock"
    ],
    "books": [
      "A Feast for Crows",
      "The World of Ice and Fire"
    ],
    "povBooks": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Peter Dinklage"
    ]
  },
  {
    "id": 20,
    "name": "Joffrey Baratheon",
    "gender": "Male",
    "culture": "",
    "born": "286 AC, at King's Landing",
    "died": "300 AC, at Red Keep, King's Landing",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    "aliases": [
      "Joffrey the Illborn",
      "The Young Usurper",
      "Aerys the Third",
      "Joffrey-called-Baratheon"
    ],
    "parent": 24,
    "children": [],
    "allegiances": [],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4"
    ],
    "playedBy": [
      "Jack Gleeson"
    ]
  },
  {
    "id": 18,
    "name": "Myrcella Baratheon",
    "gender": "Female",
    "culture": "",
    "born": "In 290 AC, at King's Landing",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [],
    "parent": 24,
    "children": [],
    "allegiances": [
      "House Baratheon of King's Landing"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Aimee Richardson, Nell Tiger Free"
    ]
  },
  {
    "id": 23,
    "name": "Tommen Baratheon",
    "gender": "Male",
    "culture": "",
    "born": "291 AC",
    "died": "",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms"
    ],
    "aliases": [
      "The Boy King"
    ],
    "parent": 24,
    "allegiances": [],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 4",
      "Season 5"
    ],
    "playedBy": [
      "Callum Wharry",
      "Dean-Charles Chapman"
    ]
  },
  {
    "id": 22,
    "name": "Rhaegar Targaryen",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "In 259 AC, at Summerhall",
    "died": "In 283 AC, at the Trident",
    "titles": [
      "Prince of Dragonstone",
      "Ser"
    ],
    "aliases": [
      "Silver Prince",
      "The Dragon Prince",
      "The Last Dragon"
    ],
    "parent": 19,
    "children": [25, 28],
    "allegiances": [
      "House Targaryen of King's Landing"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 25,
    "name": "Rhaenys Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 74 AC",
    "died": "In 129 AC, at Rook's Rest",
    "titles": [
      "Princess"
    ],
    "aliases": [
      "The Queen Who Never Was"
    ],
    "parent": 22,
    "children": [],
    "allegiances": [
      "House Targaryen of King's Landing",
      "House Velaryon of Driftmark"
    ],
    "books": [
      "The Princess and the Queen",
      "The Rogue Prince",
      "The World of Ice and Fire"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 28,
    "name": "Aegon Targaryen",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "In 281 AC or 282 AC, at Dragonstone",
    "died": "In 283 AC (Supposedly), at King's Landing",
    "titles": [],
    "aliases": [
      "Young Griff"
    ],
    "parent": 22,
    "children": [],
    "allegiances": [
      "House Targaryen of King's Landing"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons",
      "The World of Ice and Fire"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 26,
    "name": "Viserys Targaryen",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "In 276 AC, at King's Landing",
    "died": "In 298 AC, at Vaes Dothrak",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men, Lord of the Seven Kingdoms and Protector of the Realm"
    ],
    "aliases": [
      "The Beggar King",
      "Khal Rhaggat (The Cart King)"
    ],
    "parent": 19,
    "children": [],
    "allegiances": [
      "House Targaryen of King's Landing"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons",
      "The World of Ice and Fire"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Harry Lloyd"
    ]
  },
  {
    "id": 30,
    "name": "Daenerys Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 284 AC, at Dragonstone",
    "died": "",
    "titles": [
      "Queen of the Andals and the Rhoynar and the First Men, Lord of the Seven Kingdoms",
      "Khaleesi of the Great Grass Sea",
      "Breaker of Shackles/Chains",
      "Queen of Meereen",
      "Princess of Dragonstone"
    ],
    "aliases": [
      "Dany",
      "Daenerys Stormborn",
      "The Unburnt",
      "Mother of Dragons",
      "Mother",
      "Mhysa",
      "The Silver Queen",
      "Silver Lady",
      "Dragonmother",
      "The Dragon Queen",
      "The Mad King's daughter"
    ],
    "parent": 19,
    "chldren": [],
    "allegiances": [
      "House Targaryen of King's Landing"
    ],
    "books": [
      "A Feast for Crows"
    ],
    "povBooks": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Emilia Clarke"
    ]
  },
  {
    "id": 19,
    "name": "Aerys II",
    "gender": "Male",
    "culture": "",
    "born": "244 AC, at King's Landing",
    "died": "283 AC, at the Red Keep in King's Landing",
    "titles": [
     "King of the Andals, the Rhoynar and the First Men",
     "Lord of the Seven Kingdoms",
     "Protector of the Realm"
     ],
     "aliases": [
       "The Mad King",
       "King Scab"
     ],
     "parent": "",

     "children": [22, 26, 30],
     "allegiances": [],
     "books": [
       "A Game of Thrones",
       "A Clash of Kings",
       "A Storm of Swords",
       "A Feast for Crows",
       "A Dance with Dragons",
       "The World of Ice and Fire"
     ],
     "povBooks": [],
     "tvSeries": [
       "Season 6"
     ],
     "playedBy": [
       "David Rintoul"
     ]
  },
  {
    "id": 31,
    "name": "Quellon Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "",
    "died": "In 283 AC, at the mouth of the Mander",
    "titles": [
      "Lord of the Iron Islands",
      "Lord Reaper of Pyke"
    ],
    "aliases": [],
    "parent": "",
    "children": [35, 39, 37, 38, 40],
    "allegiances": [
      "House Greyjoy of Pyke"
    ],
    "books": [
      "A Feast for Crows",
      "The World of Ice and Fire"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 35,
    "name": "Balon Greyjoy",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "299 AC, at Pyke",
    "titles": [
      "Iron King",
      "King of the Isles and the North",
      "King of Salt and Rock",
      "Son of the Sea Wind",
      "Lord Reaper of Pyke",
      "The Greyjoy",
      "Captain of the Great Kraken"
    ],
    "aliases": [
      "Balon the Brave",
      "Balon the Blessed",
      "Balon the Twice Crowned",
      "Balon the Widowmaker",
      "The Kraken King"
    ],
    "parent": 31,
    "children": [29, 32, 36, 33],
    "allegiances": [],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 2",
      "Season 3",
      "Season 6"
    ],
    "playedBy": [
      "Patrick Malahide"
    ]
  },
  {
    "id": 29,
    "name": "Rodrik Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 274 AC or before",
    "died": "In 289 AC, at Seagard",
    "titles": [],
    "aliases": [],
    "parent": 35,
    "children": [],
    "allegiances": [
      "House Greyjoy of Pyke"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 32,
    "name": "Maron Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 275 AC or before",
    "died": "In 289 AC, at Pyke",
    "titles": [],
    "aliases": [],
    "parent": 35,
    "children": [],
    "allegiances": [
      "House Greyjoy of Pyke"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 36,
    "name": "Asha Greyjoy",
    "gender": "Female",
    "culture": "Ironborn",
    "born": "In 275 AC or 276 AC, at Pyke",
    "died": "",
    "titles": [
      "Princess",
      "Captain of the Black Wind",
      "Conqueror of Deepwood Motte"
    ],
    "aliases": [
      "Esgred",
      "The Kraken's Daughter"
    ],
    "parent": 35,
    "children": [],
    "allegiances": [
      "House Greyjoy of Pyke",
      "House Ironmaker"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings"
    ],
    "povBooks": [
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 2",
      "Season 3",
      "Season 4"
    ],
    "playedBy": [
      "Gemma Whelan"
    ]
  },
  {
    "id": 33,
    "name": "Theon Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 278 AC or 279 AC, at Pyke",
    "died": "",
    "titles": [
      "Prince of Winterfell",
      "Captain of Sea Bitch",
      "Lord of the Iron Islands (by law of the green lands)"
    ],
    "aliases": [
      "Prince of Fools",
      "Theon Turncloak",
      "Reek",
      "Theon Kinslayer"
    ],
    "parent": 35,
    "children": [],
    "allegiances": [
      "House Greyjoy of Pyke"
    ],
    "books": [
      "A Game of Thrones",
      "A Storm of Swords",
      "A Feast for Crows"
    ],
    "povBooks": [
      "A Clash of Kings",
      "A Dance with Dragons"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Alfie Allen"
    ]
  },
  {
    "id": 39,
    "name": "Euron Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "or before 267 AC",
    "died": "",
    "titles": [
      "Iron King",
      "King of the Isles and the North  King of Salt and Rock",
      "Son of the Sea Wind",
      "Lord Reaper of Pyke",
      "Captain of the Silence"
    ],
    "aliases": [
      "Crow's Eye",
      "Euron Crow's Eye"
    ],
    "parent": 31,
    "children": [],
    "allegiances": [],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 37,
    "name": "Victarion Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 268 AC or before, at Pyke",
    "died": "",
    "titles": [
      "Lord Captain of the Iron Fleet",
      "Master of the Iron Victory"
    ],
    "aliases": [
      "The Iron Captain"
    ],
    "parent": 31,
    "children": [],
    "allegiances": [
      "House Greyjoy of Pyke"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords"
    ],
    "povBooks": [
      "A Feast for Crows",
      "A Dance with Dragons"
    ],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 38,
    "name": "Urrigon Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 268 AC or 269 AC",
    "died": "At Pyke",
    "titles": [],
    "aliases": [
      "Urri"
    ],
    "parent": 31,
    "children": [],
    "allegiances": [
      "House Greyjoy of Pyke"
    ],
    "books": [
      "A Feast for Crows"
    ],
    "povBooks": [],
    "tvSeries": [],
    "playedBy": []
  },
  {
    "id": 40,
    "name": "Aeron Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In or between 269 AC and 273 AC, at Pyke",
    "died": "",
    "titles": [
      "Priest of the Drowned God",
      "Captain of the Golden Storm (formerly)"
    ],
    "aliases": [
      "The Damphair",
      "Aeron Damphair"
    ],
    "parent": 31,
    "children": [],
    "allegiances": [
      "House Greyjoy of Pyke"
    ],
    "books": [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Dance with Dragons"
    ],
    "povBooks": [
      "A Feast for Crows"
    ],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Michael Feast"
    ]
  }
]

for(var i = 0; i < data.length; i++) {
  if(data[i].id === 1) {
    console.log(data[i])
  }
}