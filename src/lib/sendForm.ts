export type Web3FormsPayload = Record<string, string | number | boolean>;

export async function sendForm(payload: Web3FormsPayload) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  if (!accessKey) {
    console.warn('VITE_WEB3FORMS_KEY is not set. Skipping real API call (mock success).');
    await new Promise((r) => setTimeout(r, 500));
    return { success: true, mock: true };
  }
  const body = { access_key: accessKey, ...payload };
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Request failed');
  }
  return await res.json();
}


