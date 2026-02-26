import { Translation } from '../services/translation.service';

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
export const OPERATION_STANDARD_QUESTIONS: QuestionDefinition[] = [
  // ========== WORK PROGRESS CATEGORY (1 questions: \n 30%) ==========
  {
    groupCategory: {
      en: 'Work Progress Management',
      zh: '工作进度管理'
    },
    category: {
      en: '• Ensures smooth workflow between Business Units (BU) and Production Teams. \n • Monitors workflow to maintain project schedules and deadlines. \n •	Identifies bottlenecks and proactively resolves issues.',
      zh: '• 确保业务部门 (BU) 与生产团队之间工作流程顺畅。\n • 监控工作流程，以维护项目进度和截止日期。\n • 识别瓶颈并主动解决问题。'
    },
    weight: 30,
    ratings: {
      1: { en: 'Poor: \n • Always late, \n • Do not warn others or fix problems.', 
           zh: '较差: \n • 总是迟到，\n • 不提醒他人，也不解决问题。' },
      2: { en: 'Needs Improvement: \n • Late half the time. \n • Needs help spotting and solving delays.', 
           zh: '需改进: \n • 经常迟到。\n • 需要帮助发现并解决延误问题。' },
      3: { en: 'Meets Expectations: \n •	Meet deadlines most of the time, \n • Needs some help from teams.', 
           zh: '符合期望: \n • 大部分时间都能按时完成任务，\n • 需要一些帮助来解决绘图/细节问题。' },
      4: { en: 'Exceeds Expectations: \n • Meet deadlines almost always. \n • Solve issues early.', 
           zh: '超出期望: \n • 几乎总能按时完成任务。\n • 尽早解决问题。' },
      5: { en: 'Exceptional: \n •	Consistently meets deadlines and delivers high-quality work. \n • Always solve problems quickly and independently.',
           zh: '卓越: \n • 始终按时完成任务并交付高质量成果。\n • 始终能够快速独立地解决问题。' }
    }
  },
  
  // ========== ACCURACY (1 questions: \n 30%) ==========
  {
    groupCategory: {
      en: 'Accuracy',
      zh: '准确性'
    },
    category: {
      en: 'Number of mistakes in offsite fabrication.',
      zh: '异地制造过程中的错误数量。'
    },
    weight: 30,
    ratings: {
      1: { en: 'Poor: \n • Big mistakes that cost a lot and cause project delays.', zh: '较差: \n • 重大错误导致成本增加并延误项目。' },
      2: { en: 'Needs Improvement: \n • Big mistakes that cost a lot but don’t cause project delay.', zh: '需改进: \n • 重大错误导致成本增加但不延误项目。' },
      3: { en: 'Meets Expectations: \n • Repeating minor mistakes, follow up required.', zh: '符合期望: \n • 重复出现小错误，需要跟进。' },
      4: { en: 'Exceeds Expectations: \n • Minor mistakes that are found and solved early don’t affect the schedule & cost.', zh: '超出期望: \n • 小错误被及时发现并解决，不影响进度和成本。' },
      5: { en: 'Exceptional: \n • Nearly perfect in overall project.', zh: '卓越: \n • 整个项目几乎完美无瑕。' }
    }
  },

  // ========== Job Knowledge & Technical Skills  CATEGORY (1 questions: \n 20%) ==========
  {
    groupCategory: {
      en: 'Job Knowledge & Technical Skills',
      zh: '工作知识与技术技能'
    },
    category: {
      en: '• Demonstrates in-depth knowledge of job responsibilities and technical requirements. \n • Maintains accuracy in production drafting and documentation \n •	Proficiency in AutoCAD and other relevant software.',
      zh: '• 展现出对工作职责和技术要求的深入了解。\n • 保持生产绘图和文档的准确性。\n • 精通 AutoCAD 和其他相关软件。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor: \n • Doesn’t understand design drawing, job scope or work procedure.', 
           zh: '较差: \n • 不理解设计图纸、工作范围或工作流程。' },
      2: { en: 'Needs Improvement: \n •	Know the basics of carpentry & work procedure. \n •	Able to use AutoCAD to do basic setting with guidance.', 
           zh: '需改进: \n • 了解木工和工作流程的基础知识。\n • 能够在指导下使用 AutoCAD 进行基本设置。' },
      3: { en: 'Meets Expectations: \n •	Able to prepare most of the drawings on their own but need some guidance.', 
        zh: '符合期望: \n •	能够独立准备大部分图纸，但需要一些指导。' },
      4: { en: 'Exceeds Expectations: \n • Good in technical details, can prepare most of the drawing on their own. \n •	Seldom needs guidance.', 
        zh: '超出期望: \n •	技术细节处理良好，能够独立准备大部分图纸。\n • 很少需要指导。' },
      5: { en: 'Exceptional: \n •	Able to find problems in the early stages and seek for solution. \n •	Excellent in fabrication details and able to give advice.', 
        zh: '卓越: \n •	能够在早期发现问题并寻求解决方案。\n •	在制造细节方面表现出色，能够提供建议。' }
    }
  },
  
  // ========== Teamwork  CATEGORY (1 question: \n 10%) ==========
  {
    groupCategory: {
      en: 'Teamwork ',
      zh: '团队合作'
    },
    category: {
      en: '• Leads by example in adherence to company policies and work ethics \n •	Provides guidance and mentorship to subordinates and new employees \n •	Fosters collaboration among team members for efficient workflow',
      zh: '• 以身作则遵守公司政策和工作道德。\n • 为下属和新员工提供指导和指导。\n • 促进团队成员之间的协作以提高工作效率。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor: \n •	Doesn’t work well with the team. \n •	Creates problems.', 
           zh: '较差: \n • 不善于与团队合作。\n • 造成问题。' },
      2: { en: 'Needs Improvement: \n •	Struggles to work with others.', 
           zh: '需改进: \n • 与团队合作困难。' },
      3: { en: 'Meets Expectations: \n • Works well with the team. \n • Able to give some support.', 
           zh: '符合期望: \n • 与团队合作良好。\n • 能够提供一些支持。' },
      4: { en: 'Exceeds Expectations: \n • Able to lead and give support most of the time. \n • Keeps the team positive and motivative.', 
           zh: '超出期望: \n • 大多数时候都能起到领导和支持作用。\n  • 保持团队积极向上、充满动力。' },
      5: { en: 'Exceptional: \n •	Excellent collaboration skills, sharing knowledge and motivating the team, \n •	Great support, willing to help and offer guidance when needed.', 
           zh: '卓越: \n • 优秀的协作能力，乐于分享知识并激励团队。\n • 乐于助人，愿意在需要时提供指导。' }
    }
  },

  // ========== Dependability & Initiative CATEGORY (1 question: \n 10%) ==========
  {
    groupCategory: {
      en: 'Dependability & Initiative',
      zh: '可靠性和主动性'
    },
    category: {
      en: '• Demonstrates reliability in carrying out tasks with minimal supervision. \n • Take proactive measures to address challenges and implement improvements. \n • Exhibits accountability for assigned responsibilities',
      zh: '• 能够在极少监督的情况下可靠地完成任务。\n • 积极主动地应对挑战并进行改进。\n • 对所分配的职责表现出高度的责任感。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor: \n • Need reminders all the time. \n •	Never takes charge.', 
           zh: '较差: \n • 需要不断提醒，从不主动承担责任。' },
      2: { en: 'Needs Improvement: \n •	Need reminders frequently. \n •	Not very proactive.', 
           zh: '需改进: \n • 需要频繁提醒。\n • 不够积极主动。' },
      3: { en: 'Meets Expectations: \n • Reliable most of the time. \n • Try to take charge & responsible.', 
           zh: '符合期望: \n • 大部分时间都很可靠。\n • 试图承担责任。' },
      4: { en: 'Exceeds Expectations: \n • Very reliable. \n • Can solve most of the problems on their own.', 
           zh: '超出期望: \n • 非常可靠。\n • 能够独立解决大部分问题。' },
      5: { en: 'Exceptional: \n • Super reliable, able to follow schedule, solve all issues on their own. \n • Always takes initiative and owns the task.', 
           zh: '卓越: \n • 超级可靠，能够按时完成任务，独立解决所有问题。\n • 总是积极主动，认真负责地完成任务。' }
    }
  },
  
  // ========== Communication & Responsiveness CATEGORY (1 question: \n 10%) ==========
  {
    groupCategory: {
      en: 'Communication & Responsiveness ',
      zh: '沟通与响应能力'
    },
    category: {
      en: '• Ensures timely response to emails and telephone inquiries \n • Maintains clear communication with project teams and clients \n • Addresses project-related queries and concerns professionally.',
      zh: '• 确保及时回复电子邮件和电话咨询。\n • 与项目团队和客户保持清晰的沟通。\n • 专业地处理与项目相关的疑问和问题。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor: \n • Hard to reach. \n • Slow/No responds.', 
           zh: '较差: \n • 难以联系。\n • 反应慢/无回复。' },
      2: { en: 'Needs Improvement: \n •	Delayed responses (within 24 hours), always need to follow up.', 
           zh: '需改进: \n • 延迟回复（24小时内），务必跟进。' },
      3: { en: 'Needs Improvement: \n •	Satisfactory responses (within 24 hours), sometime follow up required.', 
           zh: '需改进: \n • 24小时内得到满意答复，有时需要后续跟进。' },
      4: { en: 'Exceeds Expectations: \n • Good response (within 24 hours) most of the queries can be solved.', 
           zh: '超出期望: \n • 大部分问题都能在24小时内得到快速解答。' },
      5: { en: 'Exceptional: \n • Excellent response time, get back to teams as soon as possible and all queries solved efficiently. \n • Always keeps everyone in the loop.', 
           zh: '卓越: \n • 响应速度极快，能尽快回复团队，并高效解决所有问题。\n • 始终让每个人都了解最新进展。' }
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
