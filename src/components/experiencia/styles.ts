import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #f7edff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
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
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-top: 7.5rem;
  
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: var(--font-cabourg-bold);
  color: #fa5b11;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitulo = styled.p`
  font-size: 1.3rem;
  color: #000;
  font-weight: 500;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ExperienciasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 20px;
`;

export const CardExperiencia = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #fa5b11, #ff8c00);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

export const IconeContainer = styled.div<{ cor: string }>`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: ${props => props.cor}15;
  color: ${props => props.cor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: all 0.3s ease;

  ${CardExperiencia}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Empresa = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Cargo = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fa5b11;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Periodo = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background: #fa5b1115;
  color: #fa5b11;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #fa5b1130, transparent);
  margin: 25px 0;
`;

export const Descricao = styled.p`
  font-size: 1.05rem;
  color: #5a5a5a;
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

export const TecnologiasContainer = styled.div`
  margin-top: 25px;
`;

export const TecnologiasLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: #2d2d2d;
  margin-bottom: 15px;

  svg {
    color: #fa5b11;
  }
`;

export const TecnologiasList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TecnologiaTag = styled.span<{ cor: string }>`
  padding: 8px 16px;
  background: ${props => props.cor}30;
  color: ${props => props.cor};
  border: 1px solid ${props => props.cor}30;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.cor}40;
    border-color: ${props => props.cor}50;
    transform: translateY(-2px);
  }
`;