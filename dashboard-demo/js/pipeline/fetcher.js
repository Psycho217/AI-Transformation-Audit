import * as mock from '../data/mock.js';

function simulateDelay(ms = 200) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchKPIs() {
  console.log('[Pipeline] Fetching KPIs...');
  await simulateDelay(150);
  return mock.rawKPIs;
}

export async function fetchRevenue() {
  console.log('[Pipeline] Fetching monthly revenue...');
  await simulateDelay(200);
  return mock.monthlyRevenue;
}

export async function fetchRegions() {
  console.log('[Pipeline] Fetching regional data...');
  await simulateDelay(100);
  return mock.regions;
}

export async function fetchActivity() {
  console.log('[Pipeline] Fetching real-time activity...');
  await simulateDelay(80);
  return mock.recentActivity;
}

export async function fetchGoals() {
  console.log('[Pipeline] Fetching goals...');
  await simulateDelay(60);
  return mock.goals;
}

export async function fetchIntegrations() {
  await simulateDelay(50);
  return mock.integrations;
}

export async function fetchOpportunities() {
  console.log('[Pipeline] Fetching automation opportunities...');
  await simulateDelay(180);
  return mock.opportunities;
}
