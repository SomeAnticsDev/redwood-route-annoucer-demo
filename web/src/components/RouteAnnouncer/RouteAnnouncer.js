import { useLocation } from '@redwoodjs/router'

const RouteAnnouncer = () => {
  const location = useLocation()
  const [announcement, setAnnouncement] = React.useState()
  React.useEffect(() => {
    const h1 = document.querySelector('h1')
    setAnnouncement(h1?.textContent)
  }, [location.pathname])

  return (
    <div className="sr-only" aria-live="assertive" aria-atomic>
      {announcement}
    </div>
  )
}

export default RouteAnnouncer

/**
 * url changes, we want to say something
 * url -> location
 * 1. access to location?
 * - pathname -> /about, /contact
 * - blogpost/13
//  * h1 ->
 */
