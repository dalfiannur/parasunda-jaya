import React, { useEffect, useState } from 'react'
import Desktop from '../components/Homepage/Desktop'
import Mobile from '../components/Homepage/Mobile'

export default () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(
      window.navigator.userAgent.includes('Mobile') ? true : false
    )
  }, [setIsMobile])

  if (isMobile) {
    return (
      <Mobile />
    )
  } else {
    return (
      <Desktop />
    )
  }
}