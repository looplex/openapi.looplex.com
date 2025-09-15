"use client"

import { RedocStandalone } from 'redoc'

const json = require('./v2_task_template.json')

// Nome de function component deve ser PascalCase
export default function TaskTemplate() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_v2_task_template.json'
      }}
    />
  )
}