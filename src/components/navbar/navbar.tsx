'use client';

import { useState } from 'react';
import { IoHomeOutline, IoRocketOutline, IoBriefcaseOutline, IoMailOutline, IoSchoolOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

import {
  LogoButton,
  LogoText,
  Nav,
  NavLink,
  NavLinkIcon,
  NavLinkText,
  NavbarContainer,
  LogoImage,
  Divider,
} from './styles';

const Navbar = () => {
  const pathname = usePathname() ?? '';
  const [expanded, setExpanded] = useState(false);

  const isInicio = pathname === '/' || pathname.startsWith('/inicio');

  return (
    <NavbarContainer
      $expanded={expanded}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <LogoButton>
        <LogoImage>
          <img 
            src="/img/logo.png" 
            alt="Logo" 
          />
        </LogoImage>
        {expanded && (
          <LogoText $expanded={expanded}>
            <span style={{ color: '#fa5b11' }}>Dev Front-End</span>
          </LogoText>
        )}
      </LogoButton>

      <Nav $expanded={expanded}>
        <NavLink href="/inicio" $selected={isInicio}>
          <NavLinkIcon $selected={isInicio}>
            <IoHomeOutline />
          </NavLinkIcon>
          {expanded && (
            <NavLinkText $selected={isInicio}>
              Início
            </NavLinkText>
          )}
        </NavLink>

        <NavLink href="/habilidades" $selected={pathname.startsWith('/habilidades')}>
          <NavLinkIcon $selected={pathname.startsWith('/habilidades')}>
            <IoRocketOutline />
          </NavLinkIcon>
          {expanded && (
            <NavLinkText $selected={pathname.startsWith('/habilidades')}>
              Habilidades
            </NavLinkText>
          )}
        </NavLink>

        <NavLink href="/projetos" $selected={pathname.startsWith('/projetos')}>
          <NavLinkIcon $selected={pathname.startsWith('/projetos')}>
            <IoBriefcaseOutline />
          </NavLinkIcon>
          {expanded && (
            <NavLinkText $selected={pathname.startsWith('/projetos')}>
              Projetos
            </NavLinkText>
          )}
        </NavLink>

        <NavLink href="/experiencia" $selected={pathname.startsWith('/experiencia')}>
          <NavLinkIcon $selected={pathname.startsWith('/experiencia')}>
            <IoSchoolOutline />
          </NavLinkIcon>
          {expanded && (
            <NavLinkText $selected={pathname.startsWith('/experiencia')}>
              Experiência
            </NavLinkText>
          )}
        </NavLink>
      </Nav>

      <Divider />

      <NavLink href="/contato" $selected={pathname.startsWith('/contato')}>
        <NavLinkIcon $selected={pathname.startsWith('/contato')}>
          <IoMailOutline />
        </NavLinkIcon>
        {expanded && (
          <NavLinkText $selected={pathname.startsWith('/contato')}>
            Contatos
          </NavLinkText>
        )}
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;