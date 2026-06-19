# Academic Portfolio Data Schema

## Use Case
Template data structure for a researcher/academic portfolio site. Covers publications, patents, projects, education, experience, and stats.

## Data Model
```typescript
export const profile = {
  fullName: string,
  title: string,
  department: string,
  institution: string,
  email: string,
  industryEmail: string,
  phone: string,
  address: string,
  image: string,           // hero photo path
  bio: string,
  orcid: string,
  googleScholar: string,
  youtube: string,
  linkedin: string,
  alumniNetwork: string,

  stats: {
    papers: number,
    patents: number,
    bookChapters: number,
    phdStudents: number,
    projectsGuided: number,
    studentsGuided: number,
    fundedProjects: number,
    citations: number,
    hIndex: number,
    i10Index: number,
    cumulativeImpactFactor: number,
  },

  researchAreas: Array<{
    title: string,
    description: string,
    icon: string,       // key into icon map
  }>,

  experience: Array<{
    period: string,
    role: string,
    employer: string,
    location: string,
    description?: string,
  }>,

  education: Array<{
    degree: string,
    university: string,
    year: string,
    details?: string,
    thesis?: string,
    supervisor?: string,
  }>,

  fullPublications: Array<{
    num: number,
    year: number,
    title: string,
    journal: string,
    doi?: string,
    q?: 'Q1' | 'Q2' | 'Q3' | 'Q4',
  }>,

  guidedProjects: Array<{
    title: string,
    period: string,
    students: string,
    level: string,
  }>,

  patents: Array<{
    title: string,
    applicationNumber: string,
    status: 'Granted' | 'Published' | 'Filed',
    date: string,
    certificateImage?: string,
  }>,

  memberships: string[],
};
```

## Key Patterns
- `fullPublications` = journal papers only; `stats.papers` = total (incl. conference papers)
- `guidedProjects` grouped by decade in UI (`period.match(/^(\d{4})/)`)
- Patents status mapped to color badges: Granted=emerald, Published=amber, Filed=stone
- Q-ratings colored: Q1=green, Q2=blue, Q3=amber, Q4=stone
