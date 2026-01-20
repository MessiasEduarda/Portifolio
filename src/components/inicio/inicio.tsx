'use client';

import { Download } from 'lucide-react';
import {
  Container,
  FormasDecorativas,
  Conteudo,
  TextoSecao,
  Saudacao,
  Titulo,
  Subtitulo,
  Descricao,
  Botao,
  ImagemSecao,
  ImagemWrapper,
  ImagemContainer,
  Imagem,
  Sombra
} from './styles';

export default function Inicio() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/curriculo.pdf'; 
    link.download = 'Maria_Eduarda_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <TextoSecao>
          <Saudacao>Olá, eu sou</Saudacao>
          <Titulo>Maria Eduarda</Titulo>
          <Subtitulo>
            Desenvolvedora Front-End criando experiências digitais intuitivas e impactantes.
          </Subtitulo>

          <Descricao>
            Sou desenvolvedora Front-End especializada em React e Next.js, criando aplicações web modernas, responsivas e com interfaces intuitivas. Tenho experiência em transformar ideias em soluções digitais funcionais e visualmente impactantes, utilizando boas práticas de código, performance otimizada e acessibilidade. Além disso, possuo conhecimentos em Back-End, integrando APIs e trabalhando com lógica de servidores para entregar experiências completas e eficientes aos usuários. Meu objetivo é construir interfaces de alta qualidade que aliam estética, usabilidade e performance.
          </Descricao>

          <Botao onClick={handleDownloadCV}>
            <Download size={20} />
            Download CV
          </Botao>
        </TextoSecao>

        <ImagemSecao>
          <ImagemWrapper>
            <ImagemContainer>
              <Imagem 
                src="/img/pessoal.jpeg" 
                alt="Maria Eduarda" 
              />
            </ImagemContainer>
            <Sombra />
          </ImagemWrapper>
        </ImagemSecao>
      </Conteudo>
    </Container>
  );
}