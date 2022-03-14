import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  title?: string
}

const Panel = (props: Props) => {
  return (
    <div className="px-6 py-8 bg-white mb-8 rounded-md border">
      {props.title && (
        <div className="mb-5">
          <h2 className="font-bold text-sm text-riverMainGray">{props.title.toUpperCase()}</h2>
        </div>
      )}
      {props.children}
    </div>
  )
}

export default Panel
