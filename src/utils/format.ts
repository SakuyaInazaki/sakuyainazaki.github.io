const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function formatChanDate(dateInput: Date | string): string {
  const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  if (isNaN(d.getTime())) return String(dateInput);

  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = String(d.getFullYear() % 100).padStart(2, '0');
  const weekday = WEEKDAYS[d.getDay()];
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return `${month}/${day}/${year}(${weekday}) ${hours}:${minutes}:${seconds}`;
}

export function formatPostNumber(n: number): string {
  return `No.${String(n).padStart(6, '0')}`;
}

export function getMemeThumbnail(imagePath?: string): string | undefined {
  if (!imagePath) return undefined;
  if (imagePath.startsWith('/assets/memes/')) {
    const filename = imagePath.replace('/assets/memes/', '');
    if (filename.startsWith('thumbs/')) return imagePath;
    const base = filename.replace(/\.[^.]+$/, '');
    return `/assets/memes/thumbs/${base}.webp`;
  }
  return imagePath;
}
