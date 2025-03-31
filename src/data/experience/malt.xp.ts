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
  year: 2021,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(), new Date(2021, 11, 15)) + 1,
  currentPosition: true,
  role: 'Front-end engineer',
  links: [{ link: 'https://malt.com', title: 'Site de Malt' }],
  location: 'Paris, France',
};
