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
  margin-top: 2rem;
`;

export const TituloSecao = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
  font-family: var(--font-cabourg-bold);
  color: #fa5b11;
  margin-top: 5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitulo = styled.p`
  font-size: 1.3rem;
  color: #7a7a7a;
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

export const GridProjetos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CardProjeto = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(139, 51, 255, 0.15);
    border-color: #8224ff;
  }
`;

export const ImagemProjeto = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);
  position: relative;
  overflow: hidden;

  .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #383838 0%, #383838 100%);
    
    span {
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
      padding: 20px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CardProjeto}:hover img {
    transform: scale(1.05);
  }
`;

export const ConteudoProjeto = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TituloProjeto = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #383838;
  margin-bottom: 12px;
`;

export const DescricaoProjeto = styled.p`
  font-size: 0.95rem;
  color: #7a7a7a;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
`;

export const ListaTecnologias = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Tecnologia = styled.span`
  background: #8b33ff30;
  color: #8b33ff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid #8b33ff30;
  transition: all 0.2s ease;

  &:hover {
    background: #8b33ff40;
    border-color: #8b33ff50;
    transform: translateY(-2px);
  }
`;
export const BotoesAcao = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

export const BotaoLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  background: #fa5b11;
  color: white;
  border: 1px solid #fa5b11;

  &:hover {
    background: #8224ff;
    border-color: #8224ff;
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;