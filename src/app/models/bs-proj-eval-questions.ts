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

// Standard Questionnaire with Categories (7 questions)
export const BS_PROJECT_STANDARD_QUESTIONS: QuestionDefinition[] = [
  // ========== COSTING CATEGORY (2 questions - 50%) ==========
  {
    groupCategory: {
      en: 'Cost Control',
      zh: '成本控制'
    },
    category: {
      en: 'Manage savings from vendor side (Main contract) - The amount of money saved through proactive cost management or negotiations with the vendor (Discount received).',
      zh: '从供应商方面节省成本（主合同）——通过积极的成本管理或与供应商谈判节省的金额（获得的折扣）。'
    },
    weight: 15,
    ratings: {
      1: { en: 'Poor - No costs savings achieved.', zh: '较差 - 未实现任何成本节约。' },
      2: { en: 'Needs Improvement - Minimal savings (<2%).', zh: '需改进 - 最小节约（<2%）。' },
      3: { en: 'Meets Expectations - Moderate savings (≥2%), basic discount secured.', zh: '符合期望 - 适度节约 (≥2%，基本折扣已锁定。' },
      4: { en: 'Exceeds Expectations - Significant savings (≥3%).', zh: '超出期望 - 显著节省 (≥3%）。' },
      5: { en: 'Exceptional - Exceptional savings (≥5%),.', zh: '卓越 - 卓越的节省 (≥5%）。' }
    }
  },
  {
    groupCategory: {
      en: 'Cost Control',
      zh: '成本控制'
    },
    category: {
      en: 'Manage Project cost with profit (Main contract + VO) - Overall Project Profit achieved including the total amount of VOs submitted to Clients *excluding PC sum & defects.',
      zh: '管理项目成本和利润（主合同 + 变更订单(VO) - 实现的整体项目利润，包括提交给客户的变更订单(VO)总额 *不包括 PC 金额和缺陷。'
    },
    weight: 35,
    ratings: {
      1: { en: 'Poor - Negative profit or No profit achieved.', zh: '较差 - 亏损或无盈利。' },
      2: { en: 'Needs Improvement - Negligible profit (<2%).', zh: '需改进 - 利润微薄（<2%）。' },
      3: { en: 'Meets Expectations - Moderate Profit (≥2%), met baseline Profit, minimal profit.', zh: '符合期望 - 中等利润 (≥2%），达到基准利润，最低利润。' },
      4: { en: 'Exceeds Expectations - Significant Profit (≥5%), strong profit.', zh: '超出期望 - 显著利润 (≥5%），利润强劲。' },
      5: { en: 'Exceptional - Exceptional Profit (≥10%), profit is maximised, overall project profit margin improved significantly.', zh: '卓越 - 卓越利润（≥10%），利润最大化，整体项目利润率显著提高。' }
    }
  },

  // ========== CLAIMS CATEGORY (2 questions - 20%) ==========
  {
    groupCategory: {
      en: 'Claims efficiency',
      zh: '索赔效率'
    },
    category: {
      en: 'Timeliness submission of Progress Claim - On-time issue of Clients progress claim, delivers the required reports specifications that required by Client for them to approve Claim.',
      zh: '进度款申请的及时提交 - 按时向客户提交进度款申请，并提供客户要求的、符合其审批要求的报告。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Submissions rejected due to non-compliance or severe delays (>10 working days).', zh: '较差 - 因不合规或严重延误（超过10个工作日）导致提交被拒绝。' },
      2: { en: 'Needs Improvement - Delays >5 working days; submissions lack key client requirements, as a result delay claim approval.', zh: '需改进 - 延误超过5个工作日；提交缺少关键客户要求，导致索赔审批延迟。' },
      3: { en: 'Meets Expectations - Delays ≤3 working days; moderate revisions required (e.g., incomplete data), occasional client queries but not affect claim approval.', zh: '符合期望 - 延误不超过3个工作日；需要适度修改（例如，数据不完整），偶尔出现客户查询但不影响索赔审批。' },
      4: { en: 'Exceeds Expectations - On-time claims submission, minor follow up needed on submission specifications.', zh: '超出期望 - 按时提交索赔，提交规范需要少量跟进。' },
      5: { en: 'Exceptional - On-time claims submission, 100% compliant with submission specifications, client approval process seamless.', zh: '卓越 - 按时提交索赔申请，100%符合提交规范，客户审批流程顺畅无阻。' }
    }
  },
  {
    groupCategory: {
      en: 'Claims efficiency',
      zh: '索赔效率'
    },
    category: {
      en: 'On-time closing of Final Account (Upon handover) - Proactively and accurately * excluding DLP ',
      zh: '按时完成最终结算（交接时）- 主动且准确地*（不包括数据丢失防护措施）'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Account closed with/ not within required duration after project handover, with missed items causing damage of reputation/ loss of revenue, no follow up with counterparts.', zh: '较差 - 项目移交后，账户未在规定时间内关闭，遗漏事项导致声誉受损/收入损失，且未与对方进行后续跟进。' },
      2: { en: 'Needs Improvement - Account closed not within required duration after project handover, not actively follow up with counterparts causing delay .', zh: '需改进 - 项目移交后未在规定时间内关闭账户，且未积极与对口部门跟进，导致延误。' },
      3: { en: 'Meets Expectations - Account closed within required duration after project handover, seldom follow up with counterparts, need reminders from clients.', zh: '符合期望 - 项目交接后，账户在规定时间内关闭，很少与对口人员进行后续沟通，需要客户提醒。' },
      4: { en: 'Exceeds Expectations - Account closed within required duration after project handover, constantly follow up with counterparts.', zh: '超出期望 - 项目移交后，在规定时间内完成账户关闭，并与相关方保持持续跟进。' },
      5: { en: 'Exceptional - Account closed within required duration after project handover, proactively follow up with counterparts.', zh: '卓越 - 项目交接后，在规定时间内关闭账户，并主动与对口部门跟进。' }
    }
  },

  // ========== DOCUMENTATION CATEGORY (1 question - 10%) ==========
  {
    groupCategory: {
      en: 'Documental control',
      zh: '文件控制'
    },
    category: {
      en: 'Submission of document & Proper documental system control - On-time submission & accuracy of Project document (Internally)',
      zh: '文档提交与系统控制 - 按时提交并确保项目文档的准确性（内部）。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - < 50% on-time, poor document management.', zh: '较差 - < 50% 按时完成，文档管理不佳。' },
      2: { en: 'Needs Improvement - 50-69% on-time, frequent document issues.', zh: '需改进 - 50-69% 按时完成，文档问题频繁。' },
      3: { en: 'Meets Expectations - 70-84% on-time, acceptable document control.', zh: '符合期望 - 70-84% 按时完成，文档控制可接受。' },
      4: { en: 'Exceeds Expectations - 85-94% on-time, well-organized documentation.', zh: '超出期望 - 85-94% 按时完成，文档组织良好。' },
      5: { en: 'Exceptional - 95-100% on-time, excellent documentation control.', zh: '卓越 - 95-100% 按时完成，文档控制优秀。' }
    }
  },
  {
    groupCategory: {
      en: 'Documental control',
      zh: '文件控制'
    },
    category: {
      en: 'Submission of document & Proper documental system control - On-time submission & accuracy of document to Client (Externally)',
      zh: '文档提交与系统控制 - 按时提交并确保客户文档的准确性。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - < 50% on-time, poor document management.', zh: '较差 - < 50% 按时完成，文档管理不佳。' },
      2: { en: 'Needs Improvement - 50-69% on-time, frequent document issues.', zh: '需改进 - 50-69% 按时完成，文档问题频繁。' },
      3: { en: 'Meets Expectations - 70-84% on-time, acceptable document control.', zh: '符合期望 - 70-84% 按时完成，文档控制可接受。' },
      4: { en: 'Exceeds Expectations - 85-94% on-time, well-organized documentation.', zh: '超出期望 - 85-94% 按时完成，文档组织良好。' },
      5: { en: 'Exceptional - 95-100% on-time, excellent documentation control.', zh: '卓越 - 95-100% 按时完成，文档控制优秀。' }
    }
  },


  // ========== CUSTOMER RELATIONS CATEGORY (2 questions - 20%) ==========
  {
    groupCategory: {
      en: 'Customer Service/Relations',
      zh: '客户服务与关系维护'
    },
    category: {
      en: 'Responsive to Enquires - Based on project duration, actions to requests & queries. Refer to employee handbook (both Internally & Externally)',
      zh: '对客户咨询的响应能力 - 根据项目周期，对请求和查询的响应动作。参考员工手册（内部和外部）。'
    },
    weight: 10,
    ratings: {
      1: { en: 'Poor - Slow response, unresolved issues.', zh: '较差 - 响应缓慢，问题未解决。' },
      2: { en: 'Needs Improvement - Delayed responses, incomplete resolutions.', zh: '需改进 - 响应延迟，问题未完全解决。' },
      3: { en: 'Meets Expectations - Satisfactory response time, follow-ups required.', zh: '符合期望 - 响应时间可接受，但需后续跟进。' },
      4: { en: 'Exceeds Expectations - Good response time, most issues resolved promptly.', zh: '超出期望 - 响应时间良好，大多数问题能及时解决。' },
      5: { en: 'Exceptional - Excellent response time, all queries resolved efficiently.', zh: '卓越 - 响应时间优秀，所有问题都能高效解决。' }
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
