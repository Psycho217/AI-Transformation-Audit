export function renderGoals(container, goals) {
  const bars = goals.map(g => `
    <div class="goal-item">
      <div class="goal-header">
        <span class="goal-label">${g.label}</span>
        <span class="goal-value">${g.current}%</span>
      </div>
      <div class="goal-track">
        <div class="goal-bar" style="width:${g.current}%; background:${g.color};"></div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <h3 class="card-title">Goal Tracker</h3>
    ${bars}
  `;
}
