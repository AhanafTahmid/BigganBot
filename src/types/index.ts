export interface TabProps {
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

export interface SimulationData {
  id: string;
  title: string;
  description: string;
  url: string;
  subject: string;
  thumbnail: string;
}

export interface HomeworkSubmission {
  id: string;
  filename: string;
  createdAt: string;
  status: 'pending' | 'verified' | 'rejected';
  feedback?: string;
  aiGenerated?: boolean;
}