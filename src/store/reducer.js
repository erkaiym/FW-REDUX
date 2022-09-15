import { 
    ADD_QUESTION,
    GET_QUESTIONS
  } from './actions';
  
  const initialState = {
    questions: [
        {id: 1,
            question: 'Какой город является столицей Кыргызстана?',
            answers: [
                {
                   answer: 'ОШ',
                   correct: false
                },
                {
                    answer: 'Наарын',
                    correct: false
                },
                {
                    answer: 'Каракол',
                    correct: false
                },
                {
                    answer: 'Бишкек',
                    correct: true 
                }
            ]

        },
        {id: 2,
            question: "Какая птица изображена на гербе Кыргызстана?",
            multiple:true,
            answers: [
                {
                    answer: "Орёл",
                    correct: true
                 },
                 {
                     answer: "Сокол",
                     correct: false
                 },
                 {
                     answer: "Голубь",
                     correct: false
                 },
                 {
                     answer: "Ястреб",
                     correct: false
                 }
            ]

        },
        {id: 3,
            question: "С какими государствами Кыргызстан граничит?",
            answers: [
                {
                    answer: "С Китаем",
                    correct: true
                 },
                 {
                     answer: "С Америкой ",
                     correct: false
                 },
                 {
                     answer: "С Узбекистаном",
                     correct: false
                 },
                 {
                     answer: "С Казахстаном",
                     correct: true 
                 }
            ]

        },
        {id: 4,
            question: "В каком году Кыргызстан получил независимость от СССР?",
            answers: [
                {
                    answer: "1990",
                    correct: false
                 },
                 {
                     answer: "2001",
                     correct: false
                 },
                 {
                     answer: "1993",
                     correct: false
                 },
                 {
                     answer: "1991",
                     correct: true 
                 }
            ]

        },
        {id: 5,
            question: "Какой язык является государственным языком Кыргызстана?",
            answers: [
                {
                    answer: "Китайский",
                    correct: false
                 },
                 {
                     answer: "Таджикский",
                     correct: false
                 },
                 {
                     answer: "Английский",
                     correct: false
                 },
                 {
                     answer: "Кыргызский",
                     correct: true 
                 }
            ]

        },
        {id: 6,
            question: "Какой тип климата характерен для Киргизии?",
            answers: [
                {
                    answer: "Влажный",
                    correct: false
                 },
                 {
                     answer: "Умеренный",
                     correct: false
                 },
                 {
                     answer:  "Морской",
                     correct: false
                 },
                 {
                     answer: "Континентальный",
                     correct: true 
                 }
            ]

        },
        {id: 7,
            question: "Как зовут президента Кыргызстана вступившего в должность с 1 декабря 2011 года?",
            answers: [
                {
                    answer: "Асылбек Жээнбеков",
                    correct: false
                 },
                 {
                     answer: "Сооронбай Жеенбеков",
                     correct: false
                 },
                 {
                     answer: "Темир Сариев",
                     correct: false
                 },
                 {
                     answer: "Алмазбек Атамбаев",
                     correct: true 
                 }
            ]

        },
        {id: 8,
            question: "Какой народ исторически проживал на территории Киргизии?",
            answers: [
                {
                    answer: "Китайцы",
                    correct: false
                 },
                 {
                     answer: "Сасаниды",
                     correct: false
                 },
                 {
                     answer: "Скифы",
                     correct: false
                 },
                 {
                     answer: "Гунны",
                     correct: true 
                 }
            ]

        },
        {id: 9,
            question: "В каком году была принята новая конституция Киргизии?",
            multiple:true,
            answers: [
                {
                    answer: "В 1290",
                    correct: false
                 },
                 {
                     answer: "В 1991 г.",
                     correct: true
                 },
                 {
                     answer: "В 1993 г.",
                     correct: false
                 },
                 {
                     answer: "В 1997 г.",
                     correct: false 
                 }
            ]

        },
        {id: 10,
            question: "Какие два цвета присутствуют на флаге Киргизии?",
            answers: [
                {
                    answer: "Красный и белый",
                    correct: false
                 },
                 {
                     answer: "Синий и жёлтыйl",
                     correct: false
                 },
                 {
                     answer: "Красный и фиолетовыйy",
                     correct: false
                 },
                 {
                     answer: "Красный и жёлтый",
                     correct: true 
                 }
            ]

        }
    ]
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_QUESTIONS: 
        return {
          ...state,
        }

      case ADD_QUESTION: 
        return {
          ...state,
          questions: [...state.questions, action.payloaanswer] 
        }
      default:
        return state;
    }
  }