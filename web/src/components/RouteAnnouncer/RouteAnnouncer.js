import { useLocation } from '@redwoodjs/router'

const RouteAnnouncer = () => {
  const { pathname } = useLocation()
  const [announcement, setAnnouncement] = React.useState()

  React.useEffect(() => {
    const h1 = document.querySelector('h1')
    if (h1?.textContent) {
      setAnnouncement(h1.textContent)
    } else {
      setAnnouncement(pathname)
    }
  }, [pathname])

  return (
    <div className="sr-only" aria-live="assertive" aria-atomic>
      {announcement}
    </div>
  )
}

export default RouteAnnouncer
