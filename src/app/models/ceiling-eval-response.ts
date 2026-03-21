export interface CeilingEvaluationResponse {
  staffId: string;
  projectId: string;
  roleType: string;
  departmentId: string;
  evaluatorId: string;
  evaluatorName: string;
  carpenterLevel:string;
  // dynamic questions depends on carpenterLevel: level1 = 9 questions, level2 = 10 questions, level3 = 10 questions
  q1: number; 
  q2: number; 
  q3: number; 
  q4: number; 
  q5: number; 
  q6: number; 
  q7: number; 
  q8: number; 
  q9: number; 
  q10?: number;
  q11?: number;
}
