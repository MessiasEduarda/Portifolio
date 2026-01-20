'use client';

import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';
import {
  Container,
  FormasDecorativas,
  Conteudo,
  Header,
  Titulo,
  Subtitulo,
  ContatosGrid,
  CardContato,
  IconeContainer,
  TituloContato,
  DescricaoContato,
  LinkContato,
  InfoContainer
} from './styles';

export default function Contato() {
  const contatos = [
    {
      titulo: 'WhatsApp',
      descricao: 'Fale comigo diretamente para uma conversa rápida',
      link: '+55 (11) 95331-1935',
      href: 'https://wa.me/message/BUBDMR7QT2M7H1',
      icone: MessageCircle,
      corDestaque: '#25D366'
    },
    {
      titulo: 'LinkedIn',
      descricao: 'Conecte-se e acompanhe minha trajetória profissional',
      link: 'linkedin.com/in/maria-eduarda-messias',
      href: 'https://www.linkedin.com/in/maria-eduarda-messias-2650012b7/',
      icone: Linkedin,
      corDestaque: '#0A66C2'
    },
    {
      titulo: 'GitHub',
      descricao: 'Confira meus projetos e contribuições open source',
      link: 'github.com/MessiasEduarda',
      href: 'https://github.com/MessiasEduarda',
      icone: Github,
      corDestaque: '#333333'
    },
    {
      titulo: 'Email',
      descricao: 'Entre em contato por email para propostas profissionais',
      link: 'mariaeduardamessias2001@gmail.com',
      href: 'mailto:mariaeduardamessias2001@gmail.com',
      icone: Mail,
      corDestaque: '#ff3b21'
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
          <Titulo>Entre em Contato</Titulo>
          <Subtitulo>
            Vamos conversar? Escolha o canal que preferir
          </Subtitulo>
        </Header>

        <ContatosGrid>
          {contatos.map((contato, index) => {
            const IconeComponente = contato.icone;
            return (
              <CardContato key={index}>
                <IconeContainer cor={contato.corDestaque}>
                  <IconeComponente size={24} />
                </IconeContainer>

                <InfoContainer>
                  <TituloContato>{contato.titulo}</TituloContato>
                  <DescricaoContato>{contato.descricao}</DescricaoContato>
                  <LinkContato 
                    href={contato.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    cor={contato.corDestaque}
                  >
                    {contato.link}
                  </LinkContato>
                </InfoContainer>
              </CardContato>
            );
          })}
        </ContatosGrid>
      </Conteudo>
    </Container>
  );
}