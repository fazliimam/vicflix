import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';
import { TechnosList } from '@constants';


export const esgiXp: Experience = {
  id: 'NBnldqJLl',
  logo: 'https://fazliimam.github.io/images/NICS_2.jpg',
  description: `
  • Led exploratory data analysis and data transformation initiatives, preparing clinical trial datasets for analysis to support evidence-based decision-making in healthcare.
  • Engineered automation scripts to optimize the data mapping process across various systems and formats, enhancing data integration and streamlining workflows.`,
  title: 'National Intensive Care Surveillance Unit (NICST)',
  year: 2021,
  technos: [
    TechnosList.Python,
    TechnosList.SKlearn,
    TechnosList.Tensorflow,
    TechnosList.Numpy,
    TechnosList.Pandas
  ],
  type: ExperienceType.Studies,
  duration: differenceInMonths(new Date(2021, 6, 1), new Date(2020, 11, 1)),
  role: 'Data Scientist',
  // links: [{ link: 'https://www.linkedin.com/company/national-intensive-care-surveillance-moru?originalSubdomain=lk', title: `NICST` }],
  location: 'Colombo, Sri Lanka',
};
