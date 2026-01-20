'use client';

import { Briefcase, Code, Database, Layers } from 'lucide-react';
import {
  Container,
  FormasDecorativas,
  Conteudo,
  Header,
  Titulo,
  Subtitulo,
  ExperienciasGrid,
  CardExperiencia,
  CardHeader,
  Empresa,
  Cargo,
  Periodo,
  Descricao,
  TecnologiasContainer,
  TecnologiasLabel,
  TecnologiasList,
  TecnologiaTag,
  IconeContainer,
  Divisor
} from './styles';

export default function Experiencia() {
  const experiencias = [
    {
      empresa: 'CJL Consultoria',
      cargo: 'Desenvolvedora Front-End Júnior',
      periodo: 'Experiência Anterior',
      descricao: 'Desenvolvimento de interfaces web modernas e responsivas utilizando Vue.js e JavaScript. Responsável por criar componentes reutilizáveis, implementar designs do Figma em código funcional e garantir a melhor experiência do usuário. Trabalho com integração de APIs RESTful, consumindo e enviando dados para o backend PostgreSQL, além de realizar tratamento de erros e validações de formulários. Colaboro ativamente com a equipe de backend para garantir a sincronização perfeita entre front-end e banco de dados.',
      tecnologias: ['Vue.js', 'JavaScript', 'PostgreSQL', 'REST API', 'HTML5', 'CSS3', 'Git'],
      icone: Layers,
      corDestaque: '#8b33ff'
    },
    {
      empresa: 'Mestres da Web',
      cargo: 'Estagiária em Desenvolvimento Front-End',
      periodo: 'Experiência Anterior',
      descricao: 'Participei do desenvolvimento de aplicações web utilizando React, Next.js e TypeScript, trabalhando com componentes funcionais, hooks e gerenciamento de estado. Tive a oportunidade de aprender e aplicar as melhores práticas de desenvolvimento, incluindo código limpo, componentização e otimização de performance. Realizei integrações com backend através de requisições HTTP, conectando a aplicação ao banco de dados e implementando funcionalidades de CRUD. Essa experiência me proporcionou uma base sólida em desenvolvimento moderno e metodologias ágeis.',
      tecnologias: ['React', 'Next.js', 'TypeScript', 'REST API', 'Styled Components', 'Git'],
      icone: Code,
      corDestaque: '#8b33ff'
    }
  ];

  return (
    <Container>
      <FormasDecorativas>
        <svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#FFA500" 
            fillOpacity="0.9" 
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,149.3C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <path 
            fill="#FF8C00" 
            fillOpacity="0.8" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <path 
            fill="#FFB84D" 
            fillOpacity="0.6" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </FormasDecorativas>

      <Conteudo>
        <Header>
          <Titulo>Experiência Profissional</Titulo>
          <Subtitulo>
            Minha jornada no desenvolvimento web, construindo soluções que fazem a diferença
          </Subtitulo>
        </Header>

        <ExperienciasGrid>
          {experiencias.map((exp, index) => {
            const IconeComponente = exp.icone;
            return (
              <CardExperiencia key={index}>
                <IconeContainer cor={exp.corDestaque}>
                  <IconeComponente size={28} />
                </IconeContainer>

                <CardHeader>
                  <div>
                    <Empresa>{exp.empresa}</Empresa>
                    <Cargo>{exp.cargo}</Cargo>
                  </div>
                  <Periodo>{exp.periodo}</Periodo>
                </CardHeader>

                <Divisor />

                <Descricao>{exp.descricao}</Descricao>

                <TecnologiasContainer>
                  <TecnologiasLabel>
                    <Database size={18} />
                    Tecnologias utilizadas
                  </TecnologiasLabel>
                  <TecnologiasList>
                    {exp.tecnologias.map((tech, i) => (
                      <TecnologiaTag key={i} cor={exp.corDestaque}>
                        {tech}
                      </TecnologiaTag>
                    ))}
                  </TecnologiasList>
                </TecnologiasContainer>
              </CardExperiencia>
            );
          })}
        </ExperienciasGrid>
      </Conteudo>
    </Container>
  );
}