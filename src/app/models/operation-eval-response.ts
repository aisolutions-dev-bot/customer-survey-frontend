export interface OperationEvaluationResponse {
  staffId: string;
  projectId: string;
  roleType: string;
  departmentId: string;
  evaluatorId: string;
  evaluatorName: string;
  carpenterLevel: string; // Will always be 'STANDARD' for the simplified form
  
  // Standard form has 6 questions
  q1: number;  // Work Progress Management 20%
  q2: number;  // Accuracy 30%
  q3: number;  // Job Knowledge & Technical Skills 20%
  q4: number;  // Teamwork 10%
  q5: number;  // Dependability & Initiative 10%
  q6: number;  // Communication & Responsiveness 10%

  // Additional fields that may still be sent but not used
  q7?: number;   
  q8?: number;
  q9?: number;
  q10?: number;
  q11?: number;
}
