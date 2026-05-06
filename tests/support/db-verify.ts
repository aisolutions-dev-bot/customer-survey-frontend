import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.TEST_DB_HOST || 'borneochemicalintl.com',
  port: parseInt(process.env.TEST_DB_PORT || '3306'),
  user: process.env.TEST_DB_USER || 'db_test2',
  password: process.env.TEST_DB_PASSWORD || 'DB12*test34',
  database: process.env.TEST_DB_NAME || 'db_test2',
};

export async function createQueryConnection() {
  return mysql.createConnection(dbConfig);
}

export async function verifyEvaluationInDb(uniqId: number) {
  const [connection] = await createQueryConnection();
  try {
    const [rows] = await connection.execute(
      'SELECT UniqId, EvaluatorId, EvaluateeId, FormType, SkillSet, WeightedScore, DepartmentId, Remarks, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, SubmittedAt FROM m17EvaluationRatings WHERE UniqId = ?',
      [uniqId]
    );
    return (rows as any[])[0] || null;
  } finally {
    await connection.end();
  }
}

export async function getLatestEvaluationByStaffId(staffId: string) {
  const [connection] = await createQueryConnection();
  try {
    const [rows] = await connection.execute(
      'SELECT UniqId, EvaluatorId, EvaluateeId, FormType, SkillSet, WeightedScore, DepartmentId, Remarks, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, SubmittedAt FROM m17EvaluationRatings WHERE EvaluateeId = ? ORDER BY SubmittedAt DESC LIMIT 1',
      [staffId]
    );
    return (rows as any[])[0] || null;
  } finally {
    await connection.end();
  }
}
