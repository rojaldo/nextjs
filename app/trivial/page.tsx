'use server';

import { Card } from "app/models/card";
import TrivialCard from "./trivial.card.component";

async function getData(): Promise<Card[]> {
    const apiUrl = `https://opentdb.com/api.php?amount=10`;
    let data: any = {};
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('No se pudo obtener las preguntas del Trivial');
        }
        data = await response.json();
      } catch (error: any) {
        console.error('Error al obtener los datos del API Trivial:', error.message);
      }
        return data.results.map((card: any) => new Card(card));
  }

  export default async function TrivialPage() {
    const cards = await getData();
    return ( <>
        <div className="container">
            <div className="row">
                {cards.map((card: Card) => {
                    return <TrivialCard card={card.getJson()} key={card.question} />
                })}
            </div>
        </div>
    </> 
    );
}
