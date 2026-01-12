export interface EvaluationDistribution {
  uniqId: number;
  evaluateeId: string;
  evaluateeName: string;
  projectId: string;
  projectName: string;
  departmentId: string;
  departmentName: string;
  evaluatorId: string;
  evaluatorName: string;
  skillSet: string; // 'junior', 'journeyman', or 'senior'
  status?: string; // NEW: Status field - Values: 'PENDING', 'SUBMITTED', 'COMPLETED', etc.
  formType: string;
}
