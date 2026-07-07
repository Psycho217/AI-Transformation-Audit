export function generateRecommendations(kpis, regions) {
  console.log('[Pipeline] Running AI recommendation engine...');
  const recommendations = [];

  const avgGrowth = regions.reduce((sum, r) => sum + r.growth, 0) / regions.length;
  const topRegion = regions.reduce((best, r) => r.growth > best.growth ? r : best, regions[0]);

  if (topRegion.growth > avgGrowth * 1.1) {
    recommendations.push({
      title: `Scale acquisition spend in ${topRegion.name}`,
      subtitle: `${topRegion.name} is growing ${(topRegion.growth - avgGrowth).toFixed(1)}% faster than average — highest marginal return on ad spend.`,
      uplift: Math.round((topRegion.growth - avgGrowth) + 2),
      direction: 'up',
    });
  }

  if (kpis.costSavings.current < kpis.costSavings.target * 0.7) {
    recommendations.push({
      title: 'Reduce logistics spend by 8%',
      subtitle: `Supply chain costs are ${Math.round(100 - (kpis.costSavings.current / kpis.costSavings.target) * 100)}% above target. Route optimization can recover ~₹2.4L/year.`,
      uplift: 8,
      direction: 'up',
    });
  }

  const ltvCacRatio = kpis.ltv / kpis.cac;
  if (ltvCacRatio < 5) {
    recommendations.push({
      title: 'Fix LTV:CAC before scaling',
      subtitle: `Ratio is ${ltvCacRatio.toFixed(1)}x (healthy: >3x). Improve retention or reduce CAC before investing in growth — AI alone won't fix this structural issue.`,
      uplift: Math.round(ltvCacRatio),
      direction: 'up',
    });
  }

  console.log(`[Engine] Generated ${recommendations.length} insights`);
  return recommendations.slice(0, 3);
}

export function analyzeFinancialHealth(kpis) {
  console.log('[Engine] Analyzing financial health...');
  const ltvCac = kpis.ltv / kpis.cac;
  const insights = [];

  if (ltvCac < 3) {
    insights.push({ metric: 'LTV:CAC', value: `${ltvCac.toFixed(1)}x`, status: 'critical', note: 'Below 3x threshold. Structural issue — fix before AI investment.' });
  } else if (ltvCac < 5) {
    insights.push({ metric: 'LTV:CAC', value: `${ltvCac.toFixed(1)}x`, status: 'warning', note: 'Acceptable but not healthy. Target 5x+ for sustainable growth.' });
  } else {
    insights.push({ metric: 'LTV:CAC', value: `${ltvCac.toFixed(1)}x`, status: 'healthy', note: 'Strong unit economics. Safe to invest in growth.' });
  }

  const retentionRate = kpis.retention.current;
  if (retentionRate < 80) {
    insights.push({ metric: 'Retention', value: `${retentionRate}%`, status: 'critical', note: 'Leaky bucket. Acquiring customers without retaining them.' });
  } else if (retentionRate < 90) {
    insights.push({ metric: 'Retention', value: `${retentionRate}%`, status: 'warning', note: 'Room to improve. Each 1% lift = significant LTV increase.' });
  } else {
    insights.push({ metric: 'Retention', value: `${retentionRate}%`, status: 'healthy', note: 'Strong retention. Focus on expansion revenue.' });
  }

  insights.push({ metric: 'Avg Order', value: `$${kpis.avgOrderValue}`, status: 'healthy', note: 'Healthy AOV. Upsell/cross-sell can push this higher.' });

  return insights;
}
