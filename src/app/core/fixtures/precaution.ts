import { Precaution } from '../models/precaution';

export function getPrecautions(): Array<Precaution> {
    return [
        {
            number: 1,
            title: `Wash Your Hands For 20sec`,
            description: `Wash hands often with soap and water for at least 20 seconds.`
        },
        {
            number: 2,
            title: `Cover Nose & Mouth When Sneezing`,
            description: `Cover coughs and sneezes with tissues.`
        },
        {
            number: 3,
            title: `Use Sanitizer`,
            description: `Use hand sanitizer if soap and water are not available.`
        },
        {
            number: 4,
            title: ` Avoid Crowded Places (Social Distancing)`,
            description: `Take everyday precautions to keep space between yourself and others
             (stay 6 feet away, which is about two arm lengths). Avoiding
              public spaces and unnecessary social gatherings, especially events with large numbers
              of people or crowds, will lower the chance that you will be exposed to the coronavirus
              as well as to other infectious diseases like flu.`
        },
        {
            number: 5,
            title: `Avoid Contact With Sick People`,
            description: `Avoid close contact with anyone showing symptoms of respiratory illness.`
        },

    ];
}


