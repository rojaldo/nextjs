'use server';

import { Card } from "app/models/card";
import TrivialCard from "../trivial.card.component";

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

  export default async function TrivialPage({ params }: { params: { slug: string } }) {
    const cards = await getData();
    const myFilter = params.slug;
    return ( <>
        <div className="container">
            <div className="row">
                {cards.filter((card: Card) => card.category.toLowerCase().includes(myFilter.toLowerCase())).map((card: Card, index: number) => {
                    return <TrivialCard card={card.getJson()} key={index} />
                })}
            </div>
        </div>
    </> 
    );
}


// function to check if a string contains a substring not case sensitive
function containsSubstring(str: string, substr: string): boolean {
    return str.toLocaleLowerCase().includes(substr.toLocaleLowerCase());
}