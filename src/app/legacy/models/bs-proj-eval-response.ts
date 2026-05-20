export interface BSProjEvaluationResponse {
  staffId: string;
  projectId: string;
  roleType: string;
  departmentId: string;
  evaluatorId: string;
  evaluatorName: string;
  carpenterLevel: string; // Will always be 'STANDARD' for the simplified form
  
  // Standard form has 7 questions
  q1: number;  // Manage savings from vendor side 15%
  q2: number;  // Manage Project cost with profit 35%
  q3: number;  // Timeliness submission of Progress Claim 10%
  q4: number;  // On-time closing of Final Account 20%
  q5: number;  // Submission of document (Internally) 10%
  q6: number;  // Submission of document (Externally) 10%
  q7: number;  // Responsive to Enquires 5%
  
  // Additional fields that may still be sent but not used
  q8?: number;
  q9?: number;
  q10?: number;
  q11?: number;
}
