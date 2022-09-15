import { 
    ADD_QUESTION,
    GET_QUESTIONS
  } from './actions';
  
  const initialState = {
    questions: [
        {id: 1,
            question: 'In which continent are Chile, Argentina and Brazil?',
            answers: [
                {
                   answer: 'North America',
                   correct: false
                },
                {
                    answer: 'Europe',
                    correct: false
                },
                {
                    answer: 'Australasia',
                    correct: false
                },
                {
                    answer: 'South America',
                    correct: true 
                }
            ]

        },
        {id: 2,
            question: "Which brand of soup featured in one of Andy Warhol’s most famous pop art pieces?",
            multiple:true,
            answers: [
                {
                    answer: "Heinz",
                    correct: true
                 },
                 {
                     answer: "Knorr",
                     correct: false
                 },
                 {
                     answer: "Baxters",
                     correct: false
                 },
                 {
                     answer: "Campbell’s",
                     correct: true 
                 }
            ]

        },
        {id: 3,
            question: "The Mad Hatter and the Cheshire Cat are characters in which famous book?",
            answers: [
                {
                    answer: "Winne-the-Pooh",
                    correct: false
                 },
                 {
                     answer: "Charlotte's Web",
                     correct: false
                 },
                 {
                     answer: "Charlie and the Chocolate Factory",
                     correct: false
                 },
                 {
                     answer: "Alice in Wonderland",
                     correct: true 
                 }
            ]

        },
        {id: 4,
            question: "The Statue of Liberty was a gift to the United States from which European country?",
            answers: [
                {
                    answer: "Belgium",
                    correct: false
                 },
                 {
                     answer: "Germany",
                     correct: false
                 },
                 {
                     answer: "Spain",
                     correct: false
                 },
                 {
                     answer: "France",
                     correct: true 
                 }
            ]

        },
        {id: 5,
            question: "Which traditional Spanish dance originated in Andalusia and is recognised by UNESCO as a heritage of humanity?",
            answers: [
                {
                    answer: "Sardana",
                    correct: false
                 },
                 {
                     answer: "Paso Doble",
                     correct: false
                 },
                 {
                     answer: "Tango",
                     correct: false
                 },
                 {
                     answer: "Flamenco",
                     correct: true 
                 }
            ]

        },
        {id: 6,
            question: "Which artist famously cut off his own ear?",
            answers: [
                {
                    answer: "Pablo Picasso",
                    correct: false
                 },
                 {
                     answer: "Salvador Dali",
                     correct: false
                 },
                 {
                     answer:  "Claude Monet",
                     correct: false
                 },
                 {
                     answer: "Vincent Van Gogh",
                     correct: true 
                 }
            ]

        },
        {id: 7,
            question: "Which Danish-Norwegian band released the hit song ‘Barbie Girl’ in 1997?",
            answers: [
                {
                    answer: "ABBA",
                    correct: false
                 },
                 {
                     answer: "Vanilla Ice",
                     correct: false
                 },
                 {
                     answer: "Bjork",
                     correct: false
                 },
                 {
                     answer: "Aqua",
                     correct: true 
                 }
            ]

        },
        {id: 8,
            question: "Which composer scored 2000s classics such as Gladiator, Hannibal, Madagascar and Black Hawk Down?",
            answers: [
                {
                    answer: "John Williams",
                    correct: false
                 },
                 {
                     answer: "Danny Elfman",
                     correct: false
                 },
                 {
                     answer: "James Horner",
                     correct: false
                 },
                 {
                     answer: "Hans Zimmer",
                     correct: true 
                 }
            ]

        },
        {id: 9,
            question: "What other country, besides the US, uses the US dollar as its official currency?",
            multiple:true,
            answers: [
                {
                    answer: "United Kingdom",
                    correct: false
                 },
                 {
                     answer: "Mexico",
                     correct: true
                 },
                 {
                     answer: "Canada",
                     correct: false
                 },
                 {
                     answer: "Ecuador",
                     correct: true 
                 }
            ]

        },
        {id: 10,
            question: "In which city were the 1992 Summer Olympics held?",
            answers: [
                {
                    answer: "Atlanta",
                    correct: false
                 },
                 {
                     answer: "Seoul",
                     correct: false
                 },
                 {
                     answer: "Sydney",
                     correct: false
                 },
                 {
                     answer: "Barcelona",
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