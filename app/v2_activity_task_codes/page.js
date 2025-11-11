"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v2_activity_task_codes.json')

// Nome de function component deve ser PascalCase
export default function ActivityTaskCodes() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_activity_task_codes.json'
      }}
    />
  )
}