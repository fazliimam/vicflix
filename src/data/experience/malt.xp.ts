import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const maltXp: Experience = {
  id: 'mbzuai',
  logo: 'https://fazliimam.github.io/images/mbzuai.png',
  description: ``,
  title: 'MBZUAI',
  technos: [TechnosList.Python, TechnosList.Pytorch, TechnosList.Tensorflow, TechnosList.Scholar],
  year: 2024,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(), new Date(2024, 7, 1)) + 1,
  currentPosition: true,
  role: 'Machine Learning Researcher',
  links: [{ link: 'https://fazliimam.github.io/', title: 'MBZUAI' }],
  location: 'Abu Dhabi, UAE',
};
