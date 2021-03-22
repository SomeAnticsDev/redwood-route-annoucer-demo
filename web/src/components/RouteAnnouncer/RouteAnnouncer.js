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
    <div styles={srOnlyStyles} aria-live="assertive" aria-atomic>
      {announcement}
    </div>
  )
}

export default RouteAnnouncer

const srOnlyStyles = {
  position: 'absolute',
  top: 0,
  width: 1,
  height: 1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}
