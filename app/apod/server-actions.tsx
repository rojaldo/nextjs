// server-actions.tsx
'use server'

export async function create() {
  // ...
}

export async function update() {
  // ...
}

export async function remove() {
  // ...
}

export async function getApod(date?: string) {
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
      }
        return data;
}