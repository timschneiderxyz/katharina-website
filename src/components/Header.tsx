/*  ========================================================================
    # Components - Header
    ========================================================================  */

import clsx from 'clsx';

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className={clsx('', className)} {...props}>
      <div></div>
    </header>
  );
};

export default Header;
