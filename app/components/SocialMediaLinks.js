import { Flex } from 'antd'
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  GlobalOutlined
} from '@ant-design/icons'
import Link from 'next/link'

const SocialMediaLinks = () => {
  return (
    <Flex justify='space-between'>

      <Link
        href='https://www.facebook.com/looplex/'
        style={{ display: 'flex', alignItems: 'center' }}
        target='_blank'
        rel='noreferrer'
      >
        <FacebookFilled className='primary-icon-btn' style={{ fontSize: 26, color: '#1677FF', marginLeft: 24 }} />
      </Link>

      <Link
        href='https://www.linkedin.com/company/looplex/'
        style={{ display: 'flex', alignItems: 'center' }}
        target='_blank'
        rel='noreferrer'
      >
        <LinkedinFilled className='primary-icon-btn' style={{ fontSize: 26, color: '#1677FF', marginLeft: 24 }} />
      </Link>

      <Link
        href='https://www.instagram.com/looplex/'
        style={{ display: 'flex', alignItems: 'center' }}
        target='_blank'
        rel='noreferrer'
      >
        <InstagramFilled className='primary-icon-btn' style={{ fontSize: 26, color: '#1677FF', marginLeft: 24 }} />
      </Link>

      <Link
        href='https://www.looplex.com.br/'
        style={{ display: 'flex', alignItems: 'center' }}
        target='_blank'
        rel='noreferrer'
      >
        <GlobalOutlined className='primary-icon-btn' style={{ fontSize: 26, color: '#1677FF', marginLeft: 24 }} />
      </Link>

    </Flex>
  )
}

export default SocialMediaLinks
