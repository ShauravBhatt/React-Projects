import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <aside className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200">
        <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 px-6 py-12 sm:px-12 sm:py-20 lg:flex-row">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-600">
              React Router Demo
            </p>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Learn Routing
              <span className="block text-orange-600">
                Through Real Projects
              </span>
            </h1>

            <p className="mt-4 text-slate-600">
              A simple practice project focused on React Router, navigation,
              layouts, and route management.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700"
            >
              <svg
                fill="white"
                width="25"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              className="w-full max-w-md rounded-lg"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Hero"
            />
          </div>
        </div>
      </aside>

      <section className="mt-16 text-center">
        <img
          className="mx-auto w-48 sm:w-80 rounded-lg"
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"
          alt="Feature"
        />

        <h2 className="mt-8 text-3xl font-bold text-slate-900 sm:text-5xl">
          Explore Modern Navigation
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Practice nested routes, layouts, navigation links, and route
          management while keeping the UI simple and clean.
        </p>
      </section>
    </div>
  );
}
