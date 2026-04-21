"use client"

import { RedocStandalone } from 'redoc'

const json = require('./deadline_calculator.json')

// Nome de function component deve ser PascalCase
export default function DeadlineCalculator() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_Deadline_Calculator.json'
      }}
    />
  )
}