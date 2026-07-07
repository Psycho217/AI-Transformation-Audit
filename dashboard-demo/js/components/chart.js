export function renderChart(canvas, data) {
  const ctx = canvas.getContext('2d');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(245, 166, 35, 0.25)');
  gradient.addColorStop(1, 'rgba(245, 166, 35, 0)');

  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
  const tickColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)';
  const tooltipBg = isDark ? 'rgba(28,28,28,0.95)' : 'rgba(255,255,255,0.97)';
  const tooltipBorder = isDark ? '#333' : '#e0e0e0';
  const tooltipText = isDark ? '#fff' : '#1a1a1a';
  const tooltipBody = isDark ? '#ccc' : '#555';
  const labelColor = isDark ? '#fff' : '#1a1a1a';

  const pointBackgrounds = data.actual.map((_, i) =>
    i === data.interventionIndex ? '#f5a623' : 'rgba(245, 166, 35, 0.8)'
  );

  const pointRadii = data.actual.map((_, i) =>
    i === data.interventionIndex ? 8 : 4
  );

  const maxVal = Math.max(...data.actual, ...data.predicted);
  const yMax = Math.ceil(maxVal / 50) * 50 + 50;

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Actual Revenue',
          data: data.actual,
          borderColor: '#f5a623',
          backgroundColor: gradient,
          borderWidth: 2.5,
          pointBackgroundColor: pointBackgrounds,
          pointBorderColor: '#f5a623',
          pointBorderWidth: 2,
          pointRadius: pointRadii,
          pointHoverRadius: 8,
          fill: true,
          tension: 0.35,
        },
        {
          label: 'Predicted',
          data: data.predicted,
          borderColor: isDark ? 'rgba(150,150,150,0.4)' : 'rgba(0,0,0,0.15)',
          borderWidth: 1.5,
          borderDash: [6, 4],
          pointRadius: 0,
          fill: false,
          tension: 0.35,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: tooltipBg,
          borderColor: tooltipBorder,
          borderWidth: 1,
          titleColor: tooltipText,
          bodyColor: tooltipBody,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: (context) => `$${context.parsed.y.toFixed(0)}K`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: tickColor, font: { size: 12 } },
          border: { display: false },
        },
        y: {
          grid: { color: gridColor },
          ticks: {
            color: tickColor,
            font: { size: 12 },
            callback: (v) => v,
          },
          border: { display: false },
          min: 0,
          max: yMax,
        },
      },
    },
    plugins: [{
      afterDraw(chart) {
        const meta = chart.getDatasetMeta(0);
        const point = meta.data[data.interventionIndex];
        if (!point) return;

        const ctx = chart.ctx;
        const x = point.x;
        const y = point.y;

        ctx.save();
        ctx.fillStyle = 'rgba(245, 166, 35, 0.12)';
        ctx.fillRect(x - 20, chart.chartArea.top, 40, chart.chartArea.bottom - chart.chartArea.top);

        ctx.fillStyle = labelColor;
        ctx.font = '11px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(data.interventionValue, x, y - 18);
        ctx.restore();
      }
    }],
  });

  return chart;
}
