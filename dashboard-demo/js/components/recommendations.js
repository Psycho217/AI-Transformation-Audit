const arrowUp = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5m-7 7 7-7 7 7"/></svg>`;

export function renderRecommendations(container, recommendations) {
  const html = recommendations.map(rec => `
    <div class="rec-card">
      <div class="rec-header">
        <span class="rec-title">${rec.title}</span>
        <span class="rec-uplift">
          <span class="rec-uplift-icon ${rec.direction}">${arrowUp}</span>
          <span class="rec-uplift-value">${rec.uplift}%</span>
        </span>
      </div>
      ${rec.subtitle ? `<p class="rec-subtitle">${rec.subtitle}</p>` : ''}
    </div>
  `).join('');

  container.innerHTML = `
    <h3 class="sidebar-title">Strategic Insights</h3>
    ${html}
  `;
}
