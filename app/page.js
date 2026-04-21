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

  const arrCourtVenueV2_1Keywords = [
    'funcionalidades', 'v2.1', 'next', 'levels', 'hierarchy', 'cnj',
    'court', 'venue', 'varas', 'foros', 'ritos',
    'julgado', 'tribunal', 'cidade', 'procedure', 'locale',
    'children'
  ]

  const arrCourtVenueV3Keywords = [
    'funcionalidades', 'v3', 'next', 'levels', 'hierarchy', 'cnj',
    'court', 'venue', 'varas', 'foros', 'ritos',
    'julgado', 'tribunal', 'cidade', 'procedure', 'locale',
    'children'
  ]

  const arrFeriadosKeywords = ['funcionalidades', 'v1', 'feriado', 'recess', 'região', 'dia', 'semana']

  const arrLooplex365Keywords = [
    'funcionalidades', 'v1', 'looplex', '365', 'renderização', 'document', 'assembler', 'pdf',
    'render', 'easy', 'docs', 'surf', 'headless', 'jsbox', 'mjml', 'mustache', 'converter', 'word'
  ]

  const arrCasesV1Keywords = [
    'v1', 'api', 'logon', 'cases', 'legado', 'mobile', 'service', 'litigiosos', 'casos', 'transacionais',
    'administrativos', 'autenticação', 'advogado', 'andamento', 'area', 'busca', 'calculo',
    'monetário', 'fase', 'categoria', 'cliente', 'contato', 'conteudo', 'julgamento', 'apurados',
    'contrato', 'cumprimentos', 'decisões', 'despesas', 'pedido', 'funcionário', 'custom', 'fields',
    'garantia', 'hierarquia', 'informações', 'adicionais', 'dado', 'complementar',
    'liabilities', 'calculation', 'motivo', 'pedir', 'natureza', 'pais', 'partes', 'pedidos',
    'produtos', 'push', 'publicação', 'questões', 'processuais', 'solicitação', 'tabela', 'preço',
    'tipo', 'decisão', 'julgamnto', 'tarefa', 'agenda', 'timeline', 'timesheet', 'valores'
  ]

  const arrCasesV2Keywords = [
    'v2', 'case', 'management', 'token', 'timeline', 'timesheet', 'authentication', 'entry', 'client',
    'legal', 'service', 'agreement', 'participant', 'category', 'employee', 'claim', 'group', 'custom',
    'fields', 'andamento', 'contrato', 'caso', 'cliente', 'parte', 'funcionario', 'pedido', 'area',
    'token'
  ]

  const arrTasksKeywords = ['plataforma', 'task', 'tarefas', 'deadline', 'event type']

  const arrTaskTemplateKeywords = [...arrTasksKeywords, 'template']

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

  const arrStandardsCodesKeywords = ['task', 'codes', 'activity', 'standards', 'atividade', 'código', 'tarefa']

  const arrStandardsPracticeAreasKeywords = ['standards', 'area', 'practice', 'prática']

  const arrStandardsLocaleKeywords = [
    'standards', 'countries', 'regions', 'localities', 'países', 'regiões',
    'localidades', 'cidade', 'estado', 'states', 'cities', 'locale', 'city'
  ]

  const arrStandardsOccupationsKeywords = ['standards', 'occupations', 'ocupação', 'ocupações']

  const arrStandardsLegalPersonClassificationKeywords = [
    'v3', 'standards', 'legal', 'person', 'classification', 'órgão', 'deliberativo', 'societário'
  ]

  const arrStandardsContractClassificationKeywords = [
    'v3', 'standards', 'legal', 'contract', 'classification', 'transaction', 'transação', 'type',
    'negócio', 'jurídico', 'natureza', 'atividade', 'econômica', 'contrato'
  ]

  const arrStardardsDeadlineCalculatorKeywords = ['standards', 'deadline', 'calculator', 'calculadora', 'prazos', 'v2', 'cálculo', 'prazo', 'regra', 'rule', 'count', 'calendar', 'úteis', 'calendar', 'business']

  const [cards, updateCards] = useState({
    isVisibleContractClassification: true,
    isVisibleLegalPersonClassification: true,
    isVisibleCasesV1: true,
    isVisibleCasesV2: true,
    isVisibleTasks: true,
    isVisibleTaskTemplate: true,
    isVisibleAssembler: true,
    isVisibleContent: true,
    isVisibleLooplex365: true,
    isVisibleFeriados: true,
    isVisibleCourtVenueV2_1: true,
    isVisibleCourtVenueV3: true,
    isVisibleActions: true,
    isVisibleStandardsCodes: true,
    isVisibleStandardsPracticeArea: true,
    isVisibleStandardsLocale: true,
    isVisibleStandardsOccupation: true,
    isVisibleStardardsDeadlineCalculator: true
  })

  useEffect(() => {
    updateCards({
      isVisibleContractClassification: (search === '') || arrStandardsContractClassificationKeywords.some(i => i.includes(search)),
      isVisibleLegalPersonClassification: (search === '') || arrStandardsLegalPersonClassificationKeywords.some(i => i.includes(search)),
      isVisibleCasesV1: (search === '') || arrCasesV1Keywords.some(i => i.includes(search)),
      isVisibleCasesV2: (search === '') || arrCasesV2Keywords.some(i => i.includes(search)),
      isVisibleTasks: (search === '') || arrTasksKeywords.some(i => i.includes(search)),
      isVisibleTaskTemplate: (search === '') || arrTaskTemplateKeywords.some(i => i.includes(search)),
      isVisibleAssembler: (search === '') || arrAssemblerKeywords.some(i => i.includes(search)),
      isVisibleContent: (search === '') || arrContentKeywords.some(i => i.includes(search)),
      isVisibleLooplex365: (search === '') || arrLooplex365Keywords.some(i => i.includes(search)),
      isVisibleFeriados: (search === '') || arrFeriadosKeywords.some(i => i.includes(search)),
      isVisibleCourtVenueV2_1: (search === '') || arrCourtVenueV2_1Keywords.some(i => i.includes(search)),
      isVisibleCourtVenueV3: (search === '') || arrCourtVenueV3Keywords.some(i => i.includes(search)),
      isVisibleActions: (search === '') || arrActionsKeywords.some(i => i.includes(search)),
      isVisibleStandardsCodes: (search === '') || arrStandardsCodesKeywords.some(i => i.includes(search)),
      isVisibleStandardsLocale: (search === '') || arrStandardsLocaleKeywords.some(i => i.includes(search)),
      isVisibleStandardsOccupation: (search === '') || arrStandardsOccupationsKeywords.some(i => i.includes(search)),
      isVisibleStandardsPracticeArea: (search === '') || arrStandardsPracticeAreasKeywords.some(i => i.includes(search)),
      isVisibleStardardsDeadlineCalculator: (search === '') || arrStardardsDeadlineCalculatorKeywords.some(i => i.includes(search))
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
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
              cards.isVisibleCourtVenueV2_1 ||
              cards.isVisibleCourtVenueV3 ||
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
              (
                cards.isVisibleCourtVenueV2_1 ||
                cards.isVisibleCourtVenueV3 ||
                cards.isVisibleContractClassification ||
                cards.isVisibleLegalPersonClassification
              ) &&
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

                  {
                    cards.isVisibleCourtVenueV2_1 &&
                    (
                      <BorderedLink
                        text='Court Venue v2.1'
                        link='/v2_court_venue'
                      />
                    )
                  }

                  {
                    cards.isVisibleCourtVenueV3 &&
                    (
                      <BorderedLink
                        text='Court Venue v3'
                        link='/v3_court_venue'
                      />
                    )
                  }

                  {
                    cards.isVisibleContractClassification &&
                    (
                      <BorderedLink
                        text='Contract Classification v3'
                        link='/v3_contract_classification'
                      />
                    )
                  }

                  {
                    cards.isVisibleLegalPersonClassification &&
                    (
                      <BorderedLink
                        text='Legal Person Classification v3'
                        link='/v3_legal_person_classification'
                      />
                    )
                  }

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
              cards.isVisibleCasesV1 ||
              cards.isVisibleCasesV2 ||
              cards.isVisibleTasks ||
              cards.isVisibleTaskTemplate ||
              cards.isVisibleAssembler ||
              cards.isVisibleContent ||
              cards.isVisibleStandardsCodes ||
              cards.isVisibleStandardsLocale ||
              cards.isVisibleStandardsOccupation ||
              cards.isVisibleStandardsPracticeArea
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
              (
                cards.isVisibleCasesV1 ||
                cards.isVisibleCasesV2
              ) &&
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

                  {
                    cards.isVisibleCasesV1 &&
                    (
                      <BorderedLink
                        link='/v1_cases'
                        text='Cases v1 (legado)'
                      />
                    )
                  }

                  {
                    cards.isVisibleCasesV2 &&
                    (
                      <BorderedLink
                        link='/v2_case-management'
                        text='Case Management'
                      />
                    )
                  }

                </ColCard>
              )
            }

            {
              (
                cards?.isVisibleTasks ||
                cards?.isVisibleTaskTemplate
              ) &&
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

                  {
                    cards.isVisibleTasks &&
                    (
                      <BorderedLink
                        link='/v2_tasks'
                        text='Tasks'
                      />
                    )
                  }

                  {
                    cards.isVisibleTaskTemplate &&
                    (
                      <BorderedLink
                        link='/v2_task_template'
                        text='Tasks Template'
                      />
                    )
                  }

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
              (
                cards.isVisibleStandardsCodes ||
                cards.isVisibleStandardsLocale ||
                cards.isVisibleStandardsOccupation ||
                cards.isVisibleStandardsPracticeArea
              ) &&
              (
                <ColCard>

                  <CardHeader
                    title='Standards'
                    icon={<ProfileOutlined style={iconStyle} />}
                  />

                  <div>
                    <Text>Grupo de APIs do Looplex Standards </Text>
                  </div>

                  {
                    cards.isVisibleStandardsCodes &&
                    (
                      <BorderedLink
                        link='/v2_activity_task_codes'
                        text='Activity and Task Codes'
                      />
                    )
                  }

                  {
                    cards.isVisibleStandardsPracticeArea &&
                    (
                      <BorderedLink
                        link='/v2_practice_areas'
                        text='Practice Areas'
                      />
                    )
                  }

                  {
                    cards.isVisibleStandardsLocale &&
                    (
                      <BorderedLink
                        link='/v2_locales'
                        text='Locales'
                      />
                    )
                  }

                  {
                    cards.isVisibleStandardsOccupation &&
                    (
                      <BorderedLink
                        link='/v2_occupations'
                        text='Occupations'
                      />
                    )
                  }

                  {
                    cards.isVisibleStardardsDeadlineCalculator &&
                    (
                      <BorderedLink
                        link='/v2_deadline_calculator'
                        text='Deadline Calculator'
                      />
                    )
                  }

                </ColCard>
              )
            }

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
