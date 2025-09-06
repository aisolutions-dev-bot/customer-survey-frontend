export interface QuestionDefinition {
  category: string;
  weight: number;
  ratings: {
    [key: number]: string;
  };
}

export const DRAFTER_QUESTIONS: QuestionDefinition[] = [
  {
    category: "Work Progress Management",
    weight: 20,
    ratings: {
      1: "Always late, Do not warn others or fix problems",
      2: "Late most of the time, Need helps most of the time to spot and solve drawing/detailing issues",
      3: "Meet deadlines most of the time, Need some help to solve drawing/detailing issues",
      4: "Most of the time meet submission deadlines, Able to solve drawing/detailing issues ahead of time",
      5: "Never late for drawing submission (without last min information update), Always solve problems quickly and independently"
    }
  },
  {
    category: "Accuracy",
    weight: 30,
    ratings: {
      1: "Big mistakes that cost a lot and cause project delays",
      2: "Big mistakes that cost a lot but don't cause delay",
      3: "Minor mistakes that keep repeating and affect project schedule",
      4: "Minor mistakes but not frequent",
      5: "No mistakes at all"
    }
  },
  {
    category: "Job Knowledge & Technical Skills",
    weight: 20,
    ratings: {
      1: "Weak on computerized skills, Always needs help",
      2: "Knowing the basics of computerized skills, Needs help most of the time",
      3: "Can work on their own most of the time",
      4: "Good with computerized skills, Needs little help",
      5: "Very good with computerized skills, Able to help others and solve problems with computerized skills, Great leadership and collaboration with project team"
    }
  },
  {
    category: "Teamwork",
    weight: 10,
    ratings: {
      1: "Doesn't work well with the team, Creates problems",
      2: "Struggles to work with others",
      3: "Works well with the team, Gives some support",
      4: "Good leadership and collaboration with project team, Team loves working with him/her",
      5: "Able to motivate and keep teams positive always"
    }
  },
  {
    category: "Dependability & Initiative",
    weight: 10,
    ratings: {
      1: "Need reminders all the time, Never takes charge",
      2: "Sometimes needs reminders, Not very proactive",
      3: "Always able to follow instructions and manage own timeline well, Try to take charge",
      4: "Reliable, proactive in following up schedule, Solves problems on their own",
      5: "Very reliable and always proactive in following up schedule, Always takes initiative and owns the task"
    }
  },
  {
    category: "Communication & Responsiveness",
    weight: 10,
    ratings: {
      1: "Hard to reach, Rarely responds, Fear/Shy in communication",
      2: "Sometimes slow to respond, takes more than 2 hours to respond, Able to have basic communication with the teams",
      3: "Usually responses and updates within 4 hours, Able to communicate well with both Project team and Drafters",
      4: "Always respond quickly and clearly within 2 hours, Able to communicate and link up with Project team and Drafters",
      5: "Fast and clear communication all the time, Always able to communicate and link up with all involve parties"
    }
  }
];

export const SMILEYS = [
  { value: 1, icon: '😤', color: 'bg-red-500', textColor: 'text-red-500' },
  { value: 2, icon: '😕', color: 'bg-orange-500', textColor: 'text-orange-500' },
  { value: 3, icon: '😐', color: 'bg-blue-500', textColor: 'text-blue-500' },
  { value: 4, icon: '😊', color: 'bg-green-400', textColor: 'text-green-400' },
  { value: 5, icon: '😍', color: 'bg-green-600', textColor: 'text-green-600' }
];