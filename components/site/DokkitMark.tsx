import Image from 'next/image';

type DokkitMarkProps = {
  decorative?: boolean;
  className?: string;
};

export default function DokkitMark({ decorative = false, className = '' }: DokkitMarkProps) {
  return (
    <Image
      src="/dokkit-mark.png"
      alt={decorative ? '' : 'Dokkit'}
      aria-hidden={decorative || undefined}
      className={`dokkit-mark ${className}`}
      width={64}
      height={64}
      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
    />
  );
}
