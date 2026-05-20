import { Translation } from '../../services/translation.service';

export interface QuestionDefinition {
  category: Translation;
  weight: number;
  groupCategory?: Translation; // NEW: Added group category
  ratings: {
    [key: number]: Translation;
  };
}

export interface CeilingLevel {
  id: string;
  label: Translation;
  questions: QuestionDefinition[];
}

// Level 1 Questionnaire with Categories (10 questions)
const LEVEL_1_QUESTIONS: QuestionDefinition[] = [
  // ========== TECHNICAL SKILLS CATEGORY (5 questions - 60%) ==========
  { //Q1
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Follows factory safety rules, PPE requirements, and basic housekeeping standards',
      zh: '遵守工厂安全规章、个人防护装备要求和基本清洁标准'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - The carpenter rarely or never demonstrates this skill, even when shown or instructed.', zh: '较差 - 即使在指导下，也几乎无法表现出此技能。' },
      2: { en: 'Needs Improvement - The carpenter can perform the task occasionally, but often needs close supervision and correction.', zh: '需改进 - 偶尔能完成任务，但需要密切监督与纠正。' },
      3: { en: 'Meets Expectations - The carpenter performs the skill about half of the time, with some errors or reminders.', zh: '符合期望 - 约有一半时间能做到，但仍有错误或需要提醒。' },
      4: { en: 'Exceeds Expectations - The carpenter performs the skill well most of the time with minimal supervision and few mistakes.', zh: '超出期望 - 大部分时间能稳定完成任务，几乎不需监督。' },
      5: { en: 'Exceptional - The carpenter consistently performs the skill independently, with high accuracy and confidence.', zh: '卓越 - 能独立、稳定且准确地完成技能操作，表现出高熟练度。' }
    }
  },
  { //Q2
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Performs manual tasks such as carrying materials, loading/unloading, and basic site cleaning as instructed',
      zh: '按照指示执行搬运材料、装卸以及基础现场清理等手工任务'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - The carpenter rarely or never demonstrates this skill, even when shown or instructed.', zh: '较差 - 即使在指导下，也几乎无法表现出此技能。' },
      2: { en: 'Needs Improvement - The carpenter can perform the task occasionally, but often needs close supervision and correction.', zh: '需改进 - 偶尔能完成任务，但需要密切监督与纠正。' },
      3: { en: 'Meets Expectations - The carpenter performs the skill about half of the time, with some errors or reminders.', zh: '符合期望 - 约有一半时间能做到，但仍有错误或需要提醒。' },
      4: { en: 'Exceeds Expectations - The carpenter performs the skill well most of the time with minimal supervision and few mistakes.', zh: '超出期望 - 大部分时间能稳定完成任务，几乎不需监督。' },
      5: { en: 'Exceptional - The carpenter consistently performs the skill independently, with high accuracy and confidence.', zh: '卓越 - 能独立、稳定且准确地完成技能操作，表现出高熟练度。' }
    }
  },
  { //Q3
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Keeps work areas clean and organised, including removal of debris and waste',
      zh: '保持工作区域的清洁和有序，包括清理垃圾和废弃物'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - The carpenter rarely or never demonstrates this skill, even when shown or instructed.', zh: '较差 - 即使在指导下，也几乎无法表现出此技能。' },
      2: { en: 'Needs Improvement - The carpenter can perform the task occasionally, but often needs close supervision and correction.', zh: '需改进 - 偶尔能完成任务，但需要密切监督与纠正。' },
      3: { en: 'Meets Expectations - The carpenter performs the skill about half of the time, with some errors or reminders.', zh: '符合期望 - 约有一半时间能做到，但仍有错误或需要提醒。' },
      4: { en: 'Exceeds Expectations - The carpenter performs the skill well most of the time with minimal supervision and few mistakes.', zh: '超出期望 - 大部分时间能稳定完成任务，几乎不需监督。' },
      5: { en: 'Exceptional - The carpenter consistently performs the skill independently, with high accuracy and confidence.', zh: '卓越 - 能独立、稳定且准确地完成技能操作，表现出高熟练度。' }
    }
  },
  { //Q4
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Uses basic tools and equipment safely for cleaning and support work',
      zh: '安全使用基本工具和设备进行清洁和辅助工作'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - The carpenter rarely or never demonstrates this skill, even when shown or instructed.', zh: '较差 - 即使在指导下，也几乎无法表现出此技能。' },
      2: { en: 'Needs Improvement - The carpenter can perform the task occasionally, but often needs close supervision and correction.', zh: '需改进 - 偶尔能完成任务，但需要密切监督与纠正。' },
      3: { en: 'Meets Expectations - The carpenter performs the skill about half of the time, with some errors or reminders.', zh: '符合期望 - 约有一半时间能做到，但仍有错误或需要提醒。' },
      4: { en: 'Exceeds Expectations - The carpenter performs the skill well most of the time with minimal supervision and few mistakes.', zh: '超出期望 - 大部分时间能稳定完成任务，几乎不需监督。' },
      5: { en: 'Exceptional - The carpenter consistently performs the skill independently, with high accuracy and confidence.', zh: '卓越 - 能独立、稳定且准确地完成技能操作，表现出高熟练度。' }
    }
  },
  { //Q5
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Reports hazards, damages, or abnormalities to the team leader promptly',
      zh: '及时向组长报告危险、损害或异常情况'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - The carpenter rarely or never demonstrates this skill, even when shown or instructed.', zh: '较差 - 即使在指导下，也几乎无法表现出此技能。' },
      2: { en: 'Needs Improvement - The carpenter can perform the task occasionally, but often needs close supervision and correction.', zh: '需改进 - 偶尔能完成任务，但需要密切监督与纠正。' },
      3: { en: 'Meets Expectations - The carpenter performs the skill about half of the time, with some errors or reminders.', zh: '符合期望 - 约有一半时间能做到，但仍有错误或需要提醒。' },
      4: { en: 'Exceeds Expectations - The carpenter performs the skill well most of the time with minimal supervision and few mistakes.', zh: '超出期望 - 大部分时间能稳定完成任务，几乎不需监督。' },
      5: { en: 'Exceptional - The carpenter consistently performs the skill independently, with high accuracy and confidence.', zh: '卓越 - 能独立、稳定且准确地完成技能操作，表现出高熟练度。' }
    }
  },

  // ========== PROBLEM SOLVING CATEGORY (1 question - 5%) ==========
  { //Q6
    groupCategory: {
      en: 'Problem Solving',
      zh: '问题解决'
    },
    category: {
      en: 'Able to solve problems when faced with challenges',
      zh: '在面对挑战时能否解决问题'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot handle basic problems even under supervision.', zh: '较差 - 在监督下仍无法完成基础问题。' },
      2: { en: 'Needs Improvement - Inconsistently handles basic problems under guidance, frequent errors.', zh: '需改进 - 在指导下完成基础问题不稳定，常出错。' },
      3: { en: 'Meets Expectations - Can handle basic problems under guidance.', zh: '能在指导下处理基础问题。' },
      4: { en: 'Exceeds Expectations - Handles basic problems under guidance and identifies minor issues.', zh: '超出期望 - 在指导下能处理基础问题，并能发现小问题。' },
      5: { en: 'Exceptional - Independently solves some basic problems and proactively seeks learning opportunities.', zh: '卓越 - 独立解决部分基础问题，并主动寻求学习机会。' }
    }
  },

  // ========== ADAPTABILITY CATEGORY (1 question - 5%) ==========
  { //Q7
    groupCategory: {
      en: 'Adaptability',
      zh: '适应能力'
    },
    category: {
      en: 'Able to adapt to changes to tasks and things happening at site/factory',
      zh: '是否能够适应现场或任务中发生的变化'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot adapt to changes even when instructed.', zh: '较差 - 无法在指导下适应变更。' },
      2: { en: 'Needs Improvement - Inconsistently adapts to changes under guidance.', zh: '需改进 - 在指导下适应变更不稳定。' },
      3: { en: 'Meets Expectations - Can adapt to changes under guidance.', zh: '符合期望 - 在指导下能适应变更。' },
      4: { en: 'Exceeds Expectations - Adapts to changes under guidance and offers minor suggestions.', zh: '超出期望 - 在指导下能适应变更，并能提出小建议。' },
      5: { en: 'Exceptional - Independently adapts to changes and actively learns new skills.', zh: '卓越 - 独立适应变更，并主动学习新技能。' }
    }
  },
  
  // ========== SELF-MANAGEMENT CATEGORY (1 question - 15%) ==========
  { //Q8
    groupCategory: {
      en: 'Self-Management',
      zh: '自我管理'
    },
    category: {
      en: 'Able to handle assigned tasks and complete tasks on time',
      zh: '是否能够处理分配的任务并按时完成任务'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Cannot complete assigned tasks even under supervision.', zh: '较差 - 无法在监督下完成分配任务。' },
      2: { en: 'Needs Improvement - Inconsistently completes tasks under supervision.', zh: '需改进 - 在监督下完成任务不稳定。' },
      3: { en: 'Meets Expectations - Can complete assigned tasks under supervision.', zh: '符合期望 - 能在监督下完成分配任务。' },
      4: { en: 'Exceeds Expectations - Completes tasks on time under supervision and corrects minor mistakes.', zh: '超出期望 - 在监督下能按时完成任务并纠正小错误。' },
      5: { en: 'Exceptional - Independently completes basic tasks and proactively improves workflow.', zh: '卓越 - 独立完成基础任务并主动优化工作。' }
    }
  },

  // ========== PROJECT STANDARD CATEGORY (1 question - 5%) ==========
  { //Q9
    groupCategory: {
      en: 'Project Standard',
      zh: '项目标准'
    },
    category: {
      en: 'Delivers work that meets project standards',
      zh: '是否做到项目标准的工作'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Work fails to meet basic standards.', zh: '较差 - 工作未达到基本标准。' },
      2: { en: 'Needs Improvement - Occasionally meets standards but often contains errors.', zh: '需改进 - 偶尔达到标准，但经常出错。' },
      3: { en: 'Meets Expectations - Delivers work that meets basic standards.', zh: '符合期望 - 完成基本标准工作。' },
      4: { en: 'Exceeds Expectations - Work often exceeds basic standards.', zh: '超出期望 - 工作质量高于基本标准。' },
      5: { en: 'Exceptional - Delivers high-quality work and proactively meets client needs', zh: '卓越 - 高质量完成工作并主动满足客户需求。' }
    }
  },
  
  // ========== TEAMWORK & COMMUNICATION CATEGORY (1 question - 10%) ==========
  { //Q10
    groupCategory: {
      en: 'Teamwork & Communication',
      zh: '团队合作与沟通'
    },
    category: {
      en: 'Works well with team and able to communicate updates clearly',
      zh: '是否能够很好地与团队合作，并能够清晰地传达任务或项目进展'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot work with team even when instructed.', zh: '较差 - 无法在指示下与团队合作。' },
      2: { en: 'Needs Improvement - Collaboration under guidance is inconsistent.', zh: '需改进 - 在指示下合作不稳定。' },
      3: { en: 'Meets Expectations - Works with team when instructed.', zh: '符合期望 - 在指示下能与团队配合。' },
      4: { en: 'Exceeds Expectations - Works actively with the team under instruction and shares information.', zh: '超出期望 - 在指示下能积极配合团队，并分享信息。' },
      5: { en: 'Exceptional - Proactively collaborates and helps team members', zh: '卓越 - 能主动协作并帮助团队成员。' }
    }
  }
];

// Level 2 Questionnaire (10 questions)
const LEVEL_2_QUESTIONS: QuestionDefinition[] = [
  // ========== TECHNICAL SKILLS CATEGORY (5 questions - 50%) ==========
  { //Q1
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Leads a small team in material carrying, site cleaning, and preparation works',
      zh: '领导一小队进行物料搬运、工地清理和准备工作'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q2
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Ensures team members follow safety rules and proper lifting practices',
      zh: '确保团队成员遵守安全规则和正确的搬运操作'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q3
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Allocates manpower for daily cleaning zones and material movement tasks',
      zh: '分配人力进行日常清洁区域和物料搬运任务'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q4
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Monitors cleanliness and tidiness of site and rectifies issues immediately',
      zh: '监督现场的清洁和整齐，并立即解决问题'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q5
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Communicates work progress and site issues to the foreman clearly',
      zh: '清楚地向工头汇报工作进展和现场问题'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },

  // ========== PROBLEM SOLVING CATEGORY (1 questions - 10%) ==========
  { //Q6
    groupCategory: { en: 'Problem Solving', zh: '问题解决'},
    category: {
      en: 'Able to solve problems when faced with challenges',
      zh: '在面对挑战时能否解决问题'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Frequently requires assistance and cannot solve common problems independently.', zh: '较差 - 经常需要他人帮助，无法独立解决常见问题。' },
      2: { en: 'Needs Improvement - Sometimes solves common problems independently but often makes mistakes.', zh: '需改进 - 有时能独立解决问题，但出现错误。' },
      3: { en: 'Meets Expectations - Can solve common problems independently.', zh: '符合期望 - 能独立解决常见问题。' },
      4: { en: 'Exceeds Expectations - Solves problems independently and identifies potential issues proactively.', zh: '超出期望 - 能独立解决问题并主动发现潜在问题。' },
      5: { en: 'Exceptional - Solves problems at a high level independently and guides other carpenters.', zh: '卓越 - 高水平独立解决问题，并指导其他木工。' }
    }
  },
  
  // ========== ADAPTIBILITY CATEGORY (1 questions - 5%) ==========
  { //Q7
    groupCategory: { en: 'Adaptability', zh: '适应能力' },
    category: {
      en: 'Able to adapt to changes to tasks and things happening at site/factory',
      zh: '是否能够适应现场或任务中发生的变化'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot adapt independently to changes.', zh: '较差 - 无法独立适应图纸或要求变更。' },
      2: { en: 'Needs Improvement - Occasionally adapts independently but still requires frequent guidance.', zh: '需改进 - 偶尔能独立适应，但仍需频繁指导。' },
      3: { en: 'Meets Expectations - Can adapt independently to changes in drawings or requirements.', zh: '符合期望 - 能独立适应图纸或要求变更。' },
      4: { en: 'Exceeds Expectations - Adapts independently to changes and suggests improvements.', zh: '超出期望 - 独立适应变更并能提出改进建议。' },
      5: { en: 'Exceptional - Adapts independently to changes and actively improves processes.', zh: '卓越 - 独立适应变更并主动优化流程。' }
    }
  },

  // ========== ADAPTIBILITY CATEGORY (1 questions - 10%) ==========
  { //Q8
    groupCategory: { en: 'Self-Management', zh: '自我管理' },
    category: {
      en: 'Able to handle assigned tasks and complete tasks on time',
      zh: '是否能够处理分配的任务并按时完成任务'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Requires frequent supervision to complete tasks.', zh: '较差 - 需要频繁监督才能完成任务 。' },
      2: { en: 'Needs Improvement - Occasionally completes tasks independently but often makes errors.', zh: '需改进 - 独立完成任务不稳定，错误较多。' },
      3: { en: 'Meets Expectations - Completes tasks independently and corrects minor mistakes.', zh: '符合期望 - 独立完成任务并自我纠错。' },
      4: { en: 'Exceeds Expectations - Completes tasks independently and proactively improves methods.', zh: '超出期望 - 独立完成任务并主动优化方法。' },
      5: { en: 'Exceptional - Completes tasks independently at high quality and guides others to improve.', zh: '卓越 - 高质量独立完成任务并指导他人优化工作。' }
    }
  },
  
  // ========== PROJECT STANDARD CATEGORY (1 questions - 10%) ==========
  { //Q9
    groupCategory: { en: 'Project Standard', zh: '项目标准' },
    category: {
      en: 'Delivers work that meets project standards',
      zh: '是否做到项目标准的工作'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Work is frequently inaccurate and fails to meet Project requirements.', zh: '较差 - 工作经常不准确，无法满足项目要求。' },
      2: { en: 'Needs Improvement - Occasionally meets requirements but often contains errors.', zh: '需改进 - 偶尔能满足要求，但错误较多。' },
      3: { en: 'Meets Expectations - Ensures accuracy and client satisfaction reliably.', zh: '符合期望 - 确保准确度并满足客户要求。' },
      4: { en: 'Exceeds Expectations - Accurate work and proactively improves processes.', zh: '超出期望 - 工作准确且经常主动改善。' },
      5: { en: 'Exceptional - Consistently accurate and anticipates Project needs proactively.', zh: '卓越 - 高度准确并主动预见项目需求。' }
    }
  },
  
  // ========== TEAMWORK & COMMUNICATION CATEGORY (1 questions - 15%) ==========
  { //Q10
    groupCategory: { en: 'Teamwork & Communication', zh: '团队合作与沟通'},
    category: {
      en: 'Works well with team and able to communicate updates clearly',
      zh: '是否能够很好地与团队合作，并能够清晰地传达任务或项目进展'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Does not communicate or support team members.', zh: '较差 - 不与团队沟通，也不支持同事。' },
      2: { en: 'Needs Improvement - Occasionally shares information or supports peers, but inconsistently.', zh: '需改进 - 偶尔分享信息或支持同事，但不稳定。' },
      3: { en: 'Meets Expectations - Actively shares information and supports peers.', zh: '符合期望 - 主动分享信息并支持同事。' },
      4: { en: 'Exceeds Expectations - Supports peers and suggests process improvements.', zh: '超出期望 - 不仅支持同事，还提出改进建议。' },
      5: { en: 'Exceptional - Guides and assists peers proactively and enhances team collaboration.', zh: '卓越 - 主动指导和协助同事，并推动团队协作。' }
    }
  }
];

// Level 3 Questionnaire (10 questions)
const LEVEL_3_QUESTIONS: QuestionDefinition[] = [
  // ========== TECHNICAL SKILLS CATEGORY (5 questions - 35%) ==========
  { //Q1
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Plans and supervises daily site cleaning, waste removal, and material handling activities',
      zh: '计划并监督每日现场清洁、垃圾清理和材料搬运活动'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q2
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Coordinates with other trades to ensure clean and safe work areas are maintained',
      zh: '与其他工种协调，确保工作区域保持清洁和安全'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q3
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Manages manpower deployment and productivity of general workers',
      zh: '管理普通工人的人力调配和生产力'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q4
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Ensures compliance with site safety, housekeeping, and environmental requirements',
      zh: '确保遵守现场安全、清洁和环境要求'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q5
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Reports site conditions, manpower needs, and issues to the site supervisor',
      zh: '向现场主管报告现场情况、人力需求和问题'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },

  // ========== PROBLEM SOLVING CATEGORY (1 questions - 10%) ==========
  { //Q6
    groupCategory: { en: 'Problem Solving', zh: '问题解决'},
    category: {
      en: 'Able to solve problems when faced with challenges',
      zh: '在面对挑战时能否解决问题'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Frequently requires assistance and cannot solve common problems independently.', zh: '较差 - 经常需要他人帮助，无法独立解决常见问题。' },
      2: { en: 'Needs Improvement - Sometimes solves common problems independently but often makes mistakes.', zh: '需改进 - 有时能独立解决问题，但出现错误。' },
      3: { en: 'Meets Expectations - Can solve common problems independently.', zh: '符合期望 - 能独立解决常见问题。' },
      4: { en: 'Exceeds Expectations - Solves problems independently and identifies potential issues proactively.', zh: '超出期望 - 能独立解决问题并主动发现潜在问题。' },
      5: { en: 'Exceptional - Solves problems at a high level independently and guides other carpenters.', zh: '卓越 - 高水平独立解决问题，并指导其他木工。' }
    }
  },
  
  // ========== ADAPTIBILITY CATEGORY (1 questions - 5%) ==========
  { //Q7
    groupCategory: { en: 'Adaptability', zh: '适应能力' },
    category: {
      en: 'Able to adapt to changes to tasks and things happening at site/factory',
      zh: '是否能够适应现场或任务中发生的变化'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot adapt independently to changes.', zh: '较差 - 无法独立适应图纸或要求变更。' },
      2: { en: 'Needs Improvement - Occasionally adapts independently but still requires frequent guidance.', zh: '需改进 - 偶尔能独立适应，但仍需频繁指导。' },
      3: { en: 'Meets Expectations - Can adapt independently to changes in drawings or requirements.', zh: '符合期望 - 能独立适应图纸或要求变更。' },
      4: { en: 'Exceeds Expectations - Adapts independently to changes and suggests improvements.', zh: '超出期望 - 独立适应变更并能提出改进建议。' },
      5: { en: 'Exceptional - Adapts independently to changes and actively improves processes.', zh: '卓越 - 独立适应变更并主动优化流程。' }
    }
  },

  // ========== ADAPTIBILITY CATEGORY (1 questions - 10%) ==========
  { //Q8
    groupCategory: { en: 'Self-Management', zh: '自我管理' },
    category: {
      en: 'Able to handle assigned tasks and complete tasks on time',
      zh: '是否能够处理分配的任务并按时完成任务'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Requires frequent supervision to complete tasks.', zh: '较差 - 需要频繁监督才能完成任务 。' },
      2: { en: 'Needs Improvement - Occasionally completes tasks independently but often makes errors.', zh: '需改进 - 独立完成任务不稳定，错误较多。' },
      3: { en: 'Meets Expectations - Completes tasks independently and corrects minor mistakes.', zh: '符合期望 - 独立完成任务并自我纠错。' },
      4: { en: 'Exceeds Expectations - Completes tasks independently and proactively improves methods.', zh: '超出期望 - 独立完成任务并主动优化方法。' },
      5: { en: 'Exceptional - Completes tasks independently at high quality and guides others to improve.', zh: '卓越 - 高质量独立完成任务并指导他人优化工作。' }
    }
  },
  
  // ========== PROJECT STANDARD CATEGORY (1 questions - 10%) ==========
  { //Q9
    groupCategory: { en: 'Project Standard', zh: '项目标准' },
    category: {
      en: 'Delivers work that meets project standards',
      zh: '是否做到项目标准的工作'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Work is frequently inaccurate and fails to meet Project requirements.', zh: '较差 - 工作经常不准确，无法满足项目要求。' },
      2: { en: 'Needs Improvement - Occasionally meets requirements but often contains errors.', zh: '需改进 - 偶尔能满足要求，但错误较多。' },
      3: { en: 'Meets Expectations - Ensures accuracy and client satisfaction reliably.', zh: '符合期望 - 确保准确度并满足客户要求。' },
      4: { en: 'Exceeds Expectations - Accurate work and proactively improves processes.', zh: '超出期望 - 工作准确且经常主动改善。' },
      5: { en: 'Exceptional - Consistently accurate and anticipates Project needs proactively.', zh: '卓越 - 高度准确并主动预见项目需求。' }
    }
  },
  
  // ========== TEAMWORK & COMMUNICATION CATEGORY (1 questions - 15%) ==========
  { //Q10
    groupCategory: { en: 'Teamwork & Communication', zh: '团队合作与沟通'},
    category: {
      en: 'Works well with team and able to communicate updates clearly',
      zh: '是否能够很好地与团队合作，并能够清晰地传达任务或项目进展'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Does not communicate or support team members.', zh: '较差 - 不与团队沟通，也不支持同事。' },
      2: { en: 'Needs Improvement - Occasionally shares information or supports peers, but inconsistently.', zh: '需改进 - 偶尔分享信息或支持同事，但不稳定。' },
      3: { en: 'Meets Expectations - Actively shares information and supports peers.', zh: '符合期望 - 主动分享信息并支持同事。' },
      4: { en: 'Exceeds Expectations - Supports peers and suggests process improvements.', zh: '超出期望 - 不仅支持同事，还提出改进建议。' },
      5: { en: 'Exceptional - Guides and assists peers proactively and enhances team collaboration.', zh: '卓越 - 主动指导和协助同事，并推动团队协作。' }
    }
  }
];

// Level 4 Questionnaire (10 questions)
const LEVEL_4_QUESTIONS: QuestionDefinition[] = [
  // ========== TECHNICAL SKILLS CATEGORY (5 questions - 35%) ==========
  { //Q1
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Possesses solid working knowledge of M&E systems and understands the limits of assigned supporting scope',
      zh: '员工具备扎实的机电系统工作知识，并清楚自身被分配支援范围的界限'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q2
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Able to interpret single line drawings and coordinate M&E installation sequencing with clear understanding of system interdependencies',
      zh: '员工能够解读单线图，并清楚掌握各机电系统之间的相互关联性，协调安装先后顺序'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q3
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Provides on-site technical demonstration of correct installation methods and proper tool handling to junior staff',
      zh: '员工在现场向初级员工示范正确的安装方法及工具使用方式'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q4
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Able to identify non-conformance or abnormal technical conditions within assigned scope and take corrective action on simple technical issues independently before escalating when necessary',
      zh: '员工能够识别自身职责范围内的不符合项或异常技术状况，并能独立处理简单技术问题；在必要时才向上级汇报'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },
  { //Q5
    groupCategory: { en: 'Technical Skills', zh: '技术技能' },
    category: {
      en: 'Able to identify non-conformance or abnormal technical conditions within assigned scope and take corrective action on simple technical issues independently before escalating when necessary',
      zh: '员工能够识别自身职责范围内的不符合项或异常技术状况，并能独立处理简单技术问题；在必要时才向上级汇报'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the task even when shown or instructed.', zh: '较差 - 即使在指导或示范下，也无法完成该项技能。' },
      2: { en: 'Needs Improvement - Can perform the task occasionally but requires frequent supervision or correction.', zh: '需改进 - 偶尔能完成任务，但经常需要监督或纠正。' },
      3: { en: 'Meets Expectations - Can perform the task about half of the time correctly, but still needs reminders or guidance.', zh: '符合期望 - 约有一半时间能正确完成，但仍需提醒或指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision and good consistency.', zh: '超出期望 - 大部分时间能熟练完成，几乎不需监督，表现稳定。' },
      5: { en: 'Exceptional - Performs the skill independently, accurately, and consistently with high workmanship quality.', zh: '卓越 - 能独立、准确且持续地完成任务，工作质量高。' }
    }
  },

  // ========== PROBLEM SOLVING CATEGORY (1 questions - 10%) ==========
  { //Q6
    groupCategory: { en: 'Problem Solving', zh: '问题解决'},
    category: {
      en: 'Able to solve problems when faced with challenges',
      zh: '在面对挑战时能否解决问题'
    },
    weight: 20,
    ratings: {
      1: { en: 'Poor - Frequently requires assistance and cannot solve common problems independently.', zh: '较差 - 经常需要他人帮助，无法独立解决常见问题。' },
      2: { en: 'Needs Improvement - Sometimes solves common problems independently but often makes mistakes.', zh: '需改进 - 有时能独立解决问题，但出现错误。' },
      3: { en: 'Meets Expectations - Can solve common problems independently.', zh: '符合期望 - 能独立解决常见问题。' },
      4: { en: 'Exceeds Expectations - Solves problems independently and identifies potential issues proactively.', zh: '超出期望 - 能独立解决问题并主动发现潜在问题。' },
      5: { en: 'Exceptional - Solves problems at a high level independently and guides other carpenters.', zh: '卓越 - 高水平独立解决问题，并指导其他木工。' }
    }
  },
  
  // ========== ADAPTIBILITY CATEGORY (1 questions - 5%) ==========
  { //Q7
    groupCategory: { en: 'Adaptability', zh: '适应能力' },
    category: {
      en: 'Able to adapt to changes to tasks and things happening at site/factory',
      zh: '是否能够适应现场或任务中发生的变化'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot adapt independently to changes.', zh: '较差 - 无法独立适应图纸或要求变更。' },
      2: { en: 'Needs Improvement - Occasionally adapts independently but still requires frequent guidance.', zh: '需改进 - 偶尔能独立适应，但仍需频繁指导。' },
      3: { en: 'Meets Expectations - Can adapt independently to changes in drawings or requirements.', zh: '符合期望 - 能独立适应图纸或要求变更。' },
      4: { en: 'Exceeds Expectations - Adapts independently to changes and suggests improvements.', zh: '超出期望 - 独立适应变更并能提出改进建议。' },
      5: { en: 'Exceptional - Adapts independently to changes and actively improves processes.', zh: '卓越 - 独立适应变更并主动优化流程。' }
    }
  },

  // ========== ADAPTIBILITY CATEGORY (1 questions - 10%) ==========
  { //Q8
    groupCategory: { en: 'Self-Management', zh: '自我管理' },
    category: {
      en: 'Able to handle assigned tasks and complete tasks on time',
      zh: '是否能够处理分配的任务并按时完成任务'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Requires frequent supervision to complete tasks.', zh: '较差 - 需要频繁监督才能完成任务 。' },
      2: { en: 'Needs Improvement - Occasionally completes tasks independently but often makes errors.', zh: '需改进 - 独立完成任务不稳定，错误较多。' },
      3: { en: 'Meets Expectations - Completes tasks independently and corrects minor mistakes.', zh: '符合期望 - 独立完成任务并自我纠错。' },
      4: { en: 'Exceeds Expectations - Completes tasks independently and proactively improves methods.', zh: '超出期望 - 独立完成任务并主动优化方法。' },
      5: { en: 'Exceptional - Completes tasks independently at high quality and guides others to improve.', zh: '卓越 - 高质量独立完成任务并指导他人优化工作。' }
    }
  },
  
  // ========== PROJECT STANDARD CATEGORY (1 questions - 10%) ==========
  { //Q9
    groupCategory: { en: 'Project Standard', zh: '项目标准' },
    category: {
      en: 'Delivers work that meets project standards',
      zh: '是否做到项目标准的工作'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Work is frequently inaccurate and fails to meet Project requirements.', zh: '较差 - 工作经常不准确，无法满足项目要求。' },
      2: { en: 'Needs Improvement - Occasionally meets requirements but often contains errors.', zh: '需改进 - 偶尔能满足要求，但错误较多。' },
      3: { en: 'Meets Expectations - Ensures accuracy and client satisfaction reliably.', zh: '符合期望 - 确保准确度并满足客户要求。' },
      4: { en: 'Exceeds Expectations - Accurate work and proactively improves processes.', zh: '超出期望 - 工作准确且经常主动改善。' },
      5: { en: 'Exceptional - Consistently accurate and anticipates Project needs proactively.', zh: '卓越 - 高度准确并主动预见项目需求。' }
    }
  },
  
  // ========== TEAMWORK & COMMUNICATION CATEGORY (1 questions - 15%) ==========
  { //Q10
    groupCategory: { en: 'Teamwork & Communication', zh: '团队合作与沟通'},
    category: {
      en: 'Works well with team and able to communicate updates clearly',
      zh: '是否能够很好地与团队合作，并能够清晰地传达任务或项目进展'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Does not communicate or support team members.', zh: '较差 - 不与团队沟通，也不支持同事。' },
      2: { en: 'Needs Improvement - Occasionally shares information or supports peers, but inconsistently.', zh: '需改进 - 偶尔分享信息或支持同事，但不稳定。' },
      3: { en: 'Meets Expectations - Actively shares information and supports peers.', zh: '符合期望 - 主动分享信息并支持同事。' },
      4: { en: 'Exceeds Expectations - Supports peers and suggests process improvements.', zh: '超出期望 - 不仅支持同事，还提出改进建议。' },
      5: { en: 'Exceptional - Guides and assists peers proactively and enhances team collaboration.', zh: '卓越 - 主动指导和协助同事，并推动团队协作。' }
    }
  }
];

// EXPORT CARPENTER_LEVELS - This was missing!
export const CARPENTER_LEVELS: CeilingLevel[] = [
  {
    id: 'level1',
    label: {
      en: 'Level 1',
      zh: '初级'
    },
    questions: LEVEL_1_QUESTIONS
  },
  {
    id: 'level2',
    label: {
      en: 'Level 2',
      zh: '中级'
    },
    questions: LEVEL_2_QUESTIONS
  },
  {
    id: 'level3',
    label: {
      en: 'Level 3',
      zh: '高级'
    },
    questions: LEVEL_3_QUESTIONS
  },
  {
    id: 'level4',
    label: {
      en: 'Level 4',
      zh: '专家'
    },
    questions: LEVEL_4_QUESTIONS
  }
];

export const SMILEYS = [
  { value: 1, icon: '😤', color: '#ef4444' },
  { value: 2, icon: '😢', color: '#f97316' },
  { value: 3, icon: '😐', color: '#3b82f6' },
  { value: 4, icon: '😊', color: '#22c55e' },
  { value: 5, icon: '😍', color: '#059669' }
];
