'use client'

import React, { useEffect, useState } from 'react'
import { Row, Col, Grid, Typography, Card, Input, ConfigProvider, Layout, Flex, Button } from 'antd'
import Image from 'next/image'
import '@/styles/globals.css'

import {
  ApiOutlined, BookOutlined, CalendarOutlined,
  FileWordOutlined, ProfileOutlined, RightOutlined
} from '@ant-design/icons'
import { getAntdCurrentBreakPoint } from './helpers/antd/getAntdCurrentBreakPoint'
import SocialMediaLinks from '@/app/components/SocialMediaLinks'

const { Search } = Input
const { Text, Title } = Typography
const { Header, Footer, Content } = Layout
const { useBreakpoint } = Grid

const mobileTypographyTokens = {
  fontSize: '0.875rem', // 14px
  fontSizeHeading1: '2.375rem', // 38px
  fontSizeHeading2: '1.875rem', // 30px
  fontSizeHeading3: '1.5rem', // 24px
  fontSizeHeading4: '1.25rem', // 20px
  fontSizeHeading5: '1rem' // 16px
}

export default function Home() {
  const screens = useBreakpoint()
  const currentBreakPoint = getAntdCurrentBreakPoint(screens)
  const smallScreen = currentBreakPoint === 'xs' || currentBreakPoint === 'sm'
  const iconStyle = { fontSize: smallScreen ? '1.5rem' : 24, color: '#161719' }

  const [search, setSearch] = useState('')

  const arrActionsKeywords = [
    'funcionalidades', 'v1', 'actions', 'templates', 'fluxo', 'documentos',
    'operations', 'code', 'tinyurl', 'jwt'
  ]

  const arrCourtVenueKeywords = [
    'funcionalidades', 'v2.1', 'v3', 'next', 'levels', 'hierarchy', 'cnj',
    'court', 'venue', 'varas', 'foros', 'ritos',
    'julgado', 'tribunal', 'cidade', 'procedure', 'locale',
    'children'
  ]

  const arrFeriadosKeywords = [
    'funcionalidades', 'v1', 'feriado', 'recess',
    'região', 'dia', 'semana'
  ]

  const arrLooplex365Keywords = [
    'funcionalidades', 'v1', 'looplex', '365', 'renderização',
    'document', 'assembler', 'render', 'easy', 'docs',
    'surf', 'headless', 'jsbox', 'mjml', 'mustache',
    'pdf', 'converter', 'word'
  ]

  const arrCasesKeywords = [
    'plataforma', 'v1', 'cases', 'management', 'legado',
    'mobile', 'service', 'litigiosos', 'casos', 'transacionais',
    'administrativos', 'autenticação', 'advogado', 'andamento',
    'area', 'busca', 'calculo', 'monetário', 'fase', 'categoria',
    'cliente', 'contato', 'conteudo', 'julgamento', 'contrato',
    'cumprimentos', 'decisões', 'despesas', 'pedido', 'funcionário',
    'garantia', 'hierarquia', 'informações', 'adicionais', 'dado',
    'complementar', 'liabilities', 'calculation', 'motivo', 'pedir',
    'natureza', 'pais', 'partes', 'pedidos', 'produtos', 'push', 'publicação',
    'questões', 'processuais', 'solicitação', 'tabela', 'preço', 'tipo', 'decisão',
    'julgamnto', 'tarefa', 'agenda', 'timeline', 'timesheet', 'valores', 'apurados',
    'authentication', 'entry', 'client', 'legal', 'service', 'agreement', 'participant',
    'category', 'employee', 'claim', 'group', 'custom', 'fields'
  ]

  const arrTasksKeywords = [
    'plataforma', 'tasks', 'template', 'tarefas', 'deadline', 'event type'
  ]

  const arrAssemblerKeywords = [
    'plataforma', 'v1', 'web', 'looplex', 'fluxo', 'documentos', 'templates',
    'tarefas', 'assembler', 'tasks', 'documents', 'users',
    'organization', 'export', 'import', 'answers', 'review', 'json',
    'create', 'hide', 'restores', 'identifier', 'account', 'login'
  ]

  const arrContentKeywords = [
    'plataforma', 'v2', 'looplex', 'content', 'cases', 'create', 'update', 'delete',
    'documents', 'list', 'retrieve', 'check in', 'check out', 'hubshare',
    'url', 'user', 'views', 'objects'
  ]

  const arrStandardsKeywords = [
    'task', 'v2', 'codes', 'activity', 'standards', 'countries', 'regions',
    'localities'
  ]

  const [cards, updateCards] = useState({
    isVisibleCases: true,
    isVisibleTasks: true,
    isVisibleAssembler: true,
    isVisibleContent: true,
    isVisibleLooplex365: true,
    isVisibleFeriados: true,
    isVisibleCourtVenue: true,
    isVisibleActions: true,
    isVisibleStandards: true
  })

  useEffect(() => {
    updateCards({
      isVisibleCases: (search === '') || arrCasesKeywords.some(i => i.includes(search)),
      isVisibleTasks: (search === '') || arrTasksKeywords.some(i => i.includes(search)),
      isVisibleAssembler: (search === '') || arrAssemblerKeywords.some(i => i.includes(search)),
      isVisibleContent: (search === '') || arrContentKeywords.some(i => i.includes(search)),
      isVisibleLooplex365: (search === '') || arrLooplex365Keywords.some(i => i.includes(search)),
      isVisibleFeriados: (search === '') || arrFeriadosKeywords.some(i => i.includes(search)),
      isVisibleCourtVenue: (search === '') || arrCourtVenueKeywords.some(i => i.includes(search)),
      isVisibleActions: (search === '') || arrActionsKeywords.some(i => i.includes(search)),
      isVisibleStandards: (search === '') || arrStandardsKeywords.some(i => i.includes(search))
    })
  }, [search])

  const ColCard = ({ children }) => (

    <Col span={smallScreen ? 24 : 8}>

      <Card
        size='small'
        {...smallScreen
          ? {}
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
            fontSize: smallScreen ? '1.25rem' : 20
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

    <ConfigProvider
      theme={{
        token: smallScreen ? mobileTypographyTokens : {}
      }}
    >

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
            padding: smallScreen ? '0px 24px' : '0px 50px',
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
              onSearch={(text) => setSearch(text.toLowerCase())}
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
                    <Title level={smallScreen ? 3 : 1}>
                      Documentação - APIs Looplex
                    </Title>

                    <Text style={{ fontSize: smallScreen ? '1.25rem' : 20 }}>
                      Seja bem-vindo à página oficial de
                    </Text>

                    <Text strong style={{ fontSize: smallScreen ? '1.25rem' : 20 }}>
                      {' documentação das APIs da Looplex.'}
                    </Text>

                    <br />

                    <Text style={{ fontSize: smallScreen ? '1.25rem' : 20 }}>
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
                {...(smallScreen ? { width: 293, height: 197 } : { width: 408, height: 274 })}
                alt='Looplex'
              />

            </Col>

          </Row>


          {
            (
              cards.isVisibleActions ||
              cards.isVisibleCourtVenue ||
              cards.isVisibleFeriados ||
              cards.isVisibleLooplex365
            ) &&
            (
              <Row>

                <Title level={3}>
                  Funcionalidades
                </Title>

              </Row>
            )
          }

          <Row gutter={smallScreen ? [16, 16] : [24, 24]}>
            {
              cards?.isVisibleActions &&
              (
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
                    link='/v1_actions'
                  />

                </ColCard>
              )
            }

            {
              cards?.isVisibleCourtVenue &&
              (
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
                    text='Court Venue v2.1'
                    link='/v2_court_venue'
                  />

                  <BorderedLink
                    text='Court Venue v3'
                    link='/v3_court_venue'
                  />

                </ColCard>
              )
            }

            {
              cards?.isVisibleFeriados &&
              (
                <ColCard>

                  <CardHeader
                    title='Feriado'
                    icon={<CalendarOutlined style={iconStyle} />}
                  />

                  <Text>
                    API de feriados é um serviço que fornece datas oficiais de feriados para diferentes regiões.
                  </Text>

                  <BorderedLink
                    link='/v1_recess'
                    text='Feriado v1'
                  />

                </ColCard>
              )
            }

            {
              cards?.isVisibleLooplex365 &&
              (
                <ColCard>

                  <CardHeader
                    title='Looplex 365'
                    icon={<FileWordOutlined style={iconStyle} />}
                  />

                  <Text>
                    Ciclo de vida de aplicativos da microsoft e renderizações.
                  </Text>

                  <BorderedLink
                    link='/v1_looplex365'
                    text='Looplex 365 v1'
                  />

                </ColCard>
              )
            }

          </Row>

          {
            (
              cards.isVisibleCases ||
              cards.isVisibleTasks ||
              cards.isVisibleAssembler ||
              cards.isVisibleContent ||
              cards.isVisibleStandards
            ) &&
            (
              <Row>

                <Title level={3}>
                  Plataforma
                </Title>

              </Row>
            )
          }

          <Row gutter={smallScreen ? [16, 16] : [24, 24]}>

            {
              cards?.isVisibleCases &&
              (
                <ColCard>

                  <CardHeader
                    title='Cases'
                    icon={<BookOutlined style={iconStyle} />}
                  />

                  <div>
                    <Text>Grupo de APIs para gestão de dados de</Text>
                    <Text strong>{' casos litigiosos, transacionais e administrativos'}</Text>
                  </div>

                  <BorderedLink
                    link='/v1_cases'
                    text='Cases v1 (legado)'
                  />

                  <BorderedLink
                    link='/v2_case-management'
                    text='Case Management'
                  />

                </ColCard>
              )
            }

            {
              cards?.isVisibleTasks &&
              (
                <ColCard>

                  <CardHeader
                    title='Tasks'
                    icon={<BookOutlined style={iconStyle} />}
                  />

                  <div>
                    <Text>Grupo de APIs para consulta, registro de atualização de</Text>
                    <Text strong>{' tarefas'}</Text>
                  </div>

                  <BorderedLink
                    link='/v2_tasks'
                    text='Tasks'
                  />

                  <BorderedLink
                    link='/v2_task_template'
                    text='Tasks Template'
                  />

                </ColCard>
              )
            }

            {
              cards?.isVisibleAssembler &&
              (
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
                    link='/v1_assembler'
                    text='Assembler v1'
                  />

                </ColCard>
              )
            }

            {
              cards?.isVisibleContent &&
              (
                <ColCard>

                  <CardHeader
                    title='Content'
                    icon={<ProfileOutlined style={iconStyle} />}
                  />

                  <div>
                    <Text>Grupo de APIs do Looplex Content </Text>
                  </div>

                  <BorderedLink
                    link='/v2_looplex_content'
                    text='Looplex Content v2'
                  />

                </ColCard>
              )
            }
            {
              cards?.isVisibleStandards && 1 == 0 &&
              (
                <ColCard>
                  <CardHeader
                    title='Standards'
                    icon={<ProfileOutlined style={iconStyle} />}
                  />

                  <div>
                    <Text>Grupo de APIs do Looplex Standards </Text>
                  </div>

                  <BorderedLink
                    link='/v2_activity_task_codes'
                    text='Activity and Task Codes'
                  />                  
                  <BorderedLink
                    link='/v2_practice_areas'
                    text='Practice Areas'
                  />
                  <BorderedLink
                    link='/v2_locales'
                    text='Locales'
                  />
                  <BorderedLink
                    link='/v2_occupations'
                    text='Occupations'
                  />

                </ColCard>
              )}
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
