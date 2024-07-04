'use client';

import { Card, ICard } from "app/models/card";
import { set } from "node_modules/cypress/types/lodash";
import { useState } from "react";


interface CardProps {
    card: ICard;
  }

const TrivialCard: React.FC<CardProps> = ({ card }) =>  {

    const [cardData, setCardData] = useState<ICard>(card);

    const [buttonClass, setButtonClass] = useState<string[]>(['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary']);
    
    const checkAnswer = (answer: string, index: number) => {
        setCardData({
            ...cardData,
            answered: true
        });

        // set all classes to secondary
        let myArray = buttonClass;
        for (let i = 0; i < myArray.length; i++) {
            myArray[i] = 'btn btn-secondary';
        }

        for (let i = 0; i < cardData.answers.length; i++) {
            if (cardData.answers[i] === answer) {
                myArray[i] = 'btn btn-danger';
            }
            if (cardData.answers[i] === cardData.correctAnswer) {
                myArray[i] = 'btn btn-success';
            } 
        }

        setButtonClass(myArray);
        
    }
    
    return ( 
        <div className="col-md-4" key={cardData.question}>
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{cardData.category}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title pricing-card-title">{cardData.question}</h5>

                <div className="d-grid gap-2">
                    {cardData.answers.map((answer: string, index: number) => {
                        return <button
                            type="button"
                            className={buttonClass[index]}
                            onClick={() => {checkAnswer(answer, index)}}
                            disabled={cardData.answered}
                        >
                            {answer}
                        </button>
                        
                    })}
                </div>
            </div>
        </div>
    </div>
     );
}

export default TrivialCard;