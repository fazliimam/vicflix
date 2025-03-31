import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const maltXp: Experience = {
  id: 'mbzuai',
  logo: 'https://library.mbzuai.ac.ae/sites/default/files/stacks_style_editor/img/logo/Crop%20image%20project-3.png',
  description: ``,
  title: 'MBZUAI',
  technos: [TechnosList.Vue, TechnosList.Typescript, TechnosList.Jest],
  year: 2024,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(), new Date(2024, 7, 1)) + 1,
  currentPosition: true,
  role: 'Machine Learning Researcher',
  links: [{ link: 'https://fazliimam.github.io/', title: 'Site MBZUAI' }],
  location: 'Abu Dhabi, UAE',
};
