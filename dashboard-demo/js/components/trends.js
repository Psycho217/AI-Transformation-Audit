const dotIcon = `<svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="currentColor"/></svg>`;
const arrowRight = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>`;

export function renderTrends(container, regions) {
  const rows = regions.map(r => `
    <tr>
      <td class="trend-region">${r.name}</td>
      <td class="trend-revenue">${r.revenueFormatted}</td>
      <td><span class="badge-growth">${r.growth}% ${dotIcon}</span></td>
      <td><a href="#" class="trend-link">Details ${arrowRight}</a></td>
    </tr>
  `).join('');

  container.innerHTML = `
    <h3 class="card-title">Trends & Comparisons</h3>
    <p class="card-subtitle">August Overview</p>
    <table class="trends-table">
      <tbody>${rows}</tbody>
    </table>
  `;
}
