import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: #f7edff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 60px;
  position: relative;
  overflow: hidden;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-left: 7rem;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-left: 0;
  }
`;

export const TextoSecao = styled.div`
  text-align: left;
`;

export const Saudacao = styled.p`
  font-size: 2rem;
  color: #7a7a7a;
  margin-bottom: 10px;
`;

export const Titulo = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: var(--font-cabourg-bold);
  line-height: 1.2;
  color: #fa5b11;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitulo = styled.p`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Descricao = styled.p`
  font-size: 1rem;
  color: #7a7a7a;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const Botao = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: #8b33ff;
  color: white;
  border-radius: 1000px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #8224ff;
    transform: translateY(-2px);
  }
`;

export const ImagemSecao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ImagemContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
  margin-top: 4rem;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @media (max-width: 968px) {
    width: 350px;
    height: 350px;
  }
`;

export const Imagem = styled.img`
  width: 110%;
  height: 110%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(20%);
`;

export const Sombra = styled.div`
  width: 350px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  filter: blur(25px);
  animation: sombra 3s ease-in-out infinite;
  
  @keyframes sombra {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.8);
      opacity: 0.7;
    }
  }
  
  @media (max-width: 968px) {
    width: 280px;
    height: 35px;
  }
`;