export default function About() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="space-y-10 md:flex md:items-center md:gap-12 md:space-y-0">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              className="w-full rounded-2xl border border-slate-200 shadow-sm"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Team collaboration"
            />
          </div>

          <div className="md:w-7/12 lg:w-6/12">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              About This Project
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Learn React Router Through Practical Examples
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              This project is built to explore React Router concepts in a
              practical way. It demonstrates page navigation, route handling,
              nested routes, and reusable layouts while maintaining a clean and
              beginner-friendly code structure.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The goal is not to create a production-ready application but to
              understand how modern React applications manage navigation and
              user experience through client-side routing. Every page in this
              project is designed to help developers gain hands-on experience
              with routing fundamentals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                React Router
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Navigation
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Nested Routes
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Layouts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
