export const roadmapYears = [
  {
    id: 'before', title: 'Before / Starting B.Tech', timing: 'Build your foundations', accent: 'violet',
    description: 'Get comfortable with your computer and take your first steps writing and saving code.',
    topics: ['Computer basics', 'Try one programming language', 'Set up VS Code', 'Learn Git and GitHub basics', 'Create a simple LinkedIn profile'],
    resourceIds: ['vscode', 'git', 'github', 'linkedin'],
  },
  {
    id: 'year-1', title: '1st Year', timing: 'Explore and experiment', accent: 'blue',
    description: 'Build programming confidence, solve small problems, and make your first projects.',
    topics: ['Programming fundamentals', 'Problem solving basics', 'Git and GitHub workflow', 'Basic web development', 'Small personal projects'],
    resourceIds: ['hackerrank', 'geeksforgeeks', 'github', 'vscode'],
  },
  {
    id: 'year-2', title: '2nd Year', timing: 'Strengthen core skills', accent: 'cyan',
    description: 'Connect computer science fundamentals with development and collaboration.',
    topics: ['Data structures and algorithms', 'OOP and DBMS', 'Choose a development direction', 'Build and document projects', 'Try hackathons and open source'],
    resourceIds: ['leetcode', 'github', 'postman', 'codechef'],
  },
  {
    id: 'year-3', title: '3rd Year', timing: 'Go deeper and get experience', accent: 'green',
    description: 'Build stronger evidence of your skills and explore opportunities that fit your goals.',
    topics: ['Advanced DSA practice', 'Develop a specialization', 'Build a substantial project', 'Contribute to open source', 'Explore internships and refine your resume'],
    resourceIds: ['github', 'linkedin', 'internships', 'resume'],
  },
  {
    id: 'year-4', title: '4th Year', timing: 'Prepare for the next step', accent: 'orange',
    description: 'Prepare thoughtfully for roles, interviews, further study, or another path you choose.',
    topics: ['Placement and role preparation', 'Coding interview practice', 'Apply to suitable opportunities', 'Review technical fundamentals', 'Practice clear technical and HR communication'],
    resourceIds: ['leetcode', 'jobs', 'resume', 'linkedin'],
  },
]

export const interests = [
  'Software Development', 'Web Development', 'AI/ML', 'Data Science',
  'Cybersecurity', 'Cloud', 'App Development', 'Competitive Programming', 'Not Sure',
]

const recommendations = {
  'Software Development': ['git', 'github', 'geeksforgeeks'],
  'Web Development': ['vscode', 'github', 'vercel'],
  'AI/ML': ['geeksforgeeks', 'github', 'google-cloud'],
  'Data Science': ['geeksforgeeks', 'github', 'google-cloud'],
  Cybersecurity: ['github', 'hackerrank', 'geeksforgeeks'],
  Cloud: ['github', 'aws', 'azure'],
  'App Development': ['vscode', 'github', 'figma'],
  'Competitive Programming': ['hackerrank', 'leetcode', 'codechef'],
  'Not Sure': ['vscode', 'github', 'hackerrank'],
}

export function getStartingPath(year, interest) {
  const yearIndex = roadmapYears.findIndex((roadmap) => roadmap.title.toLowerCase().includes(year.toLowerCase()))
  const roadmap = roadmapYears[yearIndex >= 0 ? yearIndex : 0]
  return {
    roadmap,
    interest,
    steps: recommendations[interest] ?? recommendations['Not Sure'],
  }
}
