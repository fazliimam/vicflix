import { TechnosList } from '@constants';
import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const oceXp: Experience = {
  id: 'OnqllpoI',
  logo: 'https://k2-prod-alm.s3.us-east-1.amazonaws.com/brightspot/52/24/cdc7ec5a4f588909b17bd978939c/stax-master-frame-2.png',
  description: `
  • Conducted due diligence for private equity firms, evaluating the potential of investments through data-driven insights and market analysis to support strategic decision-making.
  • Engineered data pipelines to scrape reviews and listings from major websites, providing a comprehensive analysis of the client’s market, competitors, and consumer sentiment, facilitating actionable business intelligence.
  • Synthesized insights from diverse data sources, including web scraping and surveys, to deliver strategic recommendations that helped clients make informed investment decisions.`
 ,
  title: 'Stax Inc',
  technos: [
    TechnosList.Python,
    TechnosList.Pytorch,
    TechnosList.SKlearn,
    TechnosList.Tensorflow,
    TechnosList.Numpy,
    TechnosList.Pandas,
    TechnosList.Selenium,
    TechnosList.Beautifulsoup,
    TechnosList.Excel,
    TechnosList.Powerpoint,
  ],
  year: 2022,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(2021, 7, 1), new Date(2022, 7, 1))+ 1,
  role: 'Data Scientist',
  // links: [{ link: 'https://www.stax.com/colombo', title: 'Stax' }],
  location: 'Colombo, Sri Lanka, France',
};
