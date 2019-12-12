  const questionBank = [
    {
      question: 'In 1958, who designed the current flag with 50 stars and 13 stripes?',
      answerIndex: 2,
      answers: [
      'President Dwight D. Eisenhower',
      'Betsy Ross',
      'A high school student'],
      followup: 'A 17-year-old high school student, Robert G. Heft, had his design chosen out of 1,500 entries.',
    },
    {
      question: 'Is it ever appropriate to fly the flag upside down?',
      answerIndex: 0,
      answers: ['Yes', 'No'],
      followup: 'Yes, but only in an emergency. It means \"Help Me! It\'s an emergency! Call the police! I am in dire trouble and need immediate help!\"',
    },
    {
      question: 'What is an expert on flags called?',
      answerIndex: 0,
      answers: ['Vexillologist',
      'Chiropterologist',
      'Podiatrist'],
      followup: 'A vexillologist studies history, symbolism, and the usage of flags.',
    },
    {
      question: 'How many US flags are there on the moon?',
      answerIndex: 0,
      answers: ['6', '4', '0'],
      followup: 'There are a total of 6 US flags on the moon of which 5 are standing while the first one hoisted by Neil Armstrong fell.',
    },
    {
      question: 'What day is Flag Day?',
      answerIndex: 0,
      answers: ['June 14th',
      'July 4th',
      'Sept 21st'],
      followup: 'Flag Day is on June 14th. The holiday was developed by a school teacher and signed into law in 1949.',
    },
    {
      question: 'Which one of these is NOT a nickname for The US flag?',
      answerIndex: 0,
      answers: ['Waving Stripes',
      'Stars and Stripes',
      'Star-Spangled Banner',
      'Old Glory'],
      followup: 'Stars and Stripes, Star-Spangled Banner, and Old Glory are all nicknames for the US flag.',
    },
    {
      question: 'What state became the 50th star on the US flag in 1960?',
      answerIndex: 0,
      answers: ['Hawaii',
      'Alaska',
      'New Mexico'],
      followup: 'In 1959, Hawaii was the last state admitted to the union.',
    },
    {
      question: 'True or false: The pledge of allegiance was written by Francis Scott Key?',
      answerIndex: 0,
      answers: ['False', 'True'],
      followup: 'Francis Bellamy wrote the pledge of allegiance.',
    },
    {
      question: 'Over which fort, did the original star spangled banner, immortalized by Francis Scott Key, fly? ',
      answerIndex: 0,
      answers: ['Fort McHenry',
      'Fort Ticonderoga',
      'Fort Sumter'],
      followup: 'Francis Scott Key observed the British bombardment of Fort McHenry in 1814 during the War of 1812.',
    },
    {
      question: 'Have there have been more than 15 official versions of the US flag?',
      answerIndex: 0,
      answers: ['Yes', 'No'],
      followup: 'There have been 27 official versions of the American flag, each with a different amount of stars.',
    },
    {
      question: 'What does the color blue symbolize on the US flag?',
      answerIndex: 0,
      answers: ['loyalty', 'royalty', 'honor'],
      followup: 'History states that red, white and blue were chosen as the colors to represent valor (red), liberty and purity (white), and justice and loyalty (blue).',
    },
  ];

  export function generateTrivia() {
    return questionBank[Math.floor(Math.random()*questionBank.length)];
  }