import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const totemXp: Experience = {
  id: 'jzfjYGK',
  logo: 'https://download.logo.wine/logo/Abu_Dhabi_National_Oil_Company/Abu_Dhabi_National_Oil_Company-Logo.wine.png',
  description: `
  • Led exploratory data analysis and implemented a time series forecasting model to predict dynamic flow rates for gas crackers, optimizing operational decision-making and process efficiency.
  • Engineered and deployed an NLP-based Q&A system for drilling reports, leveraging LLM model APIs to extract actionable insights and deliver precise, context-driven answers to improve data accessibility and decision support.`,
  title: 'Abu Dhabi National Oil Company (ADNOC) - Panorama Department',
  technos: [
    TechnosList.Python,
    TechnosList.Pytorch
  ],
  year: 2024,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(2024, 6, 1), new Date(2024, 8, 1)),
  role: 'Data Science Intern',
  links: [{ link: 'https://github.com/fazlicodes/ADNOC_NLP_QuestionAndAnswering_System', title: 'Internship Project' }],
  location: 'Abu Dhabi, UAE',
};
