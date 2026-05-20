export interface BSTenderEvaluationResponse {
  staffId: string;
  projectId: string;
  roleType: string;
  departmentId: string;
  evaluatorId: string;
  evaluatorName: string;
  carpenterLevel: string; // Will always be 'STANDARD' for the simplified form
  
  // Standard form has 7 questions
  q1: number;  // Tender control - submission on-time 30%
  q2: number;  // Tender control - submission accuracy 30%
  q3: number;  // Document control - compliance with requirements 20%
  q4: number;  // Client relations - responsiveness 10%
  q5: number;  // Client relations - internal communication 10%

  // Additional fields that may still be sent but not used
  q6?: number;  
  q7?: number;   
  q8?: number;
  q9?: number;
  q10?: number;
  q11?: number;
}
