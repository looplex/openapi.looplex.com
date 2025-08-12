"use client"

import { RedocStandalone } from 'redoc'

const json = require('./cases.json')

export default function Cases() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortOperationsAlphabetically: true,
        downloadFileName: 'openapi_looplex_cases.json'
      }}
    />
  )
}