"use client"

import { RedocStandalone } from 'redoc'

const json = require('./recess.json')

export default function Recess() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_recess.json'
      }}
    />
  )
}