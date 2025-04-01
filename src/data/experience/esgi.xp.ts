import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';
import { TechnosList } from '@constants';


export const esgiXp: Experience = {
  id: 'NBnldqJLl',
  logo: 'https://fazliimam.github.io/images/NICS_2.jpg',
  description: `École Supérieure de Génie Informatique`,
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
  duration: differenceInMonths(new Date(2020, 11, 1), new Date(2021, 6, 1)),
  role: 'Data Scientist',
  links: [{ link: 'https://www.linkedin.com/company/national-intensive-care-surveillance-moru?originalSubdomain=lk', title: `NICST` }],
  location: 'Colombo, Sri Lanka',
};
