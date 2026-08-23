export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#1c1c1a]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="text-xl font-medium tracking-tight">
            dokkit
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="hover:opacity-60">
              How it works
            </a>
            <a href="#about" className="hover:opacity-60">
              About
            </a>
          </nav>
        </header>

        <section className="flex flex-1 items-center py-24">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.18em] text-[#77756e]">
              A thinking tool for real life
            </p>

            <h1 className="max-w-3xl text-5xl font-normal leading-[1.05] tracking-[-0.04em] sm:text-7xl">
              You don’t need to do more.
              <br />
              You need to know what fits.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#66645e]">
              Dokkit helps you understand what you can actually fit into
              your day — without turning your life into a productivity
              scoreboard.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="#how-it-works"
                className="border border-[#1c1c1a] px-5 py-3 text-sm transition hover:bg-[#1c1c1a] hover:text-[#f7f6f2]"
              >
                See how it works
              </a>

              <span className="text-sm text-[#77756e]">
                Coming soon
              </span>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-[#d8d6d0] py-20"
        >
          <div className="grid gap-12 sm:grid-cols-3">
            <div>
              <div className="mb-4 text-sm text-[#77756e]">01</div>
              <h2 className="text-xl">Write it down</h2>
              <p className="mt-3 text-sm leading-6 text-[#66645e]">
                Put down what needs doing. No complicated setup.
              </p>
            </div>

            <div>
              <div className="mb-4 text-sm text-[#77756e]">02</div>
              <h2 className="text-xl">Know what fits</h2>
              <p className="mt-3 text-sm leading-6 text-[#66645e]">
                Dokkit considers your available time and what each task
                actually takes.
              </p>
            </div>

            <div>
              <div className="mb-4 text-sm text-[#77756e]">03</div>
              <h2 className="text-xl">Get on with it</h2>
              <p className="mt-3 text-sm leading-6 text-[#66645e]">
                No scores. No streaks. No pressure to be productive.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#d8d6d0] py-6 text-sm text-[#77756e]">
          © {new Date().getFullYear()} Dokkit
        </footer>
      </div>
    </main>
  );
}