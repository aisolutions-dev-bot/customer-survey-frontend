import { Translation } from '../../services/translation.service';

export interface QuestionDefinition {
  category: Translation;
  weight: number;
  groupCategory?: Translation;
  ratings: {
    [key: number]: Translation;
  };
}

export const PM_STANDARD_QUESTIONS: QuestionDefinition[] = [
  // ========== PROJECT PRODUCTION OUTPUT (30%) ==========
  {
    groupCategory: {
      en: 'Project Production Output & Work Progress Management',
      zh: '项目生产产出与工程进度管理'
    },
    category: {
      en: 'Achieves assigned work targets, effectively prioritizes tasks, ensures timely installation with minimal rework, maintains accurate documentation, and proactively identifies bottlenecks.',
      zh: '完成指定工作目标，有效优先处理任务，确保安装工作及时完成且返工最少，保持准确的文档记录，并主动识别瓶颈。'
    },
    weight: 30,
    ratings: {
      1: {
        en: 'Fails to meet project schedules and deadlines consistently. Poor task prioritization causing significant workflow breakdowns. Installation works are regularly delayed and require constant follow-up. Documentation and reporting are missing or inaccurate. Does not identify or address bottlenecks, resulting in project delays.',
        zh: '持续无法满足项目计划和截止日期。任务优先级排序不当，导致工作流程严重中断。安装工程频繁延误且需持续跟进。文档和报告缺失或不准确。未能识别或解决瓶颈，导致项目延误。'
      },
      2: {
        en: 'Frequently struggles to meet project schedules or deadlines. Difficulty prioritizing tasks, resulting in workflow disruptions between BU and Project Team. Installation works are often delayed or require repeated follow-up. Documentation and reporting are inconsistent or incomplete. Slow to respond to bottlenecks or urgent issues.',
        zh: '经常难以满足项目计划或截止日期。任务优先级排序困难，导致业务单元与项目团队之间的工作流程中断。安装工程经常延误或需要反复跟进。文档和报告不一致或不完整。对瓶颈或紧急问题的响应缓慢。'
      },
      3: {
        en: 'Generally adheres to project schedules and deadlines. Able to prioritize tasks with occasional guidance. Installation works are completed on time but may require some follow-up. Documentation and reporting are completed but may lack detail or timeliness at times. Addresses bottlenecks when highlighted by PM or team.',
        zh: '大体上遵守项目计划和截止日期。能够在偶尔指导下对任务进行优先排序。安装工程按时完成但可能需要一些跟进。文档和报告已完成，但有时可能缺乏细节或及时性。在项目经理或团队提示时解决瓶颈问题。'
      },
      4: {
        en: 'Meets project schedules and deadlines with minor adjustments. Effectively manages priorities and maintains smooth coordination between BU and Project Team. Installation works are completed on time with minimal follow-up. Documentation and reporting are generally accurate and timely. Responds quickly to bottlenecks or urgent tasks and resolves issues effectively.',
        zh: '在进行细微调整的情况下满足项目计划和截止日期。有效管理优先事项并保持业务单元与项目团队之间的顺畅协调。安装工程按时完成且跟进工作最少。文档和报告总体上准确及时。对瓶颈或紧急任务快速响应并有效解决问题。'
      },
      5: {
        en: 'Consistently meets or exceeds all project schedules and deadlines. Proactively prioritizes tasks and ensures seamless workflow between BU and Project Team. Installation works are completed ahead of schedule or on time with no follow-up required. Documentation and progress reporting are always accurate, timely, and complete. Anticipates bottlenecks early and resolves issues independently with minimal impact to project timeline.',
        zh: '始终满足或超越所有项目计划和截止日期。主动对任务进行优先排序，确保业务单元与项目团队之间的无缝工作流程。安装工程提前或按时完成，无需任何跟进。文档和进度报告始终准确、及时且完整。提前预见瓶颈并独立解决问题，对项目时间线影响最小。'
      }
    }
  },

  // ========== QUALITY PERFORMANCE (25%) ==========
  {
    groupCategory: {
      en: 'Quality Performance & Accuracy – Product Quality & Wastage Control',
      zh: '质量绩效与准确性 – 产品质量与废料控制'
    },
    category: {
      en: 'Delivers fabrication and installation works in compliance with specifications, with minimal defects, rework, and material wastage, supported by proper inspections. Ensures quality issues do not adversely impact project costing or schedule.',
      zh: '按照规范交付制造和安装工程，缺陷、返工和材料浪费最少，并辅以适当的检查。确保质量问题不对项目成本或进度产生不利影响。'
    },
    weight: 25,
    ratings: {
      1: {
        en: 'Poor workmanship and non-compliance with specifications. High number of defects in fabrication and installation. Major rework and rectification required. Excessive material wastage. Inspections not properly conducted. Significant impact on overall project costing and major delays to project completion.',
        zh: '工艺质量差且不符合规范。制造和安装中存在大量缺陷。需要进行大量返工和整改。材料浪费过多。检查未正确进行。对整体项目成本产生重大影响，并严重延误项目完成。'
      },
      2: {
        en: 'Inconsistent workmanship with recurring defects. Frequent rework and rectification required. Material wastage above acceptable levels. Delayed or incomplete inspections. Quality issues result in additional costs and/or minor project delays.',
        zh: '工艺质量不一致，缺陷反复出现。需要频繁进行返工和整改。材料浪费超过可接受水平。检查延迟或不完整。质量问题导致额外成本和/或轻微项目延误。'
      },
      3: {
        en: 'Work meets required quality standards. Occasional minor defects within acceptable tolerance. Some rework required but does not materially affect overall costing or project timeline. Material wastage within allowable limits. Inspections completed and issues rectified.',
        zh: '工程符合所需质量标准。偶有在可接受公差范围内的轻微缺陷。需要一些返工，但不会对整体成本或项目时间线产生重大影响。材料浪费在允许范围内。检查已完成，问题已整改。'
      },
      4: {
        en: 'High workmanship quality with very minor, isolated defects. Errors self-identified and rectified promptly. Minor rework required with no impact on overall project cost or schedule. Material wastage within or slightly below target. All inspections completed with minimal follow-up.',
        zh: '工艺质量高，只有极少数孤立缺陷。错误自行识别并及时整改。需要少量返工，对整体项目成本或进度无影响。材料浪费在目标范围内或略低于目标。所有检查均已完成，跟进工作最少。'
      },
      5: {
        en: 'Workmanship fully complies with drawings, specifications, and approved samples. Zero defects or errors in fabrication and installation. No rework or rectification required. Material wastage well below approved tolerance. 100% required inspections completed pre- and post-handover. No impact to overall project costing and no delay to project timeline. Proactively prevents quality issues and wastage.',
        zh: '工艺完全符合图纸、规范和已批准样品。制造和安装中零缺陷或错误。无需返工或整改。材料浪费远低于已批准公差。100%在交接前后完成所需检查。对整体项目成本无影响，项目时间线无延误。主动防止质量问题和浪费。'
      }
    }
  },

  // ========== OPERATIONAL EFFICIENCY (20%) ==========
  {
    groupCategory: {
      en: 'Operational Efficiency & Job Knowledge & Technical Skills',
      zh: '运营效率、工作知识与技术技能'
    },
    category: {
      en: 'Performs assigned tasks accurately and efficiently using appropriate technical knowledge, tools, and work methods while optimising resources. Consistently complies with company policies, SOPs, and regulatory requirements, and maintains a safe, orderly work environment.',
      zh: '使用适当的技术知识、工具和工作方法准确高效地执行指定任务，同时优化资源使用。始终遵守公司政策、标准作业程序和法规要求，并维持安全、有序的工作环境。'
    },
    weight: 20,
    ratings: {
      1: {
        en: 'Poor job knowledge and technical competence. Frequent errors, delays, or inefficient work practices. Misuse of resources resulting in rework or disruption. Repeated non-compliance with policies or safety requirements. Unsafe work practices posing risk to people, equipment, or project.',
        zh: '工作知识和技术能力差。频繁出现错误、延误或低效的工作方式。资源滥用导致返工或中断。反复不遵守政策或安全要求。不安全的工作方式对人员、设备或项目构成风险。'
      },
      2: {
        en: 'Gaps in job knowledge or technical skills affect efficiency. Frequent guidance or corrections required. Inefficient use of time or resources. Occasional lapses in safety, compliance, or work discipline. Requires reminders to follow procedures.',
        zh: '工作知识或技术技能的不足影响效率。需要频繁指导或纠正。时间或资源使用效率低下。偶尔出现安全、合规或工作纪律方面的失误。需要提醒才能遵循程序。'
      },
      3: {
        en: 'Adequate job knowledge to perform assigned tasks. Work completed accurately within acceptable timelines. Resource usage generally appropriate with minor inefficiencies. Complies with safety and company requirements. No major safety or compliance issues.',
        zh: '具备足够的工作知识以执行指定任务。工作在可接受的时间范围内准确完成。资源使用总体上适当，有轻微低效现象。遵守安全和公司要求。无重大安全或合规问题。'
      },
      4: {
        en: 'Strong job knowledge and technical skills. Performs work efficiently with minimal guidance. Uses resources effectively with minimal wastage. Complies fully with safety rules and company policies. Maintains good work discipline and safe practices.',
        zh: '扎实的工作知识和技术技能。在最少指导下高效完成工作。有效使用资源，浪费最少。完全遵守安全规定和公司政策。保持良好的工作纪律和安全实践。'
      },
      5: {
        en: 'Demonstrates excellent job knowledge and technical competence. Performs tasks accurately and efficiently with no supervision. Consistently optimises use of time, manpower, tools, and resources. Actively improves work methods to enhance productivity. Fully compliant with all company policies, SOPs, and regulations. Maintains a safe and disciplined work environment at all times. Zero safety incidents or compliance breaches.',
        zh: '展现出优秀的工作知识和技术能力。无需监督即可准确高效地执行任务。始终优化时间、人力、工具和资源的使用。积极改进工作方法以提高生产力。完全遵守所有公司政策、标准作业程序和法规。始终维持安全有纪律的工作环境。零安全事故或合规违规。'
      }
    }
  },

  // ========== DEPENDABILITY & COMMUNICATION (15%) ==========
  {
    groupCategory: {
      en: 'Dependability, Initiative & Communication',
      zh: '可靠性、主动性与沟通'
    },
    category: {
      en: 'Demonstrates reliability with minimal supervision, takes proactive initiative to address challenges, and shows accountability. Maintains clear, timely, and professional communication with project teams, including prompt responses to WhatsApp and telephone inquiries.',
      zh: '在最少监督下展现可靠性，主动解决挑战，并表现出负责任的态度。与项目团队保持清晰、及时和专业的沟通，包括对WhatsApp和电话咨询的及时回复。'
    },
    weight: 15,
    ratings: {
      1: {
        en: 'Unreliable and unable to work independently. Does not take initiative or responsibility. Frequently ignores or delays responses to WhatsApp and phone calls. Poor or unprofessional communication. Project issues escalate due to lack of responsiveness or accountability.',
        zh: '不可靠且无法独立工作。不主动承担责任。频繁忽视或延迟回复WhatsApp和电话。沟通质量差或不专业。由于缺乏响应能力或责任心，项目问题不断升级。'
      },
      2: {
        en: 'Requires frequent supervision to complete tasks. Limited initiative in addressing challenges. Inconsistent accountability for assigned duties. Slow or inconsistent response to messages or calls. Communication gaps cause misunderstandings or follow-ups.',
        zh: '需要频繁监督才能完成任务。在应对挑战方面主动性有限。对指定职责的责任心不一致。对消息或电话的响应缓慢或不一致。沟通障碍导致误解或需要后续跟进。'
      },
      3: {
        en: 'Completes assigned tasks with occasional supervision. Responds to issues when prompted. Generally accountable for responsibilities. Responds to WhatsApp and calls within a reasonable timeframe. Communication is clear but may lack proactiveness at times.',
        zh: '在偶尔监督下完成指定任务。在被提示时响应问题。总体上对职责负责。在合理时间内回复WhatsApp和电话。沟通清晰，但有时可能缺乏主动性。'
      },
      4: {
        en: 'Reliable with minimal supervision. Takes initiative to address issues and suggest improvements. Accountable for assigned tasks. Responds to communications promptly with rare delays. Communicates clearly and professionally with project teams.',
        zh: '在最少监督下可靠工作。主动解决问题并提出改进建议。对指定任务负责。及时回复通信，极少延迟。与项目团队清晰专业地沟通。'
      },
      5: {
        en: 'Consistently delivers tasks independently with no supervision required. Proactively identifies challenges and implements effective improvements. Fully accountable for responsibilities and outcomes. Always responds promptly to WhatsApp and phone calls. Communicates clearly, professionally, and effectively at all times. Resolves project queries confidently without escalation.',
        zh: '无需监督，始终独立完成任务。主动识别挑战并实施有效改进。对职责和成果完全负责。始终及时回复WhatsApp和电话。始终清晰、专业、有效地沟通。自信地解决项目查询，无需上报。'
      }
    }
  },

  // ========== TEAM MANAGEMENT & LEADERSHIP (5%) ==========
  {
    groupCategory: {
      en: 'Team Management & Leadership',
      zh: '团队管理与领导力'
    },
    category: {
      en: 'Leads by example in adherence to company policies and work ethics, provides guidance and mentorship to subordinates and new employees, and fosters effective collaboration among team members and subcontractors.',
      zh: '以身作则遵守公司政策和职业道德，为下属和新员工提供指导和辅导，并在团队成员和分包商之间促进有效协作。'
    },
    weight: 5,
    ratings: {
      1: {
        en: 'Poor leadership and non-compliance with company policies or work ethics. Fails to guide or support team members. Creates or allows poor teamwork and conflict within the team or with subcontractors. Team performance and workflow are significantly affected.',
        zh: '领导力差，不遵守公司政策或职业道德。未能指导或支持团队成员。在团队内部或与分包商之间制造或允许团队合作不善和冲突。团队绩效和工作流程受到严重影响。'
      },
      2: {
        en: 'Inconsistent leadership behaviour or compliance with company policies. Limited guidance or support provided to subordinates or new employees. Weak team coordination leading to inefficiencies or misunderstandings. Requires PM intervention to manage team issues.',
        zh: '领导行为或对公司政策的遵守不一致。为下属或新员工提供的指导或支持有限。团队协调薄弱，导致低效或误解。需要项目经理介入来管理团队问题。'
      },
      3: {
        en: 'Complies with company policies and work ethics. Provides basic guidance to team members when required. Maintains acceptable teamwork and coordination within the team and with subcontractors. Team objectives are generally met.',
        zh: '遵守公司政策和职业道德。在需要时为团队成员提供基本指导。维持团队内部及与分包商之间可接受的团队合作和协调。团队目标总体上得到实现。'
      },
      4: {
        en: 'Demonstrates good leadership and consistently complies with company policies and work ethics. Provides regular guidance and support to team members and new employees. Encourages teamwork and maintains effective coordination with subcontractors. Addresses team issues promptly with minimal escalation.',
        zh: '展现出良好的领导力，并始终遵守公司政策和职业道德。定期为团队成员和新员工提供指导和支持。鼓励团队合作并与分包商保持有效协调。及时解决团队问题，上报情况最少。'
      },
      5: {
        en: 'Consistently leads by example with strong adherence to company policies, safety standards, and work ethics. Actively mentors, coaches, and supports subordinates and new employees, resulting in clear performance improvement. Fosters excellent collaboration among team members and subcontractors, ensuring seamless workflow. Resolves team issues proactively and maintains high team morale.',
        zh: '始终以身作则，严格遵守公司政策、安全标准和职业道德。积极辅导、培训和支持下属及新员工，带来明显的绩效提升。在团队成员和分包商之间促进卓越协作，确保工作流程无缝衔接。主动解决团队问题并维持高昂的团队士气。'
      }
    }
  },

  // ========== CONTINUOUS IMPROVEMENT (5%) ==========
  {
    groupCategory: {
      en: 'Continuous Improvement Initiatives',
      zh: '持续改进举措'
    },
    category: {
      en: 'Actively drives continuous improvement initiatives to enhance operational efficiency, quality, safety, and cost effectiveness by identifying improvement opportunities, implementing practical solutions, and supporting operational excellence.',
      zh: '通过识别改进机会、实施实际解决方案和支持卓越运营，积极推动持续改进举措以提升运营效率、质量、安全性和成本效益。'
    },
    weight: 5,
    ratings: {
      1: {
        en: 'No contribution to continuous improvement initiatives. Resistant to change or new processes. Repeats inefficient or ineffective work practices. Negatively impacts team or project improvement efforts.',
        zh: '对持续改进举措无贡献。抵制变化或新流程。重复低效或无效的工作实践。对团队或项目改进工作产生负面影响。'
      },
      2: {
        en: 'Limited contribution to improvement initiatives. Reluctant to change existing work methods. Improvement opportunities often identified by others. Requires encouragement to participate in operational excellence efforts.',
        zh: '对改进举措贡献有限。不愿意改变现有工作方法。改进机会通常由他人识别。需要鼓励才能参与卓越运营工作。'
      },
      3: {
        en: 'Participates in continuous improvement initiatives when required. Suggests occasional improvement ideas. Implements improvements as instructed with acceptable results. Shows willingness to adopt new processes or better work methods.',
        zh: '在需要时参与持续改进举措。偶尔提出改进想法。按照指示实施改进，结果可接受。表现出采纳新流程或更好工作方法的意愿。'
      },
      4: {
        en: 'Regularly suggests and implements practical improvement ideas. Improvements result in noticeable efficiency or quality gains. Actively supports operational excellence initiatives led by management or PM. Follows through on improvement actions with minimal guidance.',
        zh: '定期提出并实施实际改进想法。改进带来明显的效率或质量提升。积极支持管理层或项目经理主导的卓越运营举措。在最少指导下跟进改进行动。'
      },
      5: {
        en: 'Proactively identifies improvement opportunities across operations, quality, safety, or cost. Successfully implements multiple improvement initiatives with clear, measurable benefits. Improvements lead to enhanced efficiency, quality, or cost savings without impacting project timelines. Shares best practices and encourages a continuous improvement mindset within the team. Demonstrates strong ownership from idea to implementation.',
        zh: '主动识别运营、质量、安全或成本方面的改进机会。成功实施多项具有明确可量化效益的改进举措。改进带来效率、质量或成本节约的提升，且不影响项目时间线。分享最佳实践并在团队内鼓励持续改进的思维方式。从想法到实施展现出强烈的主人翁意识。'
      }
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
