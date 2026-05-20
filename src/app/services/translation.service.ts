import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'en' | 'zh';

export interface Translation {
  en: string;
  zh: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<Language>('en');
  public currentLanguage$: Observable<Language> = this.currentLanguageSubject.asObservable();

  constructor() {
    // Load saved language preference from localStorage
    if (this.isBrowser()) {
        const savedLang = localStorage.getItem('preferredLanguage') as Language;
        if (savedLang === 'en' || savedLang === 'zh') {
        this.currentLanguageSubject.next(savedLang);
        }
    }
  }

  // Check if code is running in browser (not SSR)
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  setLanguage(lang: Language): void {
    this.currentLanguageSubject.next(lang);
    if (this.isBrowser()) {
      localStorage.setItem('preferredLanguage', lang);
    }
  }

  toggleLanguage(): void {
    const current = this.getCurrentLanguage();
    this.setLanguage(current === 'en' ? 'zh' : 'en');
  }

  translate(text: Translation | string): string {
    if (typeof text === 'string') {
      return text;
    }
    const lang = this.getCurrentLanguage();
    return text[lang] || text.en;
  }

  skillCategoryTranslations: Record<string, string> = {
    'Technical Skills': '技术技能',
    'Adaptability': '适应能力',
    'Self-Management': '自我管理',
    'Project Standard': '项目标准',
    'Teamwork and Communication': '团队协作与沟通',
    'Teamwork & Communication': '团队合作与沟通',
    'Problem Solving': '问题解决',
    'Teamwork': '团队合作',
    'Tender Control': '投标控制',
    'Document control': '文件控制',
    'Customer Service/Relations': '客户服务与关系维护',
    'Work Progress Management': '工作进度管理',
    'Accuracy': '准确性',
    'Job Knowledge & Technical Skills': '工作知识与技术技能',
    'Dependability & Initiative': '可靠性和主动性',
    'Communication & Responsiveness': '沟通与响应能力',
    'Project Production Output & Work Progress Management': '项目生产产出与工程进度管理',
    'Quality Performance & Accuracy – Product Quality & Wastage Control': '质量绩效与准确性 – 产品质量与废料控制',
    'Operational Efficiency & Job Knowledge & Technical Skills': '运营效率、工作知识与技术技能',
    'Dependability, Initiative & Communication': '可靠性、主动性与沟通',
    'Team Management & Leadership': '团队管理与领导力',
    'Continuous Improvement Initiatives': '持续改进举措',
  };

  genericRatingDescriptions: Record<number, { en: string; zh: string }> = {
    1: { en: 'Very Poor – Does not meet expectations', zh: '非常差 – 未达到预期' },
    2: { en: 'Poor – Partially meets expectations', zh: '差 – 部分达到预期' },
    3: { en: 'Average – Meets basic expectations', zh: '一般 – 符合基本预期' },
    4: { en: 'Good – Exceeds expectations', zh: '好 – 超出预期' },
    5: { en: 'Excellent – Far exceeds expectations', zh: '优秀 – 远超预期' },
  };

  translateSkillCategory(category: string): string {
    const lang = this.getCurrentLanguage();
    if (lang === 'zh' && this.skillCategoryTranslations[category]) {
      return this.skillCategoryTranslations[category];
    }
    return category;
  }

  // Common UI translations
  translations = {
    header: {
      title: { 
        en: 'Staff Performance Evaluation', 
        zh: '员工绩效评估' 
      }
    },
    fields: {
      staffId: { 
        en: 'Staff ID', 
        zh: '员工编号' 
      },
      projectId: { 
        en: 'Project ID', 
        zh: '项目编号' 
      },
      role: { 
        en: 'Role/Dept', 
        zh: '角色/部门' 
      },
      evaluatorId: { 
        en: 'Evaluator ID', 
        zh: '评估者编号' 
      },
      evaluatorName: { 
        en: 'Evaluator Name', 
        zh: '评估者姓名' 
      },
      selectStaff: { 
        en: 'Select Staff', 
        zh: '选择员工' 
      },
      selectProject: { 
        en: 'Select Project', 
        zh: '选择项目' 
      },
      selectDepartment: { 
        en: 'Select Role/Department', 
        zh: '选择角色/部门' 
      },
      selectEvaluator: { 
        en: 'Select Evaluator', 
        zh: '选择评估者' 
      },
      enterRole: { 
        en: 'Enter Role Type', 
        zh: '输入角色类型' 
      },
      loading: { 
        en: 'Loading...', 
        zh: '加载中...' 
      },
      nameWillAppear: { 
        en: 'Name will appear after selecting evaluator', 
        zh: '选择评估者后将显示姓名' 
      }
    },
    evaluator: {
      title: { 
        en: 'Evaluator Information', 
        zh: '评估者信息' 
      },
      required: { 
        en: '*', 
        zh: '*' 
      }
    },
    progress: {
      title: { 
        en: 'Progress', 
        zh: '进度' 
      }
    },
    submit: {
      button: { 
        en: 'Submit Evaluation', 
        zh: '提交评估' 
      },
      submitting: { 
        en: 'Submitting...', 
        zh: '提交中...' 
      },
      ready: { 
        en: 'Ready to submit!', 
        zh: '准备提交！' 
      },
      pleaseAnswer: { 
        en: 'Please answer all {count} questions and fill in all required fields', 
        zh: '请回答所有 {count} 个问题并填写所有必填字段' 
      }
    },
    success: {
      title: { 
        en: 'Evaluation Submitted!', 
        zh: '评估已提交！' 
      },
      message: { 
        en: 'Staff evaluation has been successfully submitted.', 
        zh: '员工评估已成功提交。' 
      },
      weightedScore: { 
        en: 'Weighted Score:', 
        zh: '加权分数：' 
      },
      evaluatedBy: { 
        en: 'Evaluated by:', 
        zh: '评估者：' 
      }
    },
    modal: {
      ratingExplanations: { 
        en: 'Rating Explanations:', 
        zh: '评分说明：' 
      },
      rating: { 
        en: 'Rating', 
        zh: '评分' 
      },
      smiley: { 
        en: 'Smiley', 
        zh: '表情' 
      },
      description: { 
        en: 'Description', 
        zh: '说明' 
      },
      close: { 
        en: 'Close', 
        zh: '关闭' 
      },
      weight: { 
        en: 'Weight:', 
        zh: '权重：' 
      }
    },
    errors: {
      allFieldsRequired: { 
        en: 'Please answer all questions and fill in all required fields before submitting.', 
        zh: '提交前请回答所有问题并填写所有必填字段。' 
      },
      submitFailed: { 
        en: 'Failed to submit evaluation. Please try again.', 
        zh: '提交评估失败。请重试。' 
      },
      loadStaffFailed: { 
        en: 'Failed to load staff list. Please refresh the page.', 
        zh: '加载员工列表失败。请刷新页面。' 
      },
      loadProjectFailed: { 
        en: 'Failed to load project list. Please refresh the page.', 
        zh: '加载项目列表失败。请刷新页面。' 
      },
      loadDepartmentFailed: { 
        en: 'Failed to load department list. Please refresh the page.', 
        zh: '加载角色/部门列表失败。请刷新页面。' 
      },
      loadEvaluatorFailed: { 
        en: 'Failed to load evaluator information.', 
        zh: '加载评估者信息失败。' 
      }
    }
  };
}