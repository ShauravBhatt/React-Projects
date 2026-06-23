export default function Contact() {
  return (
    <div className="flex min-h-[700px] items-center justify-center bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Side */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                Contact
              </span>

              <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Get in Touch
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Have questions about React Router or this demo project? Feel
                free to reach out using the form.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center text-slate-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-orange-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <div className="ml-4 font-medium">
                    Remote First • Available Worldwide
                  </div>
                </div>

                <div className="flex items-center text-slate-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-orange-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <div className="ml-4 font-medium">+91 98765 43210</div>
                </div>

                <div className="flex items-center text-slate-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-orange-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <div className="ml-4 font-medium">hello@example.com</div>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <form className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="mt-2 rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-orange-500 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="mt-4 rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-orange-500 focus:outline-none"
              />

              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Phone Number"
                className="mt-4 rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-orange-500 focus:outline-none"
              />

              <button
                type="submit"
                className="mt-5 rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
