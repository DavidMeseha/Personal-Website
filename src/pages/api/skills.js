export default function handler(req, res) {
  if (req.method === 'GET') {
    let mySkills = [
      {
        title: 'Front End',
        skillSet: [
          {
            skill: 'HTML/CSS/JS',
            level: 86
          },
          {
            skill: 'Sass/Scss',
            level: 85
          },
          {
            skill: 'React.js',
            level: 84
          },
          {
            skill: 'Next.js',
            level: 95
          },
          {
            skill: 'SEO',
            level: 92
          },
          {
            skill: 'Graphic Designe',
            level: 72
          }
        ]
      },

      {
        title: 'Back End',
        skillSet: [
          {
            skill: 'Node.js',
            level: 80
          },
          {
            skill: 'Next.js',
            level: 89
          },
          {
            skill: 'GraphQL',
            level: 85
          },
          {
            skill: 'Auth/JWT',
            level: 89
          },
          {
            skill: 'MongoDB',
            level: 82
          },
          {
            skill: 'SQL Queries',
            level: 72
          },
        ]
      },

      {
        title: 'Programming',
        skillSet: [
          {
            skill: 'Problem Solving',
            level: 92
          },
          {
            skill: 'coding',
            level: 98
          },
          {
            skill: 'Math.',
            level: 92
          },
          {
            skill: 'Algorithms',
            level: 83
          },
          {
            skill: 'Projet Manage.',
            level: 69
          },
        ]
      },

      {
        title: 'Sof Skills',
        skillSet: [
          {
            skill: 'Time Manage.',
            level: 71
          },
          {
            skill: 'Team Work',
            level: 86
          },
          {
            skill: 'Creativity',
            level: 82
          },
        ]
      }
    ]

    res.status(200).json({ mySkills })
  }
}
