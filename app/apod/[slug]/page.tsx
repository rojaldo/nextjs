import { Apod, IApod } from "app/models/apod";
import { param } from "node_modules/cypress/types/jquery";
import ApodComponent from "../apod";
import { redirect } from 'next/navigation'

async function getData(date: string): Promise<IApod> {
    console.log(date);

    const API_KEY = 'DEMO_KEY'; // Reemplaza con tu API key de la NASA
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
    let data: any = {};
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener la imagen del día');
        }
        data = await response.json();
    } catch (error: any) {
        console.error('Error al obtener los datos del API APOD:', error.message);
        redirect('/apod');
    }
    return new Apod(data);
}

export default async function Page({ params }: { params: { slug: string } }) {
    const apod = await getData(params.slug)
    const myApod: IApod = { title: apod.title, date: apod.date, explanation: apod.explanation, url: apod.url, hdurl: apod.hdurl, mediaType: apod.mediaType, serviceVersion: apod.serviceVersion, isVideo: apod.isVideo, isImage: apod.isImage, videoId: apod.videoId };

    return <>
        <div className="container">
            <ApodComponent apod={myApod} />
        </div>
    </>
}