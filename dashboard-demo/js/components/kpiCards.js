const icons = {
  revenue: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7"/></svg>`,
  growth: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
  savings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"/></svg>`,
  retention: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/></svg>`,
};

const arrowUpSm = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5m-7 7 7-7 7 7"/></svg>`;
const arrowDownSm = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14m7-7-7 7-7-7"/></svg>`;

export function renderKPICards(container, kpis) {
  const cards = Object.values(kpis).map(kpi => {
    const deltaClass = kpi.delta.direction === 'up' ? 'delta-up' : 'delta-down';
    const deltaArrow = kpi.delta.direction === 'up' ? arrowUpSm : arrowDownSm;
    const secondaryClass = kpi.secondaryDelta.direction === 'up' ? 'delta-up' : 'delta-down';
    const secondaryArrow = kpi.secondaryDelta.direction === 'up' ? arrowUpSm : arrowDownSm;

    return `
      <div class="kpi-card">
        <div class="kpi-header">
          <span class="kpi-icon">${icons[kpi.icon]}</span>
          <span class="kpi-label">${kpi.label}</span>
        </div>
        <div class="kpi-value">${kpi.value}</div>
        <div class="kpi-deltas">
          <span class="kpi-delta ${deltaClass}">+${kpi.delta.value}% ${deltaArrow}</span>
          <span class="kpi-delta ${secondaryClass}">+${kpi.secondaryDelta.value}% ${secondaryArrow}</span>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = cards;
}
