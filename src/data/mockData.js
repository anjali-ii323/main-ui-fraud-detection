export const trendData = [
  { week: 'W1', fraud: 35, safe: 125 },
  { week: 'W2', fraud: 31, safe: 132 },
  { week: 'W3', fraud: 28, safe: 140 },
  { week: 'W4', fraud: 24, safe: 148 },
  { week: 'W5', fraud: 21, safe: 156 },
  { week: 'W6', fraud: 19, safe: 162 }
];

export const confidenceData = [
  { bucket: '0-20', count: 6 },
  { bucket: '21-40', count: 10 },
  { bucket: '41-60', count: 19 },
  { bucket: '61-80', count: 42 },
  { bucket: '81-100', count: 74 }
];

export const recentChecks = [
  { message: 'Reset your payroll password now', prediction: 'Fraud', confidence: '94%' },
  { message: 'Invoice reminder from known vendor', prediction: 'Safe', confidence: '83%' },
  { message: 'Claim your tax rebate today', prediction: 'Suspicious', confidence: '68%' },
  { message: 'Sign-in approval request', prediction: 'Safe', confidence: '88%' },
  { message: 'Urgent transfer requested', prediction: 'Fraud', confidence: '97%' }
];

export const trainingData = [
  { episode: 1, reward: 8 },
  { episode: 4, reward: 14 },
  { episode: 8, reward: 22 },
  { episode: 12, reward: 35 },
  { episode: 16, reward: 46 },
  { episode: 20, reward: 59 },
  { episode: 24, reward: 67 },
  { episode: 28, reward: 74 },
  { episode: 32, reward: 83 }
];
