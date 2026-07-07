const clockIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
const usersIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const alertIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
const arrowRight = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>`;
const checkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;

function priorityClass(p) {
  if (p === 'high') return 'opp-priority-high';
  if (p === 'medium') return 'opp-priority-med';
  return 'opp-priority-low';
}

function difficultyLabel(d) {
  if (d === 'low') return 'Easy Win';
  if (d === 'medium') return 'Moderate';
  return 'Complex';
}

export function renderOpportunities(container, opportunities) {
  const cards = opportunities.map(opp => `
    <div class="opp-card">
      <div class="opp-card-header">
        <h3 class="opp-name">${opp.name}</h3>
        <div class="opp-badges">
          <span class="opp-badge ${priorityClass(opp.priority)}">${opp.priority} priority</span>
          <span class="opp-badge opp-difficulty">${difficultyLabel(opp.difficulty)}</span>
        </div>
      </div>

      <div class="opp-flow">
        <div class="opp-flow-step opp-current">
          <div class="opp-step-label">Current State</div>
          <p class="opp-step-desc">${opp.current.description}</p>
          <div class="opp-step-meta">
            <span>${clockIcon} ${opp.current.time}</span>
            <span>${usersIcon} ${opp.current.people} people</span>
            <span>${alertIcon} ${opp.current.errors}</span>
          </div>
        </div>

        <div class="opp-flow-arrow">${arrowRight}</div>

        <div class="opp-flow-step opp-proposed">
          <div class="opp-step-label">Proposed Solution</div>
          <p class="opp-step-desc">${opp.proposed}</p>
        </div>

        <div class="opp-flow-arrow">${arrowRight}</div>

        <div class="opp-flow-step opp-outcome">
          <div class="opp-step-label">Expected Outcome</div>
          <div class="opp-outcome-grid">
            <div class="opp-metric">
              <span class="opp-metric-value">${opp.outcome.timeSaved}</span>
              <span class="opp-metric-label">Time Saved</span>
            </div>
            <div class="opp-metric">
              <span class="opp-metric-value">${opp.outcome.costSaved}</span>
              <span class="opp-metric-label">Annual Savings</span>
            </div>
            <div class="opp-metric">
              <span class="opp-metric-value">${opp.outcome.roi}</span>
              <span class="opp-metric-label">ROI</span>
            </div>
            <div class="opp-metric">
              <span class="opp-metric-value">${opp.outcome.payback}</span>
              <span class="opp-metric-label">Payback</span>
            </div>
          </div>
        </div>
      </div>

      <div class="opp-footer">
        <div class="opp-impl-cost">Implementation: ${opp.outcome.implementationCost}</div>
        <span class="opp-action">${checkIcon} Approve</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="opp-section-header">
      <div>
        <h2 class="opp-section-title">Business Impact Dashboard</h2>
        <p class="opp-section-subtitle">AI-identified automation opportunities scored by ROI, feasibility, and business impact</p>
      </div>
    </div>
    <div class="opp-cards">${cards}</div>
  `;
}
