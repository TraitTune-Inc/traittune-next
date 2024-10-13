# TraitTune Web Application - Psychometric Testing Module

TraitTune is a comprehensive platform designed to perform skill audits and psychometric assessments, enhancing team alignment and ensuring project success. It provides data-driven insights that help individuals and organizations assess competencies and predict outcomes for collaborative initiatives. This repository contains **Module 3: Psychometric Testing Module**.

For more details, visit the [TraitTune website](https://traittune.com).

## Project Overview

TraitTune is comprised of five interconnected modules for skill assessment and project evaluation:

### Module 1: Request Generation
A search interface used to generate queries based on specific needs:
- **Self-Assessment**: User-specific queries.
- **Dyadic Analysis**: Queries involving the user and another person.
- **External Analysis**: Scenarios involving third parties and specific projects.

### Module 2: Questionnaire
A dynamic questionnaire that adapts to the generated request. This module also supports document uploads for extracting and integrating relevant data.

### Module 3: Psychometric Testing (Current Module)
This module offers psychometric tests tailored to the data from Modules 1 and 2. It includes an 80-item test using a Likert scale to measure various traits, providing users with a preliminary summary of their results.

### Module 4: Project/Task Analysis
This module evaluates psychometric results against specific project requirements. It includes a detailed project questionnaire and supports document uploads for a comprehensive analysis.

### Module 5: Report Generation
Generates a detailed report synthesizing information from Modules 1-4. The report is generated using the latest ChatGPT API, providing in-depth insights and actionable recommendations.

## Module 3: Psychometric Testing

**Module 3** includes a variety of psychometric assessments, such as an 80-question survey using a Likert scale to measure attitudes and personality traits. The tests are customized based on data gathered from Modules 1 and 2, providing a targeted evaluation. Upon completion, users receive a preliminary report summarizing their results, serving as an intermediate analysis before the final report in Module 5.

## Getting Started

To start the development environment:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser to access the application.

To modify the application, edit `app/page.tsx`. Changes will be automatically reflected upon saving.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize font loading, specifically utilizing the [Geist](https://vercel.com/font) font for visual consistency and performance.

## Deployment

Deploy the application easily using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more detailed instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs) - A comprehensive guide on Next.js features.
- [Interactive Next.js Tutorial](https://nextjs.org/learn) - A hands-on tutorial for learning Next.js.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Explore and contribute to the source code.

## Contributions

We welcome contributions from the community. If you have suggestions or improvements, please feel free to open an issue or submit a pull request. Your insights are invaluable to the continuous development of TraitTune.
