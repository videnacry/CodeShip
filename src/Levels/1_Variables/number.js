import {getBlueCode, getWhiteboneCode, getLightblueCode, getCyanCode} from '../codeSpans'

export const codeObjs = [
    {
        code: [
            getBlueCode('let'), getLightblueCode('fastReadingPracticeMinutes'), '=', getWhiteboneCode('20')
        ]
    }, {
        code: [
            getBlueCode('const'), getLightblueCode('fourPlusThree'), '=', getWhiteboneCode('4 + 3')
        ]
    }, {
        code: [
            getBlueCode('const'), getLightblueCode('nineLessTwo'), '=', getWhiteboneCode('9 - 2')
        ]
    }, {
        code: [
            getBlueCode('const'), getLightblueCode('percentageOfEmpaty'), '=', getWhiteboneCode('100')
        ]
    }, {
        code: [
            getBlueCode('var'), getLightblueCode('ponderingHours'), '=', getWhiteboneCode('2')
        ]
    }
]

export const text = {
    english: {
        title: 'Number',
        phrase: 'Quantity can be found in our minds to the point to tell to us how much love is correct',
        intro: 'Lets collect some numbers, in no time we would be making operations with them!',
        steps: [
            'Approach the spaceship to a number until the code button (<>) appears, then click it!',
            'Drag and drop the code elements in correct order to create a number variable.'
        ],
        code: [
            <>{getBlueCode('const')}&nbsp;{getLightblueCode('weekDays')}&nbsp;=&nbsp;{getWhiteboneCode('7')}</>,
            <>{getBlueCode('let')}&nbsp;{getCyanCode('meditationHours')}&nbsp;=&nbsp;{getWhiteboneCode('1')}</>,
            <>{getBlueCode('var')}&nbsp;{getCyanCode('studyTechnicsPracticeMinutes')}&nbsp;=&nbsp;{getWhiteboneCode('30')}</>
        ]
    },
    spanish: {
        title: 'Números',
        phrase: 'La cantidad puede ser encontrada en nuestras mentes al punto de decirnos cuanto amor es correcto.',
        intro: 'Recolectemos algunos números, dentro de nada realizaremos operaciones con ellos.',
        steps: [
            'Acerca la nave espacial a un número hasta que el botón de código (<>) aparezca, luego haz clic en él.',
            'Arrastra los elementos de código hasta dejarlos en un orden correcto para crear una variable numérica.'
        ],
        code: [
            <>{getBlueCode('const')}&nbsp;{getLightblueCode('diasSemanales')}&nbsp;=&nbsp;{getWhiteboneCode('7')}</>,
            <>{getBlueCode('let')}&nbsp;{getCyanCode('horasIntrospectivas')}&nbsp;=&nbsp;{getWhiteboneCode('1')}</>,
            <>{getBlueCode('var')}&nbsp;{getCyanCode('minutosPracticaTecnicasEstudio')}&nbsp;=&nbsp;{getWhiteboneCode('30')}</>
        ]
    }
}