async function fetchStatuses() {
  const res = await fetch('/api/status');
  const data = await res.json();
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (const entry of data) {
    const item = document.createElement('li');
    item.textContent = `${entry.name}: ${entry.status}`;
    list.appendChild(item);
  }
}

async function updateStatus() {
  const name = document.getElementById('name').value;
  const status = document.getElementById('status').value;
  await fetch('/api/status', {
    method: 'POST',
    body: JSON.stringify({ name, status }),
  });
  fetchStatuses();
}

fetchStatuses();
setInterval(fetchStatuses, 5000); // Refresh every 5 seconds

