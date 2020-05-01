import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    /** Default News collection. */
    const news: News[] = [{
      id: 1,
      title: 'FDA allows emergency use of drug for coronavirus',
      description: `US regulators on Friday allowed emergency use of an experimental 
      drug that appears to help some coronavirus patients recover faster.`,
      summary: `The Food and Drug Administration acted after preliminary results from a government-sponsored study showed that Gilead Sciences's remdesivir shortened the time to recovery by 31 per cent, or about four days on average, for hospitalized COVID-19 patients.
      The study of 1,063 patients is the largest and most strict test of the drug and included a comparison group that received just usual care so remdesivir's effects could be rigorously evaluated.
      `,
      fullNews: `US regulators on Friday allowed emergency use of an experimental drug that appears to help some coronavirus patients recover faster.

      It is the first drug shown to help fight COVID-19, which has killed more than 230,000 people worldwide.
      The Food and Drug Administration acted after preliminary results from a government-sponsored study showed that Gilead Sciences's remdesivir shortened the time to recovery by 31 per cent, or about four days on average, for hospitalized COVID-19 patients.
      The study of 1,063 patients is the largest and most strict test of the drug and included a comparison group that received just usual care so remdesivir's effects could be rigorously evaluated.
      President Donald Trump announced the FDA's action at the White House.
      Those given the drug were able to leave the hospital in 11 days on average versus 15 days for the comparison group.
      The drug also might be reducing deaths, although that's not certain from the partial results revealed so far.
      The National Institutes of Health's Anthony Fauci said the drug would become a new standard of care for severely ill COVID-19 patients like those in this study.
      The drug has not been tested on people with milder illness, and currently is given through an IV in a hospital.
      Gilead has said it would donate its currently available stock of the drug and is ramping up production to make more.
      No drugs are approved now for treating the coronavirus, and remdesivir will still need formal approval.
      The FDA previously gave emergency use authorization to a malaria drug, hydroxychloroquine, after President Donald Trump repeatedly promoted it as a possible treatment for COVID-19.
      No large high-quality studies have shown the `
    }, {
      id: 2,
      title: `WHO convenes manufacturers, regulatory authorities meet on COVID-19 vaccines`,
      description: `New Delhi - Gearing up for the much needed COVID-19 vaccines, the World Health Organization today organized a meeting of vaccine manufacturers and national regulatory authorities from its South-East Asia Region.`,
      summary: `"The manufacturing capacity that exists in our Region is of the quality and scale required to produce and roll-out a COVID-19 vaccine globally. This Region is a vaccine manufacturing powerhouse, and it must now also play a lead role in overcoming the ongoing pandemic,” said Dr Poonam Khetrapal Singh, Regional Director, WHO South-East Asia.`,
      fullNews: `SEAR/PR/1731

      New Delhi - Gearing up for the much needed COVID-19 vaccines, the World Health Organization today organized a meeting of vaccine manufacturers and national regulatory authorities from its South-East Asia Region.

      "The manufacturing capacity that exists in our Region is of the quality and scale required to produce and roll-out a COVID-19 vaccine globally. This Region is a vaccine manufacturing powerhouse, and it must now also play a lead role in overcoming the ongoing pandemic,” said Dr Poonam Khetrapal Singh, Regional Director, WHO South-East Asia.

      At the virtual meeting, leading manufacturers from India, Indonesia and Thailand discussed timelines and production capacity, while regulatory bodies deliberated on adjustments that would be needed in processes to make COVID-19 vaccines available at the earliest.

      Several steps must be completed before COVID-19 vaccine can be used on a large scale. These include pre-clinical and clinical trials, production, licensure, deployment of vaccines and plans for post-marketing surveillance.

      Mapping the full landscape of vaccine development activities in the Region will help coordination with global stakeholders, and support countries preparing COVID19 vaccine deployment plans, she said.

      Globally, WHO has mobilized a broad coalition of scientists, researchers and industry partners to develop and evaluate candidate vaccines for COVID-19. More than 120 potential vaccine candidates have been proposed globally, and WHO continues to track their type and progress.  Seven candidate vaccines are already in clinical evaluation and 82 vaccines are in pre-clinical evaluation.

      Last week, WHO launched the Access to COVID-19 Tools Accelerator, which brings together key global health actors, private sector partners and other stakeholders to accelerate the development and production of COVID-19 essential health technologies, including vaccines, and to help guarantee equitable access. 
      The launch of the initiative comes in the wake of a UN General Assembly resolution through which Member States called for all countries to have “equitable, efficient and timely” access to any future vaccines developed to fight COVID-19.

      Dr Khetrapal Singh said, “All countries are now preparing to safely transition towards a ‘new normal’ in which social and economic life can function amid low or no COVID-19 transmission. As countries continue to assess and minimize risks, they are very much aware that we are in this together and must get through it together – that no country is safe until we all are safe, for which an effective vaccine that is accessible to all is needed.”

      “We are also working to ensure that, once developed, safe and effective COVID-19 vaccines are available to all of humanity. To do that, we are coordinating expert consultations, developing target product profiles and supporting clinical trials. For the Region and for the world, WHO is committed to facilitating and coordinating your efforts,” the Regional Director said.

      India, Indonesia and Thailand are among the world’s largest vaccine manufacturers.  Every day, millions of people of all ages are provided life-saving protection by vaccines produced in these three countries      “As we mark World Immunization Week, we must build on our success and redouble our efforts to ensure all people in the Region can access the life-saving benefits vaccines bring.  Yes, the COVID-19 pandemic is a unique challenge. But I am certain that through collaboration and innovation we can produce a vaccine faster than ever before, while maintaining all standards,” Dr Khetrapal Singh said.`
    }];
    const users: User[] = [
      {
        username: 'admin',
        password: 'admin'
      }
    ]
    return { news, users };
  }
}



