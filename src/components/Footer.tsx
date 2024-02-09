/*  ========================================================================
    # Components - Footer
    ========================================================================  */

import clsx from 'clsx';

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer className={clsx('', className)} {...props}>
      <div></div>
    </footer>
  );
};

export default Footer;
