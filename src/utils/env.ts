const nodeEnv = process.env.NODE_ENV;

export const isTest = nodeEnv === 'test';
