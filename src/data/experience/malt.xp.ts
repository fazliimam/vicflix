import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const maltXp: Experience = {
  id: 'aldhalhd',
  logo: 'https://fazliimam.github.io/images/mbzuai.png',
  description: ``,
  title: 'MBZUAI',
  technos: [TechnosList.Vue, TechnosList.Typescript, TechnosList.Jest],
  year: 2024,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(), new Date(2024, 07, 01)) + 1,
  currentPosition: true,
  role: 'Machine Learning Researcher',
  links: [{ link: 'https://https//mbzuai.ac.ae/', title: 'Site de Malt' }],
  location: 'Abu Dhabi, UAE',
};
