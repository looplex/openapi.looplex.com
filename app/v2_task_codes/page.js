"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v2_task_codes.json')

// Nome de function component deve ser PascalCase
export default function TaskCodes() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_task_codes.json'
      }}
    />
  )
}