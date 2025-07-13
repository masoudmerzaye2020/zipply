export async function POST(req: Request) {
  const { email } = await req.json();

  const googleRes = await fetch('https://script.google.com/macros/s/AKfycbwd1B20iA9s0fVEcXyvPbH2gByhUBKQZspS30xT_QHqCAA1_iRsjnXpptNpnPtH6TNnHQ/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  const data = await googleRes.json();

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
    status: googleRes.status,
  });
}
