export const PLATFORM_PALETTE = {
  airbnb: '#D97C76',
  vrbo: '#D98FB3',
  booking: '#6F8FD6',
  evolve: '#7DBB91',
  ownerblock: '#9A84C7',
  expedia: '#D9B36F',
  direct: '#6FB9C9',
  other: '#A99B93',
} as const;

export function normalizePlatformKey(value: string): keyof typeof PLATFORM_PALETTE {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return 'other';

  if (raw === 'airbnb' || raw.includes('airbnb') || raw === 'abnb') return 'airbnb';
  if (raw === 'vrbo' || raw.includes('vrbo') || raw === 'homeaway' || raw.includes('homeaway')) return 'vrbo';
  if (raw === 'booking' || raw === 'booking.com' || raw.includes('booking')) return 'booking';
  if (raw === 'evolve' || raw.includes('evolve')) return 'evolve';
  if (raw === 'ownerblock' || raw === 'owner block' || raw === 'owner_block') return 'ownerblock';
  if (raw === 'expedia' || raw.includes('expedia')) return 'expedia';
  if (raw === 'direct' || raw.includes('direct') || raw.includes('website')) return 'direct';

  return 'other';
}

export function getPlatformButtonClass(platformLabel: string): string {
  return `button--platform-${normalizePlatformKey(platformLabel)}`;
}
