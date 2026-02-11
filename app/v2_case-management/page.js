"use client"

import { RedocStandalone } from 'redoc'

const json = require('./case-management.json')

export default function Cases() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        requiredPropsFirst: true,
        sortPropsAlphabetically: true,
        downloadFileName: 'openapi_looplex_cases_v2.json'
      }}
    />
  )
}