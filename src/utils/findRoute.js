const findRoute = (route = {}) => {
  const { pathname } = route;
  if (pathname === '/') return 'home';
  if (pathname === '/sticker') return 'sticker';
  if (pathname === '/translate') return 'translate';
  return '';
};
export default findRoute;
