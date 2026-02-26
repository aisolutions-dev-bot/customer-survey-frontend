import { Translation } from '../services/translation.service';

export interface QuestionDefinition {
  category: Translation;
  weight: number;
  groupCategory?: Translation;
  ratings: {
    [key: number]: Translation;
  };
}

export interface FormTypeConfig {
  id: string;
  name: Translation;
  description: Translation;
  questions: QuestionDefinition[];
  calculateWeightedScore: (answers: number[]) => number;
}

// Import individual question sets
import { BS_PROJECT_STANDARD_QUESTIONS } from '../models/bs-proj-eval-questions';
import { BS_TENDER_STANDARD_QUESTIONS } from '../models/bs-tender-eval-questions';
//import { DRAFTER_QUESTIONS } from '../models/drafter-eval-questions';

/**
 * Master configuration for all evaluation form types
 * Each form type has its own questions and scoring logic
 */
export const FORM_TYPES: { [key: string]: FormTypeConfig } = {
  
  BS_PROJECT: {
    id: 'BS_PROJECT',
    name: {
      en: 'Business Support - Project Evaluation',
      zh: 'BS项目评估'
    },
    description: {
      en: 'Performance evaluation for Business Support project positions',
      zh: 'BS项目职位绩效评估'
    },
    questions: BS_PROJECT_STANDARD_QUESTIONS,
    calculateWeightedScore: (answers: number[]): number => {
      // BS Project scoring: Q1=15%, Q2=35%, Q3=10%, Q4=10%, Q5=10%, Q6=10%, Q7=10%
      let rawScore = 0;
      const weights = [15, 35, 10, 10, 10, 10, 10];
      
      answers.forEach((answer, index) => {
        if (index < weights.length && answer > 0) {
          rawScore += (answer / 5) * weights[index];
        }
      });
      
      return Math.round(rawScore);
    }
  },

  BS_TENDER: {
    id: 'BS_TENDER',
    name: {
      en: 'Business Support - Tender Evaluation',
      zh: 'BS投标评估'
    },
    description: {
      en: 'Performance evaluation for Business Support tender positions',
      zh: 'BS投标职位绩效评估'
    },
    questions: BS_TENDER_STANDARD_QUESTIONS,
    calculateWeightedScore: (answers: number[]): number => {
      // BS Tender scoring: Different weights for 6 questions
      // Q1=20%, Q2=30%, Q3=20%, Q4=10%, Q5=10%, Q6=10%
      let rawScore = 0;
      const weights = [20, 30, 20, 10, 10, 10];
      
      answers.forEach((answer, index) => {
        if (index < weights.length && answer > 0) {
          rawScore += (answer / 5) * weights[index];
        }
      });
      
      return Math.round(rawScore);
    }
  },

  /* DRAFTER: {
    id: 'DRAFTER',
    name: {
      en: 'Drafter Evaluation',
      zh: '绘图员评估'
    },
    description: {
      en: 'Performance evaluation for drafter positions',
      zh: '绘图员职位绩效评估'
    },
    questions: DRAFTER_QUESTIONS,
    calculateWeightedScore: (answers: number[]): number => {
      // Drafter scoring: 6 questions with different weights
      // Q1=25%, Q2=30%, Q3=20%, Q4=10%, Q5=10%, Q6=5%
      let rawScore = 0;
      const weights = [25, 30, 20, 10, 10, 5];
      
      answers.forEach((answer, index) => {
        if (index < weights.length && answer > 0) {
          rawScore += (answer / 5) * weights[index];
        }
      });
      
      return Math.round(rawScore);
    }
  } */
};

/**
 * Get form type configuration by ID
 */
export function getFormTypeConfig(formTypeId: string): FormTypeConfig | undefined {
  return FORM_TYPES[formTypeId.toUpperCase()];
}

/**
 * Get all available form types
 */
export function getAllFormTypes(): FormTypeConfig[] {
  return Object.values(FORM_TYPES);
}

/**
 * Smiley ratings (same for all forms)
 */
export const SMILEYS = [
  { value: 1, icon: '😤', color: '#ef4444' },
  { value: 2, icon: '😢', color: '#f97316' },
  { value: 3, icon: '😐', color: '#3b82f6' },
  { value: 4, icon: '😊', color: '#22c55e' },
  { value: 5, icon: '😍', color: '#059669' }
];
