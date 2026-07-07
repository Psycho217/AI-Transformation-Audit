import { fetchKPIs, fetchRevenue, fetchRegions, fetchActivity, fetchGoals, fetchIntegrations, fetchOpportunities } from './pipeline/fetcher.js';
import { transformKPIs, transformRevenue, transformRegions } from './pipeline/transform.js';
import { generateRecommendations, analyzeFinancialHealth } from './pipeline/engine.js';
import { renderKPICards } from './components/kpiCards.js';
import { renderChart } from './components/chart.js';
import { renderRecommendations } from './components/recommendations.js';
import { renderActivity } from './components/activity.js';
import { renderTrends } from './components/trends.js';
import { renderGoals } from './components/goals.js';
import { renderOpportunities } from './components/opportunities.js';
import { renderFinancialHealth } from './components/financialHealth.js';

async function init() {
  console.log('[App] Starting pipeline...');
  const startTime = performance.now();

  const [rawKPIs, rawRevenue, rawRegions, activity, goals, integrations, opportunities] = await Promise.all([
    fetchKPIs(),
    fetchRevenue(),
    fetchRegions(),
    fetchActivity(),
    fetchGoals(),
    fetchIntegrations(),
    fetchOpportunities(),
  ]);

  const kpis = transformKPIs(rawKPIs);
  const chartData = transformRevenue(rawRevenue);
  const regions = transformRegions(rawRegions);
  const recommendations = generateRecommendations(rawKPIs, rawRegions);
  const financialInsights = analyzeFinancialHealth(rawKPIs);

  renderKPICards(document.getElementById('kpi-cards'), kpis);
  renderChart(document.getElementById('chart-canvas'), chartData);
  renderRecommendations(document.getElementById('recommendations'), recommendations);
  renderFinancialHealth(document.getElementById('financial-health'), financialInsights);
  renderActivity(document.getElementById('activity'), activity);
  renderTrends(document.getElementById('trends'), regions);
  renderGoals(document.getElementById('goals'), goals);
  renderOpportunities(document.getElementById('opportunities'), opportunities);

  renderIntegrations(document.getElementById('integrations'), integrations);

  const elapsed = (performance.now() - startTime).toFixed(0);
  console.log(`[App] Pipeline complete in ${elapsed}ms`);
}

function renderIntegrations(container, integrations) {
  const icons = integrations.map(i => `<div class="integration-icon">${i.abbr}</div>`).join('');
  container.innerHTML = `
    <h3 class="sidebar-title">Connected</h3>
    <div class="integrations-row">${icons}</div>
    <div class="integrations-count">
      <span class="count-badge">20+</span>
      <a href="#" class="rec-link">See All <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg></a>
    </div>
  `;
}

const sunSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
const moonSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  toggle.innerHTML = saved === 'dark' ? sunSVG : moonSVG;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.innerHTML = next === 'dark' ? sunSVG : moonSVG;
  });
}

initThemeToggle();
init();
