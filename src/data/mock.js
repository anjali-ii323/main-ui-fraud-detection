export const demoScenarios = [
  {
    name: 'Payment Reversal Scam',
    message_text: 'Urgent: your payment is blocked. Verify account now at secure-payee-center.co to avoid charges.',
    url: 'https://secure-payee-center.co/verify',
    sender: 'alerts@txn-support-payments.com',
  },
  {
    name: 'Internal Policy Request',
    message_text: 'Please review the updated procurement policy in the intranet before 5 PM.',
    url: 'https://intranet.company.com/policy',
    sender: 'compliance@company.com',
  },
  {
    name: 'Gift Card Attack',
    message_text: 'Need immediate purchase of gift cards for an executive partner. Keep this confidential.',
    url: 'https://pay-vendors-fast.com',
    sender: 'ceo-office@outlook-business.net',
  },
]

export const dashboardSeries = [
  { date: 'Mon', fraud: 34, safe: 81 },
  { date: 'Tue', fraud: 40, safe: 76 },
  { date: 'Wed', fraud: 29, safe: 90 },
  { date: 'Thu', fraud: 51, safe: 68 },
  { date: 'Fri', fraud: 43, safe: 72 },
  { date: 'Sat', fraud: 38, safe: 85 },
]

export const confidenceTrend = [
  { date: 'Mon', confidence: 79 },
  { date: 'Tue', confidence: 81 },
  { date: 'Wed', confidence: 83 },
  { date: 'Thu', confidence: 86 },
  { date: 'Fri', confidence: 89 },
  { date: 'Sat', confidence: 91 },
]

export const activityRows = [
  { message: 'Executive transfer request', prediction: 'Fraud', confidence: '96%' },
  { message: 'Supplier invoice update', prediction: 'Suspicious', confidence: '74%' },
  { message: 'Payroll portal reminder', prediction: 'Safe', confidence: '82%' },
  { message: 'Credential reset link', prediction: 'Fraud', confidence: '93%' },
]

export const rewardCurve = [
  { episode: 1, baseline: 14, improved: 16, successRate: 45 },
  { episode: 2, baseline: 20, improved: 29, successRate: 50 },
  { episode: 3, baseline: 23, improved: 41, successRate: 57 },
  { episode: 4, baseline: 30, improved: 58, successRate: 64 },
  { episode: 5, baseline: 38, improved: 73, successRate: 71 },
  { episode: 6, baseline: 42, improved: 88, successRate: 79 },
  { episode: 7, baseline: 45, improved: 101, successRate: 86 },
]
