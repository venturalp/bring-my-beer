// @flow
import React, { type Node, useRef, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Grid from '../../components/Grid'

type TemplateProps = {
  children: Node,
}

const TemplateMaster = ({ children }: TemplateProps) => {
  const wrapper = useRef()
  const footerRef = useRef()
  const [shouldStick, setShouldStick] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onResize = e => {
    const windowHeight = window.innerHeight
    const wrapperHeight = wrapper.current ? wrapper.current.offsetHeight : 0
    const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0

    setShouldStick(windowHeight - wrapperHeight >= footerHeight)
  }

  return (
    <>
      <div ref={wrapper}>
        <Header />
        <Grid container justify="space-between">
          {children}
        </Grid>
      </div>
      <Footer ref={footerRef} shouldStick={shouldStick} />
    </>
  )
}

export default TemplateMaster
