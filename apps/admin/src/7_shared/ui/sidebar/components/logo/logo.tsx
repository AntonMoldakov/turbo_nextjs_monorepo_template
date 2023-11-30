import Link from 'next/link';
import { SvgLogo } from 'shared/src/ui/icon/logo';

export const Logo = () => {
  return (
    <Link href="/">
      <SvgLogo size={48} />
    </Link>
  );
};
