export interface EvaluationResponse {
  staffId: string;
  projectId: string;
  roleType: string;
  evaluatorId: string;
  evaluatorName: string;
  q1: number; // workProgressManagement
  q2: number; // accuracy
  q3: number; // jobKnowledgeSkills
  q4: number; // teamwork
  q5: number; // dependabilityInitiative
  q6: number; // communicationResponsiveness
}
