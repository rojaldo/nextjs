'use client';

import { Card, ICard } from "app/models/card";


interface CardProps {
    card: ICard;
  }

const TrivialCard: React.FC<CardProps> = ({ card }) =>  {
    
    const checkAnswer = (value: any) => {

    }
    
    return ( 
        <div className="col-md-4" key={card.question}>
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{card.category}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title pricing-card-title">{card.question}</h5>

                <div className="d-grid gap-2">
                    {card.answers.map((answer: string) => {
                        return <button
                            type="button"
                            className="btn btn-primary"
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