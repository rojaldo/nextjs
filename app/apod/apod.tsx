'use client';

import { useEffect, useState } from "react";
import Image from 'next/image'

import {getApod } from "./server-actions";
import { IApod } from "../models/apod";

interface ApodProps {
    apod: IApod;
  }

const ApodComponent: React.FC<ApodProps> = ({ apod }) =>  {
    
    const [apodData, setApodData] = useState(apod);

    // log date from input
    const fetchApod = (value: any) => {
        console.log(value.target.value)
        getApod(value.target.value).then((data: any) => {
            console.log(data)
            setApodData(data)
        }
        )
    }

    let media = <></>
    if (apodData.mediaType === 'video') {
        media = <p>is video</p>
    } else if (apodData.mediaType === 'image') {
        media = <img src={apodData.url} alt={apodData.title} className="img-fluid" />
    }

    
    return ( 
        <section>
            <button
                type="button"
                className="btn btn-primary"
            >
                Button
            </button>
            
            <input type="date" onChange={(value)=>{fetchApod(value)} } />
            <div className="row align-items-md-stretch">
                <div className="col-md-12">
                    <div
                        className="h-100 p-5 text-black bg-light border rounded-3"
                    >
                        <h2>{apodData.title}</h2>
                        <Image
                            src={apodData.url}
                            alt={apodData.title}
                            width={500}
                            height={500}
                        ></Image>
                        <p>
                            {apodData.explanation}
                        </p>
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                        >
                            HD image
                        </button>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ApodComponent;

