'use client'

import React from 'react'
import { Row, Col, Grid, Typography, Card, Input, ConfigProvider, Layout, Flex, Button } from 'antd'
import Image from 'next/image'
import '@/styles/globals.css'

import {
  ApiOutlined,
  BookOutlined,
  CalendarOutlined,
  FileWordOutlined,
  ProfileOutlined,
  RightOutlined
} from '@ant-design/icons'
import { getAntdCurrentBreakPoint } from '@/helpers/antd/getAntdCurrentBreakPoint'
import SocialMediaLinks from '@/components/SocialMediaLinks'

const { Search } = Input
const { Text, Title } = Typography
const { Header, Footer, Content } = Layout
const { useBreakpoint } = Grid

const iconStyle = { fontSize: 24, color: '#161719' }

export default function Home () {
  const screens = useBreakpoint()
  const currentBreakPoint = getAntdCurrentBreakPoint(screens)
  const smallScreen = currentBreakPoint === 'xs' || currentBreakPoint === 'sm'

  const ColCard = ({ children }) => (
    <Col span={smallScreen ? 24 : 8}>

      <Card
        size='small'
        {...smallScreen
          ? { style: { marginBottom: 16 } }
          : {
              style: { height: '100%' },
              styles: {
                body: { height: '100%' }
              }
            }
        }
      >
        {smallScreen
          ? children
          : (
            <Flex style={{ height: '100%' }} vertical justify='space-between'>
              {children}
            </Flex>
            )}
      </Card>

    </Col>
  )

  const CardHeader = ({ title, icon, image }) => {
    return (
      <Row
        style={{
          marginBottom: smallScreen ? 8 : 16,
          display: 'flex',
          alignItems: 'center'
        }}
      >

        <div
          style={{
            backgroundColor: '#E6F4FF',
            border: '0.5px solid #8AC2FF',
            borderRadius: 8,
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {icon ?? image}
        </div>

        <Text
          style={{
            marginLeft: 10,
            fontSize: 22
          }}
          strong
        >
          {title}
        </Text>

      </Row>
    )
  }

  const BorderedLink = ({ text, link }) => {
    return (
      <Button
        icon={<RightOutlined />}
        iconPosition='end'
        size={smallScreen ? 'small' : 'large'}
        style={{
          ...(smallScreen ? { width: '100%' } : {}),
          marginTop: smallScreen ? 8 : 16,
          display: 'flex',
          justifyContent: 'space-between'
        }}
        onClick={() => window.open(link, '_blank')}
      >
        {text}
      </Button>
    )
  }

  return (

    <ConfigProvider>

      <Layout
        style={{
          minHeight: '100dvh',
          maxWidth: '100dvw'
        }}
      >
        <Header
          style={{
            width: '100dvw',
            backgroundColor: '#F1F5F7',
            borderBottom: '0.5px solid grey',
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
            zIndex: 999,
            position: 'fixed'
          }}
        >
          <Flex
            justify='space-between'
            align='center'
            style={{ width: '100%', height: '100%' }}
          >

            <Image
              src='/logo.png'
              width={109}
              height={27}
              style={{ marginRight: 24 }}
              alt='Looplex logo'
            />

            <Search
              style={{ maxWidth: 500 }}
              placeholder='Pesquise na Looplex OpenAPI'
              onSearch={() => { }}
            />

            {!smallScreen && <SocialMediaLinks />}

          </Flex>
        </Header>

        <Content
          style={{
            marginTop: 64,
            padding: smallScreen ? '16px 12px' : '47px 52px',
            backgroundColor: '#EDF0F1'
          }}
        >
          <Row>

            <Col span={smallScreen ? 24 : 16}>

              <Flex align='center' style={{ height: '100%' }}>
                <Row>

                  <Col span={24}>
                    <Title level={1}>
                      Documentação - APIs Looplex
                    </Title>

                    <Text style={{ fontSize: smallScreen ? 14 : 20 }}>
                      Seja bem-vindo à página oficial de
                    </Text>

                    <Text strong style={{ fontSize: smallScreen ? 14 : 20 }}>
                      {' documentação das APIs da Looplex.'}
                    </Text>

                    <br />

                    <Text style={{ fontSize: smallScreen ? 14 : 20 }}>
                      Aqui você encontrará informações detalhadas, guias e exemplos para auxiliar na
                      integração eficiente dos nossos serviços.
                    </Text>
                  </Col>

                </Row>
              </Flex>

            </Col>

            <Col
              span={smallScreen ? 24 : 8}
              style={{
                ...(smallScreen
                  ? { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 24 }
                  : {}
                )
              }}
            >

              <Image
                src='/api_image.png'
                {...(smallScreen ? { width: 204, height: 137 } : { width: 408, height: 274 })}
                alt='Looplex'
              />

            </Col>

          </Row>

          <Row>
            <Title level={3}>
              Funcionalidades
            </Title>
          </Row>

          <Row gutter={24}>
            <ColCard>
              <CardHeader
                title='Actions'
                icon={<ApiOutlined style={iconStyle} />}
              />

              <div>
                <Text>É o grupo de APIs usado pelos</Text>
                <Text strong>{' templates '}</Text>
                <Text>relacionados ao</Text>
                <Text strong>{' fluxo de documentos.'}</Text>
              </div>

              <BorderedLink
                text='Actions v1'
                link='/v1/actions'
              />
            </ColCard>

            <ColCard>
              <CardHeader
                title='Court Venue'
                image={
                  <Image
                    src='/logo_justice.png'
                    width={33}
                    height={29}
                    alt='Looplex'
                  />
                }
              />

              <div>
                <Text>É o grupo de APIs responsável por definir</Text>
                <Text strong>{' a cidade ou tribunal '}</Text>
                <Text>onde o</Text>
                <Text strong>{' processo será julgado, '}</Text>
                <Text>com nos dados fornecidos.</Text>
              </div>

              <BorderedLink
                text='Court Venue'
                link='/court_venue'
              />
            </ColCard>

            <ColCard>
              <CardHeader
                title='Feriado'
                icon={<CalendarOutlined style={iconStyle} />}
              />

              <Text>
                API de feriados é um serviço que fornece datas oficiais de feriados para diferentes regiões.
              </Text>

              <BorderedLink
                link='/v1/recess'
                text='Feriado v1'
              />
            </ColCard>

          </Row>

          <Row>
            <Title level={3}>
              Plataforma
            </Title>
          </Row>

          <Row gutter={24}>

            <ColCard>
              <CardHeader
                title='Cases'
                icon={<BookOutlined style={iconStyle} />}
              />

              <div>
                <Text>API de casos gerencia dados e status de processos.</Text>
                <br />
                <Text>Permite consultar e atualizar informações automaticamente.</Text>
              </div>

              <BorderedLink
                link='/v1/cases'
                text='Cases V1 (legado)'
              />

              <BorderedLink
                link='/v1/case-management'
                text='Cases Management'
              />
            </ColCard>

            <ColCard>
              <CardHeader
                title='Assembler'
                icon={<ProfileOutlined style={iconStyle} />}
              />

              <div>
                <Text>É o grupo de APIs usado pela </Text>
                <Text strong>{' interface web do Looplex, '}</Text>
                <Text>relacionado ao</Text>
                <Text strong>{' fluxo de documentos, templates e tarefas.'}</Text>
              </div>

              <BorderedLink
                link='/v1/assembler'
                text='Assembler v1'
              />
            </ColCard>

            <ColCard>
              <CardHeader
                title='Looplex 365'
                icon={<FileWordOutlined style={iconStyle} />}
              />

              <Text>
                Ciclo de vida de aplicativos da microsoft e renderizações.
              </Text>

              <BorderedLink
                link='/v1/looplex365'
                text='Looplex 365 v1'
              />
            </ColCard>
          </Row>
        </Content>

        {smallScreen && (
          <Footer
            style={{
              width: '100dvw',
              backgroundColor: '#F1F5F7',
              borderTop: '0.5px solid grey'
            }}
          >
            <SocialMediaLinks />
          </Footer>
        )}
      </Layout>

    </ConfigProvider>
  )
}
