'use client';

import { Code, Palette, Server, Smartphone, Database, Zap } from 'lucide-react';
import {
  Container,
  FormasDecorativas,
  Conteudo,
  TituloSecao,
  Subtitulo,
  GridHabilidades,
  CardHabilidade,
  IconeWrapper,
  NomeHabilidade,
  DescricaoHabilidade,
  ListaTecnologias,
  Tecnologia
} from './styles';

export default function Habilidades() {
  const habilidades = [
    {
      icone: <Code size={32} />,
      nome: 'Front-End',
      descricao: 'Desenvolvimento de interfaces modernas e responsivas com as melhores práticas.',
      tecnologias: ['React', 'Next.js', 'Vue', 'Angular', 'JavaScript', 'TypeScript', 'Styled Components', 'Tailwind CSS']
    },
    {
      icone: <Palette size={32} />,
      nome: 'UI/UX Design',
      descricao: 'Criação de experiências visuais intuitivas e acessíveis para os usuários.',
      tecnologias: ['Figma', 'Adobe XD', 'Design System', 'Prototipagem', 'Responsividade']
    },
    {
      icone: <Server size={32} />,
      nome: 'Back-End',
      descricao: 'Desenvolvimento de APIs e lógica de servidor para aplicações completas.',
      tecnologias: ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST API', 'Authentication', 'MongoDB']
    },
    {
      icone: <Database size={32} />,
      nome: 'Banco de Dados',
      descricao: 'Gerenciamento e integração de dados para aplicações escaláveis.',
      tecnologias: ['PostgreSQL', 'MySQL']
    },
    {
      icone: <Smartphone size={32} />,
      nome: 'Mobile First',
      descricao: 'Desenvolvimento com foco em dispositivos móveis e design responsivo.',
      tecnologias: ['React Native', 'PWA', 'Responsive Design', 'Mobile UI', 'Performance']
    },
    {
      icone: <Zap size={32} />,
      nome: 'Performance',
      descricao: 'Otimização de aplicações para melhor experiência e velocidade.',
      tecnologias: ['SEO', 'Lazy Loading', 'Code Splitting', 'Lighthouse', 'Web Vitals']
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
        <TituloSecao>Minhas Habilidades</TituloSecao>
        <Subtitulo>
          Tecnologias e ferramentas que domino para criar soluções completas e eficientes
        </Subtitulo>

        <GridHabilidades>
          {habilidades.map((habilidade, index) => (
            <CardHabilidade key={index}>
              <IconeWrapper>{habilidade.icone}</IconeWrapper>
              <NomeHabilidade>{habilidade.nome}</NomeHabilidade>
              <DescricaoHabilidade>{habilidade.descricao}</DescricaoHabilidade>
              <ListaTecnologias>
                {habilidade.tecnologias.map((tech, i) => (
                  <Tecnologia key={i}>{tech}</Tecnologia>
                ))}
              </ListaTecnologias>
            </CardHabilidade>
          ))}
        </GridHabilidades>
      </Conteudo>
    </Container>
  );
}