import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <nav
          className="navbar navbar-expand-sm navbar-light bg-light"
        >
          <div className="container">
            <a className="navbar-brand" href="#">NextJS</a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item mx-2">
                  <Link href="/calculator">Calculator</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link href="/apod">Apod</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link href="/counter">Counter</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link href="/blog/message">Blog</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
