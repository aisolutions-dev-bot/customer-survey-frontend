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

// Standard Questionnaire with Categories (5 questions)
export const BS_TENDER_STANDARD_QUESTIONS: QuestionDefinition[] = [
  // ========== COSTING CATEGORY (2 questions - 60%) ==========
  {
    groupCategory: {
      en: 'Tender Control',
      zh: '投标控制'
    },
    category: {
      en: 'Submission timeliness (internal review) - Whether the tender is submitted on time for internal review (as per the agreed timeline).',
      zh: '提交及时性（内部审查）- 招标是否按约定时间提交以进行内部审查。'
    },
    weight: 30,
    ratings: {
      1: { en: 'Poor - Failed to submit and late tender submission.', zh: '较差 - 未提交且投标迟交。' },
      2: { en: 'Needs Improvement - Very late till need supports from others.', zh: '需改进 - 非常迟，需要他人支持。' },
      3: { en: 'Meets Expectations - Late, will potentially affect the tender submission deadline.', zh: '符合期望 - 延迟提交，可能会影响投标提交截止日期。' },
      4: { en: 'Exceeds Expectations - Slightly delay but not affecting the tender submission deadline.', zh: '超出期望 - 稍有延迟但不影响投标提交截止日期。' },
      5: { en: 'Exceptional - Submit on time.', zh: '卓越 - 按时提交。' }
    }
  },
  {
    groupCategory: {
      en: 'Tender Control',
      zh: '投标控制'
    },
    category: {
      en: 'Tender accuracy (internal review) - number of revisions due to errors or incomplete information.',
      zh: '投标准确性（内部审核）— 因错误或信息不完整而进行的修订次数。'
    },
    weight: 30,
    ratings: {
      1: { en: 'Poor - Many major errors, overall accuracy below 65%, multiple revisions or review.', zh: '较差 - 许多重大错误，总体准确率低于65%，需要多次修改或审查。' },
      2: { en: 'Needs Improvement - > 3 major errors, overall accuracy between 66% - 75%, more than 2 revisions for review.', zh: '需改进 - >3个重大错误，总体准确率在66% - 75%之间，需要2次以上修改或审查。' },
      3: { en: 'Meets Expectations - 5 to 7 minor errors, overall accuracy between 76% to 85% with 2 revisions for review.', zh: '符合期望 - 5到7个次要错误，总体准确率在76%到85%之间，需要2次修改或审查。' },
      4: { en: 'Exceeds Expectations - 3 to 5 minor errors, overall accuracy between 86% to 95% with 1 revision for review.', zh: '超出期望 - 3到5个次要错误，总体准确率在86%到95%之间，需要1次修改或审查。' },
      5: { en: 'Exceptional - 1 to 2 minor errors, overall accuracy between 96% to 100% with final adjustment.', zh: '卓越 - 1到2个次要错误，总体准确率在96%到100%之间，仅需最终调整。' }
    }
  },

  // ========== DOCUMENTATION CATEGORY (1 question - 20%) ==========
  {
    groupCategory: {
      en: 'Document control',
      zh: '文件控制'
    },
    category: {
      en: 'Compliance with tender requirement - how well the tender meets the client’s specified requirements, i.e. quality of documentation and adherence to document specifications',
      zh: '符合招标要求 — 招标文件满足客户指定要求的程度，即文档质量和对文档规范的遵守情况。'
    },
    weight: 20,
    ratings: {
      1: { en: 'Poor - Non-compliance.', zh: '较差 - 不合规。' },
      2: { en: 'Needs Improvement - Major deviations, need to re-do & re-submit (65% meet the specs).', zh: '需改进 - 主要偏差，需要重新制作并重新提交（65%符合规格）。' },
      3: { en: 'Meets Expectations - Some deviations, need to amend & re-submit (75% meet the specs).', zh: '符合期望 - 一些偏差，需要修改并重新提交（75%符合规格）。' },
      4: { en: 'Exceeds Expectations - Minor deviations, need to adjust & re-submit (85% meet the specs).', zh: '超出期望 - 小偏差，需要调整并重新提交（85%符合规格）。' },
      5: { en: 'Exceptional - Near to accurate submission, need to compile final (95% meet the specs).', zh: '卓越 - 接近准确提交，仅需最终整理（95%符合规格）。' }
    }
  },

  // ========== CUSTOMER RELATIONS CATEGORY (2 questions - 20%) ==========
  {
    groupCategory: {
      en: 'Customer Service/Relations',
      zh: '客户服务与关系维护'
    },
    category: {
      en: 'Responsiveness towards external parties - Response to requests/queries from client/subcon etc' ,
      zh: '对外方的响应能力 — 对客户/分包商等的请求/查询的回应。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Slow response, unresolved issues.', zh: '较差 - 响应缓慢，问题未解决。' },
      2: { en: 'Needs Improvement - Delayed responses, provide incomplete resolutions.', zh: '需改进 - 响应延迟，提供不完整的解决方案。' },
      3: { en: 'Meets Expectations - Satisfactory response time with some follow-ups required.', zh: '符合期望 - 响应时间令人满意，但需要一些后续跟进。' },
      4: { en: 'Exceeds Expectations - Respond timely, most issues resolved promptly.', zh: '超出期望 - 响应时间良好，大多数问题能及时解决。' },
      5: { en: 'Exceptional - Proactive and handles all clarifications quickly.', zh: '卓越 - 积极主动，能够快速处理所有澄清问题。' }
    }
  },
  {
    groupCategory: {
      en: 'Customer Service/Relations',
      zh: '客户服务与关系维护'
    },
    category: {
      en: 'Internal communication effectiveness - how effectively the tendering team communicates with other departments during the tendering process' ,
      zh: '对客户咨询的响应能力 - 根据项目周期，对请求和查询的响应动作。参考员工手册（内部和外部）。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Slow response, unresolved issues.', zh: '较差 - 响应缓慢，问题未解决。' },
      2: { en: 'Needs Improvement - Delayed responses, provide incomplete resolutions.', zh: '需改进 - 响应延迟，提供不完整的解决方案。' },
      3: { en: 'Meets Expectations - Satisfactory response time with some follow-ups required.', zh: '符合期望 - 响应时间令人满意，但需要一些后续跟进。' },
      4: { en: 'Exceeds Expectations - Respond timely, most issues resolved promptly.', zh: '超出期望 - 响应时间良好，大多数问题能及时解决。' },
      5: { en: 'Exceptional - Proactive and handles all clarifications quickly.', zh: '卓越 - 积极主动，能够快速处理所有澄清问题。' }
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
