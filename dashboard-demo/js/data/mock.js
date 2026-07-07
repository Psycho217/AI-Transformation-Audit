export const rawKPIs = {
  revenue: { current: 2480000, previous: 2101694, target: 3200000 },
  growth: { current: 14, previous: 12.5 },
  costSavings: { current: 325000, previous: 295454, target: 500000 },
  retention: { current: 87, previous: 75.65, target: 95 },
  ltv: 4200,
  cac: 980,
  churnRate: 4.2,
  avgOrderValue: 127,
};

export const monthlyRevenue = [
  { month: 'Jan', value: 180000, predicted: 175000 },
  { month: 'Feb', value: 210000, predicted: 200000 },
  { month: 'Mar', value: 245000, predicted: 230000 },
  { month: 'Apr', value: 220000, predicted: 240000 },
  { month: 'May', value: 260000, predicted: 255000 },
  { month: 'Jun', value: 275000, predicted: 270000 },
  { month: 'Jul', value: 290000, predicted: 285000 },
  { month: 'Aug', value: 350000, predicted: 295000 },
  { month: 'Sep', value: 310000, predicted: 320000 },
  { month: 'Oct', value: 330000, predicted: 335000 },
  { month: 'Nov', value: 360000, predicted: 355000 },
  { month: 'Dec', value: 380000, predicted: 370000 },
];

export const regions = [
  { name: 'Europe', revenue: 1000000, growth: 15 },
  { name: 'Asia', revenue: 800000, growth: 12 },
  { name: 'America', revenue: 440000, growth: 10 },
  { name: 'Australia', revenue: 240000, growth: 8 },
];

export const recentActivity = [
  { name: 'Samantha Lee', time: '12:21 PM', action: 'Purchased the Enterprise package for $1,249', avatar: 'SL' },
  { name: 'John Drew', time: '12:14 PM', action: 'Upgrade package from Basic to Pro', avatar: 'JD' },
  { name: 'Alixa Bliss', time: '11:01 AM', action: 'Downloaded the Q2 Market Insights report', avatar: 'AB' },
  { name: 'Alex McIntyre', time: '10:55 AM', action: 'Shared the dashboard to 5 team members', avatar: 'AM' },
];

export const goals = [
  { label: 'Monthly Revenue', current: 76, color: '#f5a623' },
  { label: 'Customer Retention', current: 87, color: '#6366f1' },
  { label: 'Cost Savings', current: 60, color: '#f5a623' },
];

export const integrations = [
  { name: 'Google Analytics', abbr: 'G' },
  { name: 'Slack', abbr: '#' },
  { name: 'Notion', abbr: 'N' },
  { name: 'Stripe', abbr: 'S' },
];

export const opportunities = [
  {
    name: 'Weekly Executive Reporting',
    current: {
      description: 'Operations team manually exports sales data from 3 systems, merges spreadsheets, calculates KPIs, creates charts, prepares PowerPoint, and emails executives.',
      time: '6 hrs/week',
      people: 2,
      errors: 'High risk of reporting errors',
    },
    proposed: 'Automated pipeline that collects data from all business systems, computes KPIs, generates dashboards, creates PDF reports, and emails stakeholders every Monday.',
    outcome: {
      timeSaved: '312 hrs/year',
      costSaved: '₹4.8L/year',
      implementationCost: '₹1.5L',
      payback: '3.7 months',
      roi: '220%',
    },
    priority: 'high',
    difficulty: 'low',
  },
  {
    name: 'Customer Support Automation',
    current: {
      description: '5 support agents handle 3,000 tickets/month with average response time of 12 minutes. High agent turnover due to repetitive queries.',
      time: '12 min avg response',
      people: 5,
      errors: '15% ticket escalation rate',
    },
    proposed: 'AI support agent with knowledge base integration, automatic ticket routing, and suggested replies. Human escalation for complex issues only.',
    outcome: {
      timeSaved: '65% tickets automated',
      costSaved: '₹8.4L/year',
      implementationCost: '₹3L',
      payback: '4.3 months',
      roi: '180%',
    },
    priority: 'high',
    difficulty: 'medium',
  },
  {
    name: 'Inventory Forecasting',
    current: {
      description: 'Manual inventory planning based on intuition. Frequent stock-outs on popular items. Overstocked slow-moving products tying up ₹12L in capital.',
      time: '8 hrs/week planning',
      people: 1,
      errors: '22% stock-out rate',
    },
    proposed: 'AI demand forecasting using historical sales data, seasonality, and market trends. Automated reorder triggers and supplier alerts.',
    outcome: {
      timeSaved: '400 hrs/year',
      costSaved: '₹6.2L/year',
      implementationCost: '₹2.5L',
      payback: '4.8 months',
      roi: '148%',
    },
    priority: 'medium',
    difficulty: 'medium',
  },
];
