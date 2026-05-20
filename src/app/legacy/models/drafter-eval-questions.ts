import { Translation } from '../../services/translation.service';

export interface QuestionDefinition {
  category: Translation;
  weight: number;
  groupCategory?: Translation; // NEW: Added group category
  ratings: {
    [key: number]: Translation;
  };
}

export interface CarpenterLevel {
  id: string;
  label: Translation;
  questions: QuestionDefinition[];
}

// Standard Questionnaire with Categories (6 questions)
export const DRAFTER_STANDARD_QUESTIONS: QuestionDefinition[] = [
  // ========== WORK PROGRESS CATEGORY (1 questions - 30%) ==========
  {
    groupCategory: {
      en: 'Work Progress Management',
      zh: '工作进度管理'
    },
    category: {
      en: '• Ensures smooth workflow between Business Units (BU) and Production Teams. \n • Monitors workflow to prevent impact on project schedules and deadlines. \n • Identifies bottlenecks and proactively resolves issues',
      zh: '• 确保业务部门 (BU) 与生产团队之间工作流程顺畅。 \n • 监控工作流程，防止对项目进度和截止日期造成影响。\n • 识别瓶颈并主动解决问题。'
    },
    weight: 20,
    ratings: {
      1: { en: 'Poor: \n • Always late, \n •	Do not warn others or fix problems.', 
           zh: '较差: \n • 总是迟到，\n • 不警告他人，也不解决问题。' },
      2: { en: 'Needs Improvement: \n •	Meet deadlines most of the time, \n • Needs some help to solve drawing/detailing issues.', 
           zh: '需改进: \n • 大部分时间都能按时完成任务，\n • 需要一些帮助来解决绘图/细节问题。' },
      3: { en: 'Meets Expectations: \n • Meet deadlines most of the time, \n • Needs some help to solve drawing/detailing issues.', 
           zh: '符合期望: \n • 大部分时间都能按时完成任务，\n • 需要一些帮助来解决绘图/细节问题。' },
      4: { en: 'Exceeds Expectations: \n • Most of the time meet submission deadlines \n • Able to solve drawing /detailing issues ahead of time.', 
           zh: '超出期望: \n • 大部分时间都能按时提交图纸，\n • 能够提前解决绘图/细节问题。' },
      5: { en: 'Exceptional: \n •	Never late for drawing submission (without last min information update). \n • Always solve problems quickly and independently.', 
           zh: '卓越: \n • 从不延误图纸提交（不包括最后时刻信息更新）。\n • 总是快速且独立地解决问题。' }
    }
  },
  
  // ========== ACCURACY (1 questions - 30%) ==========
  {
    groupCategory: {
      en: 'Accuracy',
      zh: '准确性'
    },
    category: {
      en: 'Number of mistakes (Internal issue).',
      zh: '错误数量（内部问题）。'
    },
    weight: 30,
    ratings: {
      1: { en: 'Poor: \n • Big mistakes that cost a lot and cause project delays.', zh: '较差: \n • 重大错误导致成本增加并影响项目进度。' },
      2: { en: 'Needs Improvement: \n • Mistakes that keep repeating and affect project schedule.', zh: '需改进: \n • 错误重复出现并影响项目进度。' },
      3: { en: 'Meets Expectations: \n • Mistakes that keep repeating and affect project schedule.', zh: '符合期望: \n • 错误重复出现并影响项目进度。' },
      4: { en: 'Exceeds Expectations: \n • With mistakes but not frequent.', zh: '超出期望: \n • 有错误但不频繁。' },
      5: { en: 'Exceptional: \n • Minor mistakes with no impact.', zh: '卓越: \n • 无重大错误，影响最小。' }
    }
  },

  // ========== Job Knowledge & Technical Skills  CATEGORY (1 questions - 20%) ==========
  {
    groupCategory: {
      en: 'Job Knowledge & Technical Skills',
      zh: '工作知识与技术技能'
    },
    category: {
      en: '• Demonstrates in-depth knowledge of job responsibilities and technical requirements. \n • Maintains accuracy in production drafting and documentation. \n •	Proficiency in computerized skills',
      zh: '• 深入了解工作职责和技术要求。\n • 确保生产图纸和文档的准确性。\n • 熟练掌握计算机技能。'
    },
    weight: 20,
    ratings: {
      1: { en: 'Poor: \n • Weak on computerized skills. \n •	Always needs full support for drawing submission.', 
           zh: '较差: \n • 计算机技能较弱。\n • 总是需要全面支持才能完成图纸提交。' },
      2: { en: 'Needs Improvement: \n • Can work on their own most of the time.', 
           zh: '需改进: \n • 他们大部分时间都能独立工作。' },
      3: { en: 'Meets Expectations: \n • Can work on their own most of the time.', 
           zh: '符合期望: \n • 他们大部分时间都能独立工作。' },
      4: { en: 'Exceeds Expectations: \n • Good with computerized skills. \n •	Needs little help.', 
           zh: '超出期望: \n • 计算机技能良好。\n • 需要很少帮助。' },
      5: { en: 'Exceptional: \n •	Very good with computerized skills. \n • Able to help others and solve problems with computerized skills.',
           zh: '卓越: \n • 计算机技能非常熟练。\n • 能够帮助他人并用计算机技能解决问题。' }
    }
  },
  
  // ========== Teamwork  CATEGORY (1 question - 10%) ==========
  {
    groupCategory: {
      en: 'Teamwork ',
      zh: '团队合作'
    },
    category: {
      en: '• Leads by example in adherence to company policies and work ethics. \n • Provides guidance and mentorship to subordinates and new employees. \n •	Fosters collaboration among team members for efficient workflow.',
      zh: '• 以身作则遵守公司政策和工作道德。\n • 为下属和新员工提供指导和指导。\n • 促进团队成员之间的协作以提高工作效率。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor: \n •	Doesn’t work well with the team. \n •	Creates problems.', 
           zh: '较差: \n • 不善于与团队合作。\n • 造成问题。' },
      2: { en: 'Needs Improvement: \n •	Works well with the team. Able to give support.', 
           zh: '需改进: \n • 与团队合作良好，能够提供支持。' },
      3: { en: 'Meets Expectations: \n • Works well with the team. Able to give support..', 
           zh: '符合期望: \n • 与团队合作良好，能够提供支持。' },
      4: { en: 'Exceeds Expectations: \n •	Good collaboration with project team. \n •	Good supportive.', 
           zh: '超出期望: \n • 与项目团队合作良好。\n • 提供良好的支持。' },
      5: { en: 'Exceptional: \n •	Very good collaboration with project team, \n •	Able to lead and motivate the team and give supports.', 
           zh: '卓越: \n • 与项目团队合作非常良好。\n • 能够领导和激励团队并提供支持。' }
    }
  },

  // ========== Dependability & Initiative CATEGORY (1 question - 10%) ==========
  {
    groupCategory: {
      en: 'Dependability & Initiative',
      zh: '可靠性和主动性'
    },
    category: {
      en: '• Demonstrates reliability in carrying out tasks with minimal supervision. \n • Take proactive measures to address challenges and implement improvements. \n •	Exhibits accountability for assigned responsibilities.',
      zh: '• 能够在极少监督的情况下可靠地完成任务。\n • 积极主动地应对挑战并进行改进。\n • 对所分配的职责表现出高度的责任感。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor: \n •	Need reminders all the time. \n •	Never takes charge.', 
           zh: '较差: \n • 需要不断提醒，从不主动承担责任。' },
      2: { en: 'Needs Improvement: \n •	Always able to follow instructions and manage own timeline well. \n •	Try to take charge.', 
           zh: '需改进: \n • 始终能够遵循指示并妥善管理自己的时间安排。\n • 积极主动，勇于承担责任。' },
      3: { en: 'Meets Expectations: \n • Always able to follow instructions and manage own timeline well. \n • Try to take charge.', 
           zh: '符合期望: \n • 始终能够遵循指示并妥善管理自己的时间安排。\n • 积极主动，勇于承担责任。' },
      4: { en: 'Exceeds Expectations: \n • Reliable, proactive in following up schedule. \n •	Solves problems on their own.', 
           zh: '超出期望: \n • 可靠，主动跟进时间表。\n • 能够独立解决问题。' },
      5: { en: 'Exceptional: \n •	Very reliable and always proactive in following up schedule. \n •	Always takes initiative and owns the task.', 
           zh: '卓越: \n • 非常可靠，始终积极跟进时间表。\n • 总是主动承担责任并完成任务。' }
    }
  },
  
  // ========== Communication & Responsiveness CATEGORY (1 question - 10%) ==========
  {
    groupCategory: {
      en: 'Communication & Responsiveness ',
      zh: '沟通与响应能力'
    },
    category: {
      en: '• Ensures timely response to emails and telephone inquiries. \n • Maintains clear communication with project teams and clients. \n •	Addresses project-related queries and concerns professionally.',
      zh: '• 确保及时回复电子邮件和电话咨询。\n • 与项目团队和客户保持清晰的沟通。\n • 专业地处理与项目相关的疑问和问题。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor: \n • Hard to reach. \n •	Rarely responds. \n •	Fear/shy in communication.', 
           zh: '较差: \n • 难以联系。\n • 很少回复。\n • 害怕/害羞于沟通。' },
      2: { en: 'Needs Improvement: \n •	Usually responses and updates and follow up require within 24 hours. \n •	Able to communicate well with both Project team and Drafters.', 
           zh: '需改进: \n • 通常需要在 24 小时内回复、更新和跟进。\n • 能够与项目团队和绘图员进行良好沟通。' },
      3: { en: 'Needs Improvement: \n •	Usually responses and updates and follow up require within 24 hours. \n •	Able to communicate well with both Project team and Drafters.', 
           zh: '需改进: \n • 通常需要在 24 小时内回复、更新和跟进。\n • 能够与项目团队和绘图员进行良好沟通。' },
      4: { en: 'Exceeds Expectations: \n • Always respond within 24 hours and most of the issues solved. \n • Able to communicate and link up with Project team and Drafters.', 
           zh: '超出期望: \n • 始终在 24 小时内响应，大多数问题能及时解决。\n • 能够与项目团队和绘图员进行有效沟通。' },
      5: { en: 'Exceptional: \n • Excellent response time, all queries resolved efficiently.', 
           zh: '卓越: \n • 响应时间优秀，所有问题都能高效解决。\n • 始终能够与所有相关方沟通协调。' }
    }
  }  
];

export const SMILEYS = [
  { value: 1, icon: '😤', color: '#ef4444' },
  { value: 2, icon: '😢', color: '#f97316' },
  { value: 3, icon: '😐', color: '#3b82f6' },
  { value: 4, icon: '😊', color: '#22c55e' },
  { value: 5, icon: '😍', color: '#059669' }
];
