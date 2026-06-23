import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="px-4 py-3 lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-10 w-auto"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center gap-2 lg:order-2">
            <Link
              to="#"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block rounded-md py-2 px-3 ${isActive ? "text-orange-500" : "text-gray-700"} transition duration-200 hover:bg-slate-100 hover:text-orange-600 lg:hover:bg-transparent lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block rounded-md py-2 px-3
                    ${isActive ? "text-orange-500" : "text-gray-700"} transition duration-200 hover:bg-slate-100 hover:text-orange-600 lg:hover:bg-transparent lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block rounded-md py-2 px-3
                    ${isActive ? "text-orange-500" : "text-gray-700"} transition duration-200 hover:bg-slate-100 hover:text-orange-600 lg:hover:bg-transparent lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block rounded-md py-2 px-3 
                    ${isActive ? "text-orange-500" : "text-gray-700"} transition duration-200 hover:bg-slate-100 hover:text-orange-600 lg:hover:bg-transparent lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
