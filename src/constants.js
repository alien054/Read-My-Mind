const ranks = [
  {value: 0, label: "A"},
  {value: 1, label: "2"},
  {value: 2, label: "3"},
  {value: 3, label: "4"},
  {value: 4, label: "5"},
  {value: 5, label: "6"},
  {value: 6, label: "7"},
  {value: 7, label: "8"},
  {value: 8, label: "9"},
  {value: 9, label: "10"},
  {value: 10, label: "J"},
  {value: 11, label: "Q"},
  {value: 12, label: "K"},
]

const suits = [
  {value: 0, label: "Club", path: './suits/club.png'},
  {value: 1, label: "Diamond", path: './suits/diamond.png'},
  {value: 2, label: "Heart", path: './suits/heart.png'},
  {value: 3, label: "Spade", path: './suits/spade.png'},
]


const initCardsValue = [
  {
    "rank":0,
    "suit":0,
  },
  {
    "rank":0,
    "suit":1,
  },
  {
    "rank":0,
    "suit":2,
  },
  {
    "rank":0,
    "suit":3,
  },
]

const offsetArr = ["012","021","102","120","201","210"]

export {ranks,suits,offsetArr,initCardsValue}