'use client';

import { Github } from 'lucide-react';
import {
  Container,
  FormasDecorativas,
  Conteudo,
  TituloSecao,
  Subtitulo,
  GridProjetos,
  CardProjeto,
  ImagemProjeto,
  ConteudoProjeto,
  TituloProjeto,
  DescricaoProjeto,
  ListaTecnologias,
  Tecnologia,
  BotoesAcao,
  BotaoLink
} from './styles';

export default function Projetos() {
  const projetos = [
    {
      titulo: 'Pesquisa de Clima',
      descricao: 'Um sistema de pesquisa de clima empresarial coleta opiniões e percepções dos funcionários sobre o ambiente de trabalho.',
      imagem: '/img/clima.png',
      tecnologias: ['Vue.js', 'JavaScript', 'Java', 'Spring Boot', 'MySQL'],
      linkGithub: 'https://github.com/MessiasEduarda/VisionWeb.git'
    },
    {
      titulo: 'Concessionária Digital',
      descricao: 'Estruturada para funcionar como uma concessionária digital moderna, com foco em performance, escalabilidade e experiência do usuário.',
      imagem: '/img/carro.png',
      tecnologias: ['React.js', 'Next.js', 'TypeScript', 'Java', 'Spring Boot'],
      linkGithub: 'https://github.com/MessiasEduarda/ConcessionariaDigital.git'
    },
    {
      titulo: 'Plataforma de Serviços',
      descricao: 'Uma plataforma de serviços permite que usuários acessem e contratem os serviços oferecidos pela empresa de forma prática e centralizada.',
      imagem: '/img/cjl.png',
      tecnologias: ['Vue.js', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL'],
      linkGithub: 'https://github.com/MessiasEduarda/PlataformadeServicos.git'
    },
    {
      titulo: 'Controle de Estoque',
      descricao: 'Um software de controle de estoque para oficinas gerencia peças, materiais e produtos, registrando entradas, saídas e níveis de estoque.',
      imagem: '/img/veiculo.png',
      tecnologias: ['Vue.js', 'JavaScript', 'Java', 'Spring Boot', 'MySQL'],
      linkGithub: 'https://github.com/CjlConsultoria/DriveUp.git'
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
        <TituloSecao>Meus Projetos</TituloSecao>
        <Subtitulo>
          Alguns dos projetos que desenvolvi aplicando as melhores práticas e tecnologias modernas
        </Subtitulo>

        <GridProjetos>
          {projetos.map((projeto, index) => (
            <CardProjeto key={index}>
              <ImagemProjeto>
                <div className="placeholder">
                  <img src={projeto.imagem} alt={projeto.titulo} />
                </div>
              </ImagemProjeto>
              <ConteudoProjeto>
                <TituloProjeto>{projeto.titulo}</TituloProjeto>
                <DescricaoProjeto>{projeto.descricao}</DescricaoProjeto>
                <ListaTecnologias>
                  {projeto.tecnologias.map((tech, i) => (
                    <Tecnologia key={i}>{tech}</Tecnologia>
                  ))}
                </ListaTecnologias>
                <BotoesAcao>
                  <BotaoLink href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    <span>Acessar</span>
                  </BotaoLink>
                </BotoesAcao>
              </ConteudoProjeto>
            </CardProjeto>
          ))}
        </GridProjetos>
      </Conteudo>
    </Container>
  );
}