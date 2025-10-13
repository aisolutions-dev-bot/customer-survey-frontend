import { Translation } from '../services/translation.service';

export interface QuestionDefinition {
  category: Translation;
  weight: number;
  ratings: {
    [key: number]: Translation;
  };
}

export const DRAFTER_QUESTIONS: QuestionDefinition[] = [
  {
    category: {
      en: "Work Progress Management",
      zh: "工作进度管理"
    },
    weight: 20,
    ratings: {
      1: {
        en: "Always late, Do not warn others or fix problems",
        zh: "总是迟交，不提醒他人或解决问题"
      },
      2: {
        en: "Late most of the time, Need helps most of the time to spot and solve drawing/detailing issues",
        zh: "大部分时间迟交，大部分时间需要帮助发现和解决绘图/细节问题"
      },
      3: {
        en: "Meet deadlines most of the time, Need some help to solve drawing/detailing issues",
        zh: "大部分时间能按时完成，需要一些帮助解决绘图/细节问题"
      },
      4: {
        en: "Most of the time meet submission deadlines, Able to solve drawing/detailing issues ahead of time",
        zh: "大部分时间按时提交，能够提前解决绘图/细节问题"
      },
      5: {
        en: "Never late for drawing submission (without last min information update), Always solve problems quickly and independently",
        zh: "绘图提交从不迟交（在没有最后一刻信息更新的情况下），总能快速独立解决问题"
      }
    }
  },
  {
    category: {
      en: "Accuracy",
      zh: "准确性"
    },
    weight: 30,
    ratings: {
      1: {
        en: "Big mistakes that cost a lot and cause project delays",
        zh: "重大错误导致高昂成本并造成项目延误"
      },
      2: {
        en: "Big mistakes that cost a lot but don't cause delay",
        zh: "重大错误导致高昂成本但不造成延误"
      },
      3: {
        en: "Minor mistakes that keep repeating and affect project schedule",
        zh: "小错误持续重复并影响项目进度"
      },
      4: {
        en: "Minor mistakes but not frequent",
        zh: "小错误但不频繁"
      },
      5: {
        en: "No mistakes at all",
        zh: "完全没有错误"
      }
    }
  },
  {
    category: {
      en: "Job Knowledge & Technical Skills",
      zh: "工作知识与技术技能"
    },
    weight: 20,
    ratings: {
      1: {
        en: "Weak on computerized skills, Always needs help",
        zh: "电脑技能薄弱，总需要帮助"
      },
      2: {
        en: "Knowing the basics of computerized skills, Needs help most of the time",
        zh: "了解电脑技能基础，大部分时间需要帮助"
      },
      3: {
        en: "Can work on their own most of the time",
        zh: "大部分时间能够独立工作"
      },
      4: {
        en: "Good with computerized skills, Needs little help",
        zh: "电脑技能良好，很少需要帮助"
      },
      5: {
        en: "Very good with computerized skills, Able to help others and solve problems with computerized skills, Great leadership and collaboration with project team",
        zh: "电脑技能非常好，能够帮助他人并解决电脑技能问题，在项目团队中展现出色的领导力和协作能力"
      }
    }
  },
  {
    category: {
      en: "Teamwork",
      zh: "团队合作"
    },
    weight: 10,
    ratings: {
      1: {
        en: "Doesn't work well with the team, Creates problems",
        zh: "与团队合作不佳，制造问题"
      },
      2: {
        en: "Struggles to work with others",
        zh: "与他人合作有困难"
      },
      3: {
        en: "Works well with the team, Gives some support",
        zh: "与团队合作良好，提供一些支持"
      },
      4: {
        en: "Good leadership and collaboration with project team, Team loves working with him/her",
        zh: "在项目团队中展现良好的领导力和协作能力，团队喜欢与他/她合作"
      },
      5: {
        en: "Able to motivate and keep teams positive always",
        zh: "能够激励团队并始终保持团队积极性"
      }
    }
  },
  {
    category: {
      en: "Dependability & Initiative",
      zh: "可靠性与主动性"
    },
    weight: 10,
    ratings: {
      1: {
        en: "Need reminders all the time, Never takes charge",
        zh: "一直需要提醒，从不主动负责"
      },
      2: {
        en: "Sometimes needs reminders, Not very proactive",
        zh: "有时需要提醒，不太主动"
      },
      3: {
        en: "Always able to follow instructions and manage own timeline well, Try to take charge",
        zh: "总能遵循指示并很好地管理自己的时间表，尝试主动负责"
      },
      4: {
        en: "Reliable, proactive in following up schedule, Solves problems on their own",
        zh: "可靠，主动跟进进度，独立解决问题"
      },
      5: {
        en: "Very reliable and always proactive in following up schedule, Always takes initiative and owns the task",
        zh: "非常可靠且总是主动跟进进度，总是主动承担并负责任务"
      }
    }
  },
  {
    category: {
      en: "Communication & Responsiveness",
      zh: "沟通与响应能力"
    },
    weight: 10,
    ratings: {
      1: {
        en: "Hard to reach, Rarely responds, Fear/Shy in communication",
        zh: "难以联系，很少回应，在沟通中害怕/害羞"
      },
      2: {
        en: "Sometimes slow to respond, takes more than 2 hours to respond, Able to have basic communication with the teams",
        zh: "有时回应缓慢，需要超过2小时才回应，能够与团队进行基本沟通"
      },
      3: {
        en: "Usually responses and updates within 4 hours, Able to communicate well with both Project team and Drafters",
        zh: "通常在4小时内回应和更新，能够与项目团队和绘图员良好沟通"
      },
      4: {
        en: "Always respond quickly and clearly within 2 hours, Able to communicate and link up with Project team and Drafters",
        zh: "总是在2小时内快速清晰地回应，能够与项目团队和绘图员沟通和联系"
      },
      5: {
        en: "Fast and clear communication all the time, Always able to communicate and link up with all involve parties",
        zh: "始终快速清晰地沟通，总能与所有相关方沟通和联系"
      }
    }
  }
];

export const SMILEYS = [
  { value: 1, icon: '😤', color: '#ef4444' },
  { value: 2, icon: '😕', color: '#f97316' },
  { value: 3, icon: '😐', color: '#3b82f6' },
  { value: 4, icon: '😊', color: '#22c55e' },
  { value: 5, icon: '😄', color: '#059669' }
];

/* export const SMILEYS = [
  { value: 1, icon: '😤', color: 'bg-red-500', textColor: 'text-red-500' },
  { value: 2, icon: '😕', color: 'bg-orange-500', textColor: 'text-orange-500' },
  { value: 3, icon: '😐', color: 'bg-blue-500', textColor: 'text-blue-500' },
  { value: 4, icon: '😊', color: 'bg-green-400', textColor: 'text-green-400' },
  { value: 5, icon: '😍', color: 'bg-green-600', textColor: 'text-green-600' }
]; */