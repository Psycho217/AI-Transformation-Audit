import { formatCurrency, computeDelta } from '../utils/helpers.js';

export function transformKPIs(raw) {
  console.log('[Pipeline] Transforming KPIs...');
  return {
    revenue: {
      label: 'Total Revenue',
      value: formatCurrency(raw.revenue.current),
      delta: computeDelta(raw.revenue.current, raw.revenue.previous),
      secondaryDelta: computeDelta(raw.revenue.current, raw.revenue.previous * 0.95),
      icon: 'revenue',
    },
    growth: {
      label: 'Growth Percentage',
      value: `+${raw.growth.current}%`,
      delta: computeDelta(raw.growth.current, raw.growth.previous),
      secondaryDelta: { value: '12', direction: 'up' },
      icon: 'growth',
    },
    costSavings: {
      label: 'Cost Savings',
      value: formatCurrency(raw.costSavings.current),
      delta: computeDelta(raw.costSavings.current, raw.costSavings.previous),
      secondaryDelta: { value: '10', direction: 'down' },
      icon: 'savings',
    },
    retention: {
      label: 'Customer Retention',
      value: `${raw.retention.current}%`,
      delta: computeDelta(raw.retention.current, raw.retention.previous),
      secondaryDelta: { value: '15', direction: 'up' },
      icon: 'retention',
    },
  };
}

export function transformRevenue(data) {
  console.log('[Pipeline] Transforming revenue chart data...');
  return {
    labels: data.map(d => d.month),
    actual: data.map(d => d.value / 1000),
    predicted: data.map(d => d.predicted / 1000),
    interventionIndex: 7,
    interventionValue: '+$60,000',
  };
}

export function transformRegions(data) {
  console.log('[Pipeline] Transforming regional data...');
  return data.map(r => ({
    ...r,
    revenueFormatted: `$${(r.revenue / 1000).toFixed(0)},000`,
  }));
}
