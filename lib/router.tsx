import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextValue {
  currentPath: string;
  params: Record<string, string>;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  currentPath: '/',
  params: {},
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

function getHashPath(): string {
  const hash = window.location.hash.slice(1) || '/';
  return hash.startsWith('/') ? hash : '/' + hash;
}

function matchRoute(pattern: string, path: string): Record<string, string> | null {
  if (pattern === '*') return {};
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = path.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;

  const params: Record<string, string> = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
    } else if (patternParts[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
}

interface RouteDefinition {
  path: string;
  component: React.ComponentType<any>;
  auth?: string;
}

interface RouterProps {
  routes: RouteDefinition[];
  authRole?: string | null;
  fallback?: React.ComponentType;
  loginComponent?: React.ComponentType<{ requiredRole: string }>;
}

export function Router({ routes, authRole, fallback: Fallback, loginComponent: LoginComponent }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(getHashPath);
  const [params, setParams] = useState<Record<string, string>>({});

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getHashPath());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let matchedComponent: React.ReactNode = Fallback ? <Fallback /> : <div>404</div>;
  let matchedParams: Record<string, string> = {};

  for (const route of routes) {
    const result = matchRoute(route.path, currentPath);
    if (result !== null) {
      if (route.auth && route.auth !== authRole) {
        if (LoginComponent) {
          matchedComponent = <LoginComponent requiredRole={route.auth} />;
        } else {
          matchedComponent = <div>Unauthorized</div>;
        }
      } else {
        const Component = route.component;
        matchedComponent = <Component />;
      }
      matchedParams = result;
      break;
    }
  }

  useEffect(() => {
    setParams(matchedParams);
  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, params: matchedParams, navigate }}>
      {matchedComponent}
    </RouterContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, children, onClick, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = to;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClick?.(e);
  };

  return (
    <a href={`#${to}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
