export interface PMEvaluationResponse {
  staffId: string;
  projectId: string;
  projectName: string;
  departmentId: string;
  evaluatorId: string;
  evaluatorName: string;
  formType: string;
  carpenterLevel: string;
  weightedScore: number;
  remarks: string;

  q1: number; // Project Production Output & Work Progress Management (30%)
  q2: number; // Quality Performance & Accuracy (25%)
  q3: number; // Operational Efficiency & Job Knowledge (20%)
  q4: number; // Dependability, Initiative & Communication (15%)
  q5: number; // Team Management & Leadership (5%)
  q6: number; // Continuous Improvement Initiatives (5%)
}
