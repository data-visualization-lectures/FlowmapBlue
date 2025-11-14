export default function sendEvent(key: string, title: string) {
  try {
    void fetch('https://flowmap-blue-stats.netlify.app/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key,
        title,
        href: document.location.href,
        referrer: document.referrer,
      }),
    }).catch((err) => {
      console.error('Failed sending log event', err);
    });
  } catch (err) {
    console.error('Failed sending log event', err);
  }
}
