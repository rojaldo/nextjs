import { NextApiRequest, NextApiResponse } from 'next';
import { Apod, IApod } from '../models/apod';
import ApodComponent from './apod';

async function getData(): Promise<IApod> {
    const API_KEY = 'DEMO_KEY'; // Reemplaza con tu API key de la NASA
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    let data: any = {};
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('No se pudo obtener la imagen del día');
        }
        data = await response.json();
      } catch (error: any) {
        console.error('Error al obtener los datos del API APOD:', error.message);
      }
        return new Apod(data);
  }

  
  export default async function Page() {
    const apod = await getData()
    let myApod: IApod = { title: apod.title, date: apod.date, explanation: apod.explanation, url: apod.url, hdurl: apod.hdurl, mediaType: apod.mediaType, serviceVersion: apod.serviceVersion, isVideo: apod.isVideo, isImage: apod.isImage, videoId: apod.videoId };
  
    return <main>
        

        <div
            className="container"
        >
            <ApodComponent apod={myApod}/>

            
        </div>
    </main>
  }