const findRoute = (route = {}) => {
  const { pathname } = route;
  if (pathname === '/') return 'home';
  return '';
};
export default findRoute;
