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
  // ========== TECHNICAL SKILLS CATEGORY (4 questions - 60%) ==========
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Understand the use of basic tools (drill, screw gun, measuring tools, putty knife, etc.)',
      zh: '能分辨基础施工工具的使用（电钻、螺丝枪、测量工具、腻子刀等）'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Understand basic ceiling systems, plastering, and putty work',
      zh: '了解基本天花板、批灰及腻子工序'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Assist with material preparation and handling',
      zh: '协助准备和搬运施工材料'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Perform simple tasks under supervision, including sanding and minor installation',
      zh: '在监督下进行简单施工和打磨'
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

  // ========== PROBLEM SOLVING CATEGORY (1 question - 5%) ==========
  {
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
  {
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
  {
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
  {
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
  {
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
  // ========== TECHNICAL SKILLS CATEGORY (5 questions - 50%) ==========
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Carry out ceiling installation, plastering, and putty application according to established work methods',
      zh: '按照既定施工方法完成天花安装、批灰及腻子施工'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Perform minor surface correction and touch-up works to achieve required surface condition',
      zh: '进行小范围表面修整及补平工作，以达到所需的施工表面状态'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Execute measurement, cutting, leveling, and sanding with proper technique and tool handling',
      zh: '运用正确施工方法与工具进行测量、裁剪、找平及打磨'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Apply wall and ceiling finishing materials in accordance with approved material type and application method',
      zh: '根据核准材料种类及施工方式完成墙面与天花板饰面施工'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Maintain consistent workmanship across assigned installation and finishing tasks',
      zh: '在所负责的安装及饰面工作中保持稳定的施工表现'
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
  {
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
  {
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
  {
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
  {
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
  {
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
  // ========== TECHNICAL SKILLS CATEGORY (10 questions - 35%) ==========
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Lead small ceiling installation teams on site',
      zh: '带领小型天花板安装团队进行现场施工'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Execute ceiling installation based on approved drawings and instructions',
      zh: '根据已批准的图纸及指示进行天花板安装施工'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Handle complex ceiling installation works (Curved ceilings, multi-level ceilings, special details, tight tolerances)',
      zh: '处理复杂天花板安装工程 (如弧形天花、多层天花、特殊节点及高精度要求的施工）'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Make necessary layout or fitting adjustments during installation to suit site conditions',
      zh: '根据现场实际情况，在安装过程中进行必要的尺寸或定位调整'
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
  {
    groupCategory: {
      en: 'Technical Skills',
      zh: '技术技能'
    },
    category: {
      en: 'Guide and train junior staff in workmanship and quality standards by reviewing and comparing installation work (level, alignment, joint finishing, fixing method, overall quality)',
      zh: '对初级员工进行施工质量培训与指导，通过检查和对比安装效果（水平度、平整度、接口质量、固定方式及整体安装效果）提升施工能力'
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
  {
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
  {
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
  {
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
  {
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
  {
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
  }
];

export const SMILEYS = [
  { value: 1, icon: '😤', color: '#ef4444' },
  { value: 2, icon: '😢', color: '#f97316' },
  { value: 3, icon: '😐', color: '#3b82f6' },
  { value: 4, icon: '😊', color: '#22c55e' },
  { value: 5, icon: '😍', color: '#059669' }
];
