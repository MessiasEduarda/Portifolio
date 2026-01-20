import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #f7edff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const FormasDecorativas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  z-index: 0;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Conteudo = styled.div`
  max-width: 1100px;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-top: 7rem;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: var(--font-cabourg-bold);
  color: #fa5b11;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitulo = styled.p`
  font-size: 1.5rem;
  color: #000;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContatosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContato = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #8224ff;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const IconeContainer = styled.div<{ cor: string }>`
  width: 55px;
  height: 55px;
  border-radius: 14px;
  background: ${props => props.cor}15;
  color: ${props => props.cor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  transition: all 0.3s ease;

  ${CardContato}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: ${props => props.cor}25;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TituloContato = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DescricaoContato = styled.p`
  font-size: 0.9rem;
  color: #5a5a5a;
  line-height: 1.5;
  margin-bottom: 15px;
  max-width: 300px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const LinkContato = styled.a<{ cor: string }>`
  font-size: 0.95rem;
  color: ${props => props.cor};
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid ${props => props.cor}30;
  border-radius: 20px;
  background: ${props => props.cor}10;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: ${props => props.cor}20;
    border-color: ${props => props.cor};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.cor}30;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 16px;
  }
`;