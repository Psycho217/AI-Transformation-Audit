export function renderActivity(container, activity) {
  const rows = activity.map(a => `
    <tr>
      <td>
        <div class="activity-user">
          <div class="avatar">${a.avatar}</div>
          <span>${a.name}</span>
        </div>
      </td>
      <td class="activity-time">${a.time}</td>
      <td class="activity-action">${a.action}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <h3 class="card-title">Real Time Activity (Customer)</h3>
    <table class="activity-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}
