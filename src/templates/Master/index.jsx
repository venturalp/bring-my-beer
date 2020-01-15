// @flow
import React, { type Node } from 'react'

type TemplateProps = {
  children: Node,
}

const TemplateMaster = ({ children }: TemplateProps) => {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  )
}

export default TemplateMaster
