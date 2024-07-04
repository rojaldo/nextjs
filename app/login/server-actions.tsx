'use server'

import { redirect } from "next/navigation";
import { getCookie, setCookie } from 'cookies-next'


// signIn es una función de autenticación que verifica las credenciales del usuario

export async function myauth(formData: FormData): Promise<void> {

    console.log('formData', formData.get('email'), formData.get('password'));
    
    try {
        signIn('credentials', formData)
    } catch (error) {
        if (error) {
            redirect('/login?error=Invalid credentials')
        }else {
            redirect('/login?error=Error')
        }
    }
    setCookie('session', 'SuccessToken', {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    redirect('/home')

}

function signIn(_type: string, formData: FormData): string{

    if (formData.get('email') === 'uno@cualquiera.com' && formData.get('password') === '1234') {
        return 'SuccessToken';
    } else {
        throw new Error('Invalid credentials');
    }

}