import { AntdRegistry } from '@ant-design/nextjs-registry'

export const metadata = {
  title: 'Looplex OpenAPI',
  description: 'Documentação de APIs da Looplex'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
