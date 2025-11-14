export interface MemeInput {
  prompt: string;
  power?: number;
  tags?: string[];
}

export interface MemeRecord extends MemeInput {
  id: string;
  createdAt: number;
}

