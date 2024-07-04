export interface ICard {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    answers: string[];
    answered: boolean;
}

export class Card implements ICard {
    private _type = '';
    private _difficulty = '';
    private _category = '';
    private _question = '';
    private _correctAnswer = '';
    private _incorrectAnswers: string[] = [];
    private _answers: string[] = [];
    private _answered = false;

    constructor(json: any) {
        this._type = json.type;
        this._difficulty = json.difficulty;
        this._category = json.category;
        this._question = json.question;
        this._correctAnswer = json.correct_answer;
        this._incorrectAnswers = json.incorrect_answers;
        this._answers = [...this._incorrectAnswers, this._correctAnswer];
    }

    get type() {
        return this._type;
    }

    get difficulty() {
        return this._difficulty;
    }

    get question() {
        return this._question;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    get incorrectAnswers() {
        return this._incorrectAnswers;
    }

    get answers() {
        return this._answers;
    }

    get category() {
        return this._category;
    }

    get answered() {
        return this._answered;
    }

    set answered(value: boolean) {
        this._answered = value;
    }

    shuffleAnswers() {
        this._answers = this._answers.sort(() => Math.random() - 0.5);
    }

    getJson() {
        return {
            type: this._type,
            difficulty: this._difficulty,
            category: this._category,
            question: this._question,
            correctAnswer: this._correctAnswer,
            incorrectAnswers: this._incorrectAnswers,
            answers: this._answers,
            answered: this._answered
        };
    }
    

    
}