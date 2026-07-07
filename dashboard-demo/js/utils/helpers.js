export function formatCurrency(value) {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
}

export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

export function computeDelta(current, previous) {
  const delta = ((current - previous) / previous) * 100;
  return {
    value: Math.abs(delta).toFixed(0),
    direction: delta >= 0 ? 'up' : 'down',
  };
}

export function relativeTime(timeStr) {
  return timeStr;
}
