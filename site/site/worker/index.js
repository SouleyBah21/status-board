let statuses = [];

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/api/status') {
      return new Response(JSON.stringify(statuses), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (request.method === 'POST' && url.pathname === '/api/status') {
      const body = await request.json();
      const { name, status } = body;
      const existing = statuses.find(s => s.name === name);
      if (existing) {
        existing.status = status;
      } else {
        statuses.push({ name, status });
      }
      return new Response('OK');
    }

    return new Response('Not found', { status: 404 });
  }
};

