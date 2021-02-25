import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
  const { pathname } = useLocation();

  const appPages = {
    '/films': '2',
    '/popular-films': '3',
    '/top-rated-films': '4',
    '/latest-films': '5',
  };
  
  if (pathname === '/') {
    return '1';
  } else {
    const ifUrlHasStash = pathname.indexOf('/', 1) !== -1 ? true : false;

    if (!ifUrlHasStash) {
      return appPages[pathname];
    } else {
      return appPages[`${pathname.substring(0, pathname.indexOf('/', 1))}`]
    }
  }
}
