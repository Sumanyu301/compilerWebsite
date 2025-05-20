import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet, Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Compiler", href: "/compiler", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  const location = useLocation();

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === location.pathname,
  }));

  return (
    <div className="min-h-screen bg-base-300">
      <Disclosure as="nav" className="bg-base-100">
        {({ open }) => (
          <>
            <div className="flex h-16 items-center">
              {/* Logo area */}
              <div className="flex-shrink-0 pl-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h1 className="font-bold text-xl">
                    <span className="text-primary">Compiler</span>
                    <span className="text-accent ml-1">Website</span>
                  </h1>
                </div>
              </div>

              {/* Center Navigation */}
              <div className="hidden md:flex flex-1 justify-center">
                <div className="flex items-baseline space-x-8">
                  {updatedNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-primary text-primary-content"
                          : "text-base-content hover:bg-base-200 hover:text-base-content",
                        "rounded-md px-4 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center">
                <Link
                  to="/login"
                  className="text-base-content hover:bg-base-200 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary hover:bg-primary-focus text-primary-content px-4 py-2 text-sm font-medium transition-colors"
                >
                  Sign up
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-base-content hover:bg-base-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* Mobile menu panel */}
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {updatedNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-primary text-primary-content"
                        : "text-base-content hover:bg-base-200",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className="border-t border-base-200 pt-4 mt-2">
                  <Disclosure.Button
                    as={Link}
                    to="/login"
                    className="block text-base-content hover:bg-base-200 rounded-md px-3 py-2 text-base font-medium"
                  >
                    Sign in
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="/signup"
                    className="block bg-primary hover:bg-primary-focus text-primary-content rounded-md px-3 py-2 text-base font-medium mt-2"
                  >
                    Sign up
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
