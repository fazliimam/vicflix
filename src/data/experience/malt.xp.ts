import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const maltXp: Experience = {
  id: 'mbzuai',
  // logo: 'https://mbzuai.ac.ae/wp-content/uploads/2022/07/image-31.svg',
  logo: 'https://i0.wp.com/www.al-fanarmedia.org/wp-content/uploads/2023/09/Muhammad-Bin-Zaid-University-Postgraduate-Study-Scholarships-in-the-UAE.png?fit=530%2C400&ssl=1',
  description: `
  • Led research initiatives on multimodality and visual-temporal reasoning in vision-language models.
  • Developed and deployed a novel evaluation dataset to benchmark the performance of vision-language models in visual-temporal reasoning.
  • Collaborated with external research groups and interdisciplinary teams to advance research on vision-language models.`,

  title: 'Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)',
  technos: [TechnosList.Python, TechnosList.Pytorch, TechnosList.Tensorflow, TechnosList.SKlearn, TechnosList.Scholar],
  year: 2024,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(), new Date(2024, 7, 1)) + 1,
  currentPosition: true,
  role: 'Machine Learning Researcher',
  links: [{ link: 'https://fazliimam.github.io/', title: 'Site MBZUAI' }],
  location: 'Abu Dhabi, UAE',
};
