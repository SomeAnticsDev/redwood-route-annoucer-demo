import { Link, routes } from '@redwoodjs/router'
// import RouteAnnouncer from 'src/components/RouteAnnouncer'

const BlogLayout = ({ children }) => {
  return (
    <>
      {/* <RouteAnnouncer /> */}
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <Link
          className="text-5xl font-semibold tracking-tight text-blue-400 hover:text-blue-100 transition duration-100"
          to={routes.home()}
        >
          Redwood Blog
        </Link>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
