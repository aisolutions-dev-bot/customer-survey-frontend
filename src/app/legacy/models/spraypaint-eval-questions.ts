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
  // ========== TECHNICAL SKILLS CATEGORY (6 questions - 60%) ==========
  { //Q1
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Understand the basic workflow of indoor spray painting operations （e.g. spray room layout, tools, and safety rules)',
      zh: '了解室内喷漆作业的基本流程（如喷漆房布局、工具使用和安全规则）'
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
  { //Q2
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to identify basic material types (e.g. metal, boards, panels, paint, thinner, hardener etc.)  for required works',
      zh: '能辨认基本材料类型（如金属、板材、面板等）以满足施工要求'
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
  { //Q3
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Assist with racking, de-racking, and proper placement of workpieces',
      zh: '协助工件上架、下架及正确摆放'
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
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Perform basic putty work to fill obvious surface defects',
      zh: '进行基础批土（Putty），填补明显表面缺陷'
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
  { //Q5
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Carry out basic sanding (rough sanding) according to material type to prepare for painting',
      zh: '根据材料进行基础打磨（粗磨），为喷漆做准备'
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
  { //Q6
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Perform simple spray painting tasks under supervision',
      zh: '在指导下进行简单喷漆作业 '
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

  // ========== PROBLEM SOLVING CATEGORY (1 question - 5%) ==========
  { //Q7
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
  { //Q8
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
  { //Q9
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
  { //Q10
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
  { //Q11
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

// Level 2 Questionnaire (11 questions)
const LEVEL_2_QUESTIONS: QuestionDefinition[] = [
  // ========== TECHNICAL SKILLS CATEGORY (6 questions - 50%) ==========
  { //Q1
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Independently complete the full surface preparation process (puttying, sanding, polishing)',
      zh: '可独立完成完整表面处理流程（批土、打磨、抛光）'
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
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Understand different surface treatment requirements for different materials',
      zh: '了解不同材料对表面处理的不同要求'
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
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Select appropriate spray painting methods based on material type',
      zh: '能根据材料类型选择合适的喷漆方式'
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
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to remove and fix parts for small or detailed painting',
      zh: '能够拆卸和固定零件以进行小型或精细的涂装'
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
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to control paint film thickness to avoid runs, orange peel, and uneven finishes',
      zh: '能够控制油漆膜厚度，避免流挂、橘皮和不均匀的表面效果'
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
  { //Q6
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to repair common spray painting defects',
      zh: '能够修复常见的喷涂涂装缺陷'
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
  { //Q7
    groupCategory: {
      en: 'Problem Solving',
      zh: '问题解决'
    },
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
  { //Q8
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
      1: { en: 'Poor - Cannot adapt independently to changes.', zh: '较差 - 无法独立适应图纸或要求变更。' },
      2: { en: 'Needs Improvement - Occasionally adapts independently but still requires frequent guidance.', zh: '需改进 - 偶尔能独立适应，但仍需频繁指导。' },
      3: { en: 'Meets Expectations - Can adapt independently to changes in drawings or requirements.', zh: '符合期望 - 能独立适应图纸或要求变更。' },
      4: { en: 'Exceeds Expectations - Adapts independently to changes and suggests improvements.', zh: '超出期望 - 独立适应变更并能提出改进建议。' },
      5: { en: 'Exceptional - Adapts independently to changes and actively improves processes.', zh: '卓越 - 独立适应变更并主动优化流程。' }
    }
  },

  // ========== ADAPTIBILITY CATEGORY (1 questions - 10%) ==========
  { //Q9
    groupCategory: {
      en: 'Self-Management',
      zh: '自我管理'
    },
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
  { //Q10
    groupCategory: {
      en: 'Project Standard',
      zh: '项目标准'
    },
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
  { //Q11
    groupCategory: {
      en: 'Teamwork & Communication',
      zh: '团队合作与沟通'
    },
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

// Senior Carpenter Questionnaire (11 questions)
const LEVEL_3_QUESTIONS: QuestionDefinition[] = [  
  // ========== TECHNICAL SKILLS CATEGORY (6 questions - 35%) ==========
  { //Q1
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Fully understand the characteristics of different materials and their impact on painting effects',
      zh: '充分了解不同材料特性及其对喷漆效果的影响'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the skill even when instructed or shown; lacks required technical understanding.', zh: '较差 - 即使在指导或示范下，也无法完成技能操作，对相关技术缺乏理解。' },
      2: { en: 'Needs Improvement - Can perform the skill occasionally with frequent supervision; results are inconsistent or inaccurate.', zh: '需改进 - 偶尔能完成，但需要频繁监督或指导，结果不稳定或不准确。' },
      3: { en: 'Meets Expectations - Performs the skill correctly about half of the time; still needs guidance on complex tasks.', zh: '符合期望 - 能在一般情况下完成，但遇到复杂工作时仍需指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision; work meets project standards.', zh: '超出期望 - 大部分时间能独立完成，偶尔需监督，工作质量符合项目标准。' },
      5: { en: 'Exceptional - Consistently performs at a high technical level; independently solves problems and delivers precise, high-quality results.', zh: '卓越 - 始终保持高技术水平，能独立解决问题并交付高质量的成果。' }
    }
  },
  { //Q2
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to make colours independently (tiao se)',
      zh: '能够独立调配颜色'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot perform the skill even when instructed or shown; lacks required technical understanding.', zh: '较差 - 即使在指导或示范下，也无法完成技能操作，对相关技术缺乏理解。' },
      2: { en: 'Needs Improvement - Can perform the skill occasionally with frequent supervision; results are inconsistent or inaccurate.', zh: '需改进 - 偶尔能完成，但需要频繁监督或指导，结果不稳定或不准确。' },
      3: { en: 'Meets Expectations - Performs the skill correctly about half of the time; still needs guidance on complex tasks.', zh: '符合期望 - 能在一般情况下完成，但遇到复杂工作时仍需指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision; work meets project standards.', zh: '超出期望 - 大部分时间能独立完成，偶尔需监督，工作质量符合项目标准。' },
      5: { en: 'Exceptional - Consistently performs at a high technical level; independently solves problems and delivers precise, high-quality results.', zh: '卓越 - 始终保持高技术水平，能独立解决问题并交付高质量的成果。' }
    }
  },
  { //Q3
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to complete high-standard paint finishes (glossy, matte, consistent appearance)',
      zh: '可完成高要求喷漆成品（高光、哑光、外观一致）'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the skill even when instructed or shown; lacks required technical understanding.', zh: '较差 - 即使在指导或示范下，也无法完成技能操作，对相关技术缺乏理解。' },
      2: { en: 'Needs Improvement - Can perform the skill occasionally with frequent supervision; results are inconsistent or inaccurate.', zh: '需改进 - 偶尔能完成，但需要频繁监督或指导，结果不稳定或不准确。' },
      3: { en: 'Meets Expectations - Performs the skill correctly about half of the time; still needs guidance on complex tasks.', zh: '符合期望 - 能在一般情况下完成，但遇到复杂工作时仍需指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision; work meets project standards.', zh: '超出期望 - 大部分时间能独立完成，偶尔需监督，工作质量符合项目标准。' },
      5: { en: 'Exceptional - Consistently performs at a high technical level; independently solves problems and delivers precise, high-quality results.', zh: '卓越 - 始终保持高技术水平，能独立解决问题并交付高质量的成果。' }
    }
  },
  { //Q4
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to control color consistency, gloss, and surface smoothness according to client requirements',
      zh: '精细控制颜色一致性、光泽度及表面平整度以满足客户要求'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the skill even when instructed or shown; lacks required technical understanding.', zh: '较差 - 即使在指导或示范下，也无法完成技能操作，对相关技术缺乏理解。' },
      2: { en: 'Needs Improvement - Can perform the skill occasionally with frequent supervision; results are inconsistent or inaccurate.', zh: '需改进 - 偶尔能完成，但需要频繁监督或指导，结果不稳定或不准确。' },
      3: { en: 'Meets Expectations - Performs the skill correctly about half of the time; still needs guidance on complex tasks.', zh: '符合期望 - 能在一般情况下完成，但遇到复杂工作时仍需指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision; work meets project standards.', zh: '超出期望 - 大部分时间能独立完成，偶尔需监督，工作质量符合项目标准。' },
      5: { en: 'Exceptional - Consistently performs at a high technical level; independently solves problems and delivers precise, high-quality results.', zh: '卓越 - 始终保持高技术水平，能独立解决问题并交付高质量的成果。' }
    }
  },
  { //Q5
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Perform spray painting independently, ensuring even color and full coverage',
      zh: '独立进行喷漆作业，确保颜色均匀、覆盖完整'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the skill even when instructed or shown; lacks required technical understanding.', zh: '较差 - 即使在指导或示范下，也无法完成技能操作，对相关技术缺乏理解。' },
      2: { en: 'Needs Improvement - Can perform the skill occasionally with frequent supervision; results are inconsistent or inaccurate.', zh: '需改进 - 偶尔能完成，但需要频繁监督或指导，结果不稳定或不准确。' },
      3: { en: 'Meets Expectations - Performs the skill correctly about half of the time; still needs guidance on complex tasks.', zh: '符合期望 - 能在一般情况下完成，但遇到复杂工作时仍需指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision; work meets project standards.', zh: '超出期望 - 大部分时间能独立完成，偶尔需监督，工作质量符合项目标准。' },
      5: { en: 'Exceptional - Consistently performs at a high technical level; independently solves problems and delivers precise, high-quality results.', zh: '卓越 - 始终保持高技术水平，能独立解决问题并交付高质量的成果。' }
    }
  },
  { //Q6
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Able to guide Skill Level 1–2 staff and maintain quality standards',
      zh: '员工能指导技能等级1–2的员工并保持品质'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot perform the skill even when instructed or shown; lacks required technical understanding.', zh: '较差 - 即使在指导或示范下，也无法完成技能操作，对相关技术缺乏理解。' },
      2: { en: 'Needs Improvement - Can perform the skill occasionally with frequent supervision; results are inconsistent or inaccurate.', zh: '需改进 - 偶尔能完成，但需要频繁监督或指导，结果不稳定或不准确。' },
      3: { en: 'Meets Expectations - Performs the skill correctly about half of the time; still needs guidance on complex tasks.', zh: '符合期望 - 能在一般情况下完成，但遇到复杂工作时仍需指导。' },
      4: { en: 'Exceeds Expectations - Performs the skill well most of the time, with minimal supervision; work meets project standards.', zh: '超出期望 - 大部分时间能独立完成，偶尔需监督，工作质量符合项目标准。' },
      5: { en: 'Exceptional - Consistently performs at a high technical level; independently solves problems and delivers precise, high-quality results.', zh: '卓越 - 始终保持高技术水平，能独立解决问题并交付高质量的成果。' }
    }
  },

  // ========== PROBLEM SOLVING CATEGORY (1 questions - 20%) ==========
  { //Q7
    groupCategory: {
      en: 'Problem Solving',
      zh: '问题解决'
    },
    category: {
      en: 'Able to solve problems when faced with challenges',
      zh: '在面对挑战时能否解决问题'
    },
    weight: 20,
    ratings: {
      1: { en: 'Poor - Cannot solve complex problems independently, requires constant guidance.', zh: '较差 - 不能独立解决复杂问题，需要持续指导。' },
      2: { en: 'Needs Improvement - Inconsistently solves complex problems independently, limited effectiveness in guiding others.', zh: '需改进 - 独立解决复杂问题不稳定，指导他人效果有限。' },
      3: { en: 'Meets Expectations - Can solve complex problems independently and guide others.', zh: '符合期望 - 能独立解决复杂问题并指导他人。' },
      4: { en: 'Exceeds Expectations - Solves complex problems independently and guides the team effectively.', zh: '超出期望 - 独立解决复杂问题并有效指导团队。' },
      5: { en: 'Exceptional - Solves complex problems at a high level, introduces innovative solutions, and develops team capability.', zh: '卓越 - 高水平解决复杂问题，创新方法并培养团队能力。' }
    }
  },
  
  // ========== PROBLEM SOLVING CATEGORY (1 questions - 5%) ==========
  { //Q8
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
      1: { en: 'Poor - Cannot adapt to changes and does not guide others.', zh: '较差 - 无法适应变更，也无法指导他人 。' },
      2: { en: 'Needs Improvement - Adapts to changes inconsistently and guidance to others is limited.', zh: '需改进 - 适应变更不稳定，指导他人效果有限 。' },
      3: { en: 'Meets Expectations - Can adapt to changes and guide others.', zh: '符合期望 - 能适应变更并指导他人 。' },
      4: { en: 'Exceeds Expectations - Proactively guides others to adapt and suggests improvements.', zh: '超出期望 - 主动指导他人适应变更并提出改进建议。' },
      5: { en: 'Exceptional - Provides high-level guidance for adaptation, optimizes processes, and trains the team.', zh: '卓越 - 高水平指导他人适应变更，优化流程并培训团队 。' }
    }
  },
  
  // ========== PROBLEM SOLVING CATEGORY (1 questions - 10%) ==========
  { //Q9
    groupCategory: {
      en: 'Self-Management',
      zh: '自我管理'
    },
    category: {
      en: 'Able to handle assigned tasks and complete tasks on time',
      zh: '是否能够处理分配的任务并按时完成任务'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot manage any portion of the site independently and fails to supervise others.', zh: '较差 - 无法独立管理现场，也不能监督他人。' },
      2: { en: 'Needs Improvement - Site management is inconsistent and supervision of others is limited.', zh: '需改进 - 独立管理现场不稳定，对他人监督有限 。' },
      3: { en: 'Meets Expectations - Can independently manage a portion of the site and supervise others.', zh: '符合期望 - 能独立负责一部分现场并监督他人。' },
      4: { en: 'Exceeds Expectations - Manages site independently and guides team effectively.', zh: '超出期望 - 独立管理现场并有效指导团队。' },
      5: { en: 'Exceptional - Manages site at a high level, optimizes workflow, and develops subordinates.', zh: '卓越 - 高水平管理现场，优化团队工作流程并培养下属。' }
    }
  },

  // ========== PROJECT STANDARD CATEGORY (1 questions - 15%) ==========
  { //Q10
    groupCategory: {
      en: 'Project Standard',
      zh: '项目标准'
    },
    category: {
      en: 'Delivers work that meets project standards',
      zh: '是否做到项目标准的工作'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Work fails to meet Project needs and does not communicate proactively.', zh: '较差 - 工作无法满足项目需求，也不主动沟通。' },
      2: { en: 'Needs Improvement - Occasionally meets project requirements but communication is insufficient.', zh: '需改进 - 偶尔满足项目要求，但沟通不充分。' },
      3: { en: 'Meets Expectations - Anticipates project needs and communicates proactively.', zh: '符合期望 - 能预见项目需求并主动沟通。' },
      4: { en: 'Exceeds Expectations - Proactively identifies potential needs and optimizes communication.', zh: '超出期望 - 主动识别潜在需求并优化项目沟通。' },
      5: { en: 'Exceptional - Anticipates project needs at a high level, resolves potential issues in advance, and guides the team.', zh: '卓越 - 高度预见项目需求，提前解决潜在问题并指导团队。' }
    }
  },
  
  // ========== TEAMWORK & COMMUNICATION CATEGORY (1 questions - 15%) ==========
  { //Q11
    groupCategory: {
      en: 'Teamwork & Communication',
      zh: '团队合作与沟通'
    },
    category: {
      en: 'Works well with team and able to communicate updates clearly',
      zh: '是否能够很好地与团队合作，并能够清晰地传达任务或项目进展'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Does not communicate or guide team members.', zh: '较差 - 不与团队沟通，也不指导他人。' },
      2: { en: 'Needs Improvement - Occasionally guides team members or coordinates with management, but inconsistently.', zh: '需改进 - 偶尔指导同事或协调管理层，但不稳定。' },
      3: { en: 'Meets Expectations - Guides junior/intermediate carpenters and coordinates with management.', zh: '符合期望 - 指导初中级木工并与管理层协调。' },
      4: { en: 'Exceeds Expectations - Actively guides team and suggests improvements.', zh: '超出期望 - 主动指导团队并提出改进建议。' },
      5: { en: 'Exceptional - Provides high-level guidance, optimizes collaboration, and enhances overall team performance.', zh: '卓越 - 高水平指导团队，优化协作并提升整体团队绩效。' }
    }
  }
];

const LEVEL_4_QUESTIONS: QuestionDefinition[] = [
  // ========== TECHNICAL SKILLS CATEGORY (5 questions - 35%) ==========
  { //Q1
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Master complex custom finishes (e.g., metallic, pearlescent, multi-coat textured, high-durability coatings) and formulate bespoke paint mixtures for non-standard substrates',
      zh: '精通复杂特殊涂层（如金属漆、珠光漆、多层纹理漆、高耐候/耐化学工业涂料），并能针对特殊基材调制专属涂料配方'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot reproduce complex finishes or mix non-standard coatings even with instruction or reference samples.', zh: '较差 - 即使在指导或参考样板下，也无法复现复杂涂层或调制非标涂料。' },
      2: { en: 'Needs Improvement - Can reproduce complex finishes occasionally but requires close supervision and frequent rework.', zh: '需改进 - 偶尔能复现复杂涂层，但需要密切监督且返工频繁。' },
      3: { en: 'Meets Expectations - Reproduces complex finishes to specification about half of the time; still needs guidance on unfamiliar substrates.', zh: '符合期望 - 约有一半时间能按规格复现复杂涂层，遇到陌生基材时仍需指导。' },
      4: { en: 'Exceeds Expectations - Reproduces complex finishes reliably with minimal supervision and mixes coatings correctly for most non-standard substrates.', zh: '超出期望 - 大部分时间能稳定复现复杂涂层，几乎不需监督，并能正确调制多数非标基材涂料。' },
      5: { en: 'Exceptional - Consistently masters metallic, pearlescent and multi-coat finishes, and formulates bespoke mixtures for any non-standard substrate with documented results.', zh: '卓越 - 能持续精通金属漆、珠光漆及多层涂层，并能为任何非标基材调制专属配方且留有记录。' }
    }
  },
  { //Q2
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Perform complex color matching for faded, aged, or custom-blend surfaces, establishing standard color cards and gloss metrics for factory-wide quality assurance',
      zh: '针对老化、退色或特殊混合表面进行精准色差调整，制定工厂级标准色卡与光泽度指标'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot adjust colour discrepancies; matches by eye only and fails on faded or aged surfaces.', zh: '较差 - 无法调整色差，仅凭肉眼比色，面对退色或老化表面即失效。' },
      2: { en: 'Needs Improvement - Can adjust simple colour differences but needs frequent correction on custom-blend or aged surfaces.', zh: '需改进 - 能调整简单色差，但遇到特殊混合或老化表面时需频繁纠正。' },
      3: { en: 'Meets Expectations - Achieves acceptable colour matches about half of the time; standard colour cards are still incomplete.', zh: '符合期望 - 约有一半时间能达成可接受的配色，标准色卡仍不完整。' },
      4: { en: 'Exceeds Expectations - Matches faded, aged and custom-blend surfaces reliably and maintains usable colour and gloss references.', zh: '超出期望 - 能稳定匹配退色、老化及特殊混合表面，并维护可用的颜色与光泽参照。' },
      5: { en: 'Exceptional - Delivers precise colour and gloss matching across all surface conditions and establishes factory-wide standard colour cards and gloss metrics.', zh: '卓越 - 能在各种表面条件下精准匹配颜色与光泽，并制定工厂级标准色卡与光泽度指标。' }
    }
  },
  { //Q3
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Design, evaluate, and optimize standard operating procedures (SOPs) for spraying, curing, and booth air-flow to minimize material waste, reduce cycle time, and maximize throughput',
      zh: '设计并优化喷涂、烘干及喷漆房气流SOP，降低涂料损耗、缩短生产周期并提升产能'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Follows existing procedures but cannot evaluate or improve them.', zh: '较差 - 仅能遵循现有流程，无法评估或改进。' },
      2: { en: 'Needs Improvement - Suggests occasional process improvements but cannot document or validate them.', zh: '需改进 - 偶尔提出流程改进建议，但无法形成文件或验证效果。' },
      3: { en: 'Meets Expectations - Identifies process weaknesses about half of the time and documents workable SOP revisions.', zh: '符合期望 - 约有一半时间能识别流程弱点并编写可行的SOP修订。' },
      4: { en: 'Exceeds Expectations - Designs and validates SOPs for spraying, curing and booth air-flow that measurably reduce waste or cycle time.', zh: '超出期望 - 能设计并验证喷涂、烘干及气流SOP，并实际降低损耗或缩短周期。' },
      5: { en: 'Exceptional - Systematically optimizes the full spray process, delivering documented gains in material yield and throughput across projects.', zh: '卓越 - 系统性优化整个喷涂流程，在各项目上实现可量化的用料率与产能提升。' }
    }
  },
  { //Q4
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Troubleshooting: Conduct advanced diagnostics, preventive maintenance, and precise calibration of high-end spraying equipment, automated spray systems, and ventilation filtration units',
      zh: '具备高端喷涂设备、自动化喷涂系统及通风过滤系统的故障诊断、精密校准与定期预防性维护能力'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Cannot diagnose or calibrate spraying equipment; relies entirely on others for maintenance.', zh: '较差 - 无法诊断或校准喷涂设备，完全依赖他人维护。' },
      2: { en: 'Needs Improvement - Performs basic maintenance but requires supervision for diagnostics and calibration.', zh: '需改进 - 能进行基础维护，但诊断与校准仍需监督。' },
      3: { en: 'Meets Expectations - Diagnoses and calibrates standard equipment about half of the time; automated systems still need specialist help.', zh: '符合期望 - 约有一半时间能诊断与校准标准设备，自动化系统仍需专业人员协助。' },
      4: { en: 'Exceeds Expectations - Diagnoses and calibrates high-end and automated spray systems reliably, and schedules preventive maintenance.', zh: '超出期望 - 能稳定诊断与校准高端及自动化喷涂系统，并安排预防性维护。' },
      5: { en: 'Exceptional - Maintains full equipment availability through advanced diagnostics, precise calibration and preventive programmes, with minimal unplanned downtime.', zh: '卓越 - 通过先进诊断、精密校准与预防性计划保障设备可用率，将非计划停机降至最低。' }
    }
  },
  { //Q5
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Diagnose underlying causes of complex spray defects (e.g., micro-blistering, adhesion failure, fish-eyes) across environmental, material, and operator variables, implementing permanent corrective actions',
      zh: '从环境、材料和人员多维度诊断复杂喷涂缺陷（如微气泡、附着力失效、鱼眼等）的根本原因，并制定纠正防错措施'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Cannot identify defect causes; defects recur without resolution.', zh: '较差 - 无法识别缺陷成因，问题反复出现且无法解决。' },
      2: { en: 'Needs Improvement - Identifies obvious defects but treats symptoms rather than root causes.', zh: '需改进 - 能识别明显缺陷，但仅处理表象而非根本原因。' },
      3: { en: 'Meets Expectations - Traces common defects to their causes about half of the time and applies effective corrections.', zh: '符合期望 - 约有一半时间能追溯常见缺陷成因并有效纠正。' },
      4: { en: 'Exceeds Expectations - Diagnoses micro-blistering, adhesion failure and fish-eyes across environmental, material and operator factors, and prevents recurrence.', zh: '超出期望 - 能从环境、材料和人员因素诊断微气泡、附着力失效及鱼眼等问题，并防止复发。' },
      5: { en: 'Exceptional - Resolves complex multi-factor defects permanently, embeds corrective and preventive actions into process standards, and shares findings across teams.', zh: '卓越 - 能永久解决多因素复杂缺陷，将纠正与预防措施纳入工艺标准，并在各团队间推广。' }
    }
  },

  // ========== PROBLEM SOLVING CATEGORY (1 question - 20%) ==========
  { //Q6
    groupCategory: {
      en: 'Problem Solving',
      zh: '问题解决'
    },
    category: {
      en: 'Solve critical, high-risk technical bottlenecks, establish defect-prevention frameworks, and drive continuous process improvement across teams',
      zh: '在面对重大或高难度技术瓶颈时能主动解决，建立防错与质量预防机制，推动团队持续工艺改进'
    },
    weight: 20,
    ratings: {
      1: { en: 'Poor - Avoids or escalates technical problems without contributing to a solution.', zh: '较差 - 回避技术问题或直接上报，未参与解决。' },
      2: { en: 'Needs Improvement - Attempts solutions for routine problems but struggles with high-risk technical issues.', zh: '需改进 - 能尝试解决常规问题，但面对高风险技术问题则力不从心。' },
      3: { en: 'Meets Expectations - Resolves routine problems independently about half of the time; major bottlenecks still require escalation.', zh: '符合期望 - 约有一半时间能独立解决常规问题，重大瓶颈仍需上报。' },
      4: { en: 'Exceeds Expectations - Takes ownership of critical bottlenecks and delivers workable solutions that hold.', zh: '超出期望 - 主动承担重大瓶颈，并交付可持续奏效的解决方案。' },
      5: { en: 'Exceptional - Resolves critical, high-risk bottlenecks, builds defect-prevention frameworks, and drives continuous process improvement across teams.', zh: '卓越 - 能解决重大高风险瓶颈，建立防错与质量预防机制，并推动跨团队持续工艺改进。' }
    }
  },

  // ========== ADAPTABILITY CATEGORY (1 question - 5%) ==========
  { //Q7
    groupCategory: {
      en: 'Adaptability',
      zh: '适应能力'
    },
    category: {
      en: 'Proactively evaluate and integrate new spray technologies, eco-friendly/waterborne paint systems, and regulatory environmental standards into daily operations',
      zh: '是否能够主动评估并引入新型喷涂技术、环保水性漆系统及最新环保合规标准'
    },
    weight: 5,
    ratings: {
      1: { en: 'Poor - Resists changes to methods, materials or site conditions.', zh: '较差 - 抗拒方法、材料或现场条件的变化。' },
      2: { en: 'Needs Improvement - Adapts to changes slowly and needs repeated guidance.', zh: '需改进 - 适应变化较慢，需要反复指导。' },
      3: { en: 'Meets Expectations - Adjusts to new methods or site conditions about half of the time without major disruption.', zh: '符合期望 - 约有一半时间能顺利适应新方法或现场条件，不致重大影响。' },
      4: { en: 'Exceeds Expectations - Adapts readily and evaluates new technologies or eco-friendly systems for practical use.', zh: '超出期望 - 能迅速适应，并评估新技术或环保系统的实用性。' },
      5: { en: 'Exceptional - Proactively introduces new spray technologies, waterborne systems and environmental standards into daily operations.', zh: '卓越 - 主动将新型喷涂技术、水性漆系统及环保合规标准引入日常作业。' }
    }
  },

  // ========== SELF-MANAGEMENT CATEGORY (1 question - 10%) ==========
  { //Q8
    groupCategory: {
      en: 'Self-Management',
      zh: '自我管理'
    },
    category: {
      en: 'Oversee site-wide paint inventory, material yield rates, and safety/EHS compliance while managing overall production schedules efficiently',
      zh: '是否能够统筹喷涂材料库存、用料出漆率及现场EHS安全合规，高效调控总体生产进度'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Does not track materials or schedules; safety and EHS requirements are frequently missed.', zh: '较差 - 不跟进材料与进度，安全与EHS要求经常被忽略。' },
      2: { en: 'Needs Improvement - Manages assigned tasks but needs reminders on inventory, yield or compliance.', zh: '需改进 - 能完成分配任务，但库存、用料率或合规事项需他人提醒。' },
      3: { en: 'Meets Expectations - Handles assigned tasks on time about half of the time and follows EHS requirements.', zh: '符合期望 - 约有一半时间能按时完成任务，并遵守EHS要求。' },
      4: { en: 'Exceeds Expectations - Manages own workload, tracks material usage, and keeps safety and EHS records current.', zh: '超出期望 - 能自主管理工作量，跟进材料用量，并保持安全与EHS记录更新。' },
      5: { en: 'Exceptional - Oversees site-wide paint inventory, yield rates and EHS compliance while keeping overall production schedules on track.', zh: '卓越 - 统筹全场喷涂材料库存、用料出漆率及EHS合规，并高效调控总体生产进度。' }
    }
  },

  // ========== PROJECT STANDARD CATEGORY (1 question - 15%) ==========
  { //Q9
    groupCategory: {
      en: 'Project Standard',
      zh: '项目标准'
    },
    category: {
      en: 'Establish rigorous Quality Control (QC) inspection standards, lead client sign-offs on high-value custom projects, and maintain zero-defect standards',
      zh: '是否能够制定严格的QC检验标准，负责高价值定制项目的客户验收，维持零缺陷交付'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Delivered work fails QC inspection and requires rework.', zh: '较差 - 交付成果未通过QC检验，需要返工。' },
      2: { en: 'Needs Improvement - Meets project standards occasionally but requires repeated correction before acceptance.', zh: '需改进 - 偶尔达到项目标准，但验收前需反复纠正。' },
      3: { en: 'Meets Expectations - Meets project standards about half of the time; high-value work still needs senior review.', zh: '符合期望 - 约有一半时间能达到项目标准，高价值项目仍需资深人员复核。' },
      4: { en: 'Exceeds Expectations - Consistently delivers to standard and applies QC checks before handover.', zh: '超出期望 - 能持续按标准交付，并在移交前执行QC检查。' },
      5: { en: 'Exceptional - Establishes rigorous QC inspection standards, leads client sign-off on high-value custom projects, and sustains zero-defect delivery.', zh: '卓越 - 制定严格的QC检验标准，主导高价值定制项目的客户验收，维持零缺陷交付。' }
    }
  },

  // ========== TEAMWORK & COMMUNICATION CATEGORY (1 question - 15%) ==========
  { //Q10
    groupCategory: {
      en: 'Teamwork & Communication',
      zh: '团队合作与沟通'
    },
    category: {
      en: 'Train, mentor, and evaluate Level 1-3 spray painters, cross-communicate effectively with project managers, and lead safety and technical briefings',
      zh: '是否能够很好地培训与考核技能等级1-3的员工，与项目经理及各部门有效沟通协调，并主持现场安全与技术例会'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - Does not train or communicate with team members.', zh: '较差 - 不培训也不与团队成员沟通。' },
      2: { en: 'Needs Improvement - Occasionally guides colleagues but avoids formal training or briefing duties.', zh: '需改进 - 偶尔指导同事，但回避正式培训或会议职责。' },
      3: { en: 'Meets Expectations - Supports and briefs team members about half of the time; formal assessment skills are still developing.', zh: '符合期望 - 约有一半时间能支持并简报团队成员，正式考核能力尚在培养。' },
      4: { en: 'Exceeds Expectations - Trains and mentors Level 1-3 painters and communicates clearly with project managers.', zh: '超出期望 - 能培训与指导1-3级喷涂人员，并与项目经理清晰沟通。' },
      5: { en: 'Exceptional - Trains, mentors and assesses Level 1-3 spray painters, coordinates across departments, and leads site safety and technical briefings.', zh: '卓越 - 能培训、指导并考核1-3级喷涂人员，跨部门协调，并主持现场安全与技术例会。' }
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
