import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSeparator,
  IconButton
} from "../Navbar/index.jsx";

import { t } from "i18next";
import { Link } from "react-router-dom";
import {
  AbbreviationName,
  ContentTextHeader,
  Hheader,
  MenuImgHeader,
  TextHeaderStyle,
} from "./style.js";

export default function Header() {
  const [pages, setPages] = useState("");
  const [scrolled, setScrolled] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [blockPopup, setBlockPopup] = useState(false); // impede exibir mais de uma vez
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  
  const { i18n } = useTranslation();


  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  window.addEventListener("scroll", (event) => {
    setScrolled(window.scrollY);
  });

  useEffect(() => {
    const FixURL = window.location;
    setPages(FixURL.pathname.replace("/", ""));
  }, []);

  function TextHeader(props) {
    if (props.expected === pages) {
      return <TextHeaderStyle active={true}>{props.children}</TextHeaderStyle>;
    } else {
      return <TextHeaderStyle active={false}>{props.children}</TextHeaderStyle>;
    }
  }


  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (event.clientY < 10 && !blockPopup) {
        setShowPopup(true);
        setBlockPopup(true);
      }
    };
    document.addEventListener('mouseout', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [blockPopup]);

  const handleStay = () => {
    setShowPopup(false);
  };

  return (
    <Hheader
      style={{ backgroundColor: scrolled > 1 ? "black" : "transparent" }}
      onClick={handleStay}
    >
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(20, 20, 20, 0.85)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: '#181A1B',
            borderRadius: '18px',
            boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.37)',
            padding: '2.5rem 2.5rem 2rem 2.5rem',
            minWidth: 340,
            maxWidth: 400,
            color: '#fff',
            textAlign: 'center',
            border: '1.5px solid #23272F',
            fontFamily: 'Fira Mono, monospace',
            position: 'relative',
          }}>
            <h2 style={{
              margin: 0,
              marginBottom: 18,
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: 1,
              color: '#00e676',
              fontFamily: 'Fira Mono, monospace',
            }}>
              Deseja sair do site?
            </h2>
            <p style={{
              marginBottom: 24,
              fontSize: 16,
              color: '#bdbdbd',
              fontFamily: 'Fira Mono, monospace',
            }}>
              Você tem certeza que deseja sair?<br />
              Se precisar falar comigo, use um dos contatos abaixo:
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 18,
              marginBottom: 24,
            }}>
              <a href="https://github.com/guicrisostomo" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#23272F', borderRadius: '50%', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', fontSize: 26, border: '1px solid #333' }} title="GitHub">
                <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/guilherme-crisostomo-da-silva" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#23272F', borderRadius: '50%', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', fontSize: 26, border: '1px solid #333' }} title="LinkedIn">
                <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
              </a>
              <a href="mailto:guilherme.silva9872@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#23272F', borderRadius: '50%', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', fontSize: 26, border: '1px solid #333' }} title="E-mail">
                <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 12-7.083v-.217z"/></svg>
              </a>
            </div>
            <button onClick={handleStay} style={{
              background: 'linear-gradient(90deg, #00e676 0%, #00bfa5 100%)',
              color: '#181A1B',
              border: 'none',
              borderRadius: 8,
              padding: '10px 28px',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              fontFamily: 'Fira Mono, monospace',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              transition: 'background 0.2s',
            }}>
              Ficar na página
            </button>
          </div>
        </div>
      )}

      <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <AbbreviationName>GCS</AbbreviationName>
        </Link>
      <ContentTextHeader>
        

        {/* Links com destaque moderno para o item selecionado */}
        <Link
          to="/"
          style={{
            background: pages === "" ? "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)" : "transparent",
            color: pages === "" ? "#fff" : "#b0c4d4",
            borderRadius: "12px",
            padding: "7px 18px",
            margin: "0 2px",
            fontWeight: pages === "" ? 700 : 500,
            boxShadow: pages === "" ? "0 2px 12px 0 rgba(0,198,255,0.10)" : "none",
            textDecoration: "none",
            alignSelf: "center",
            transition: "all 0.3s"
          }}
        >
          <TextHeader expected="">{t("header.home")}</TextHeader>
        </Link>

        <Link
          to="/experience"
          style={{
            background: pages === "experience" ? "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)" : "transparent",
            color: pages === "experience" ? "#fff" : "#b0c4d4",
            borderRadius: "12px",
            padding: "7px 18px",
            margin: "0 2px",
            fontWeight: pages === "experience" ? 700 : 500,
            boxShadow: pages === "experience" ? "0 2px 12px 0 rgba(0,198,255,0.10)" : "none",
            textDecoration: "none",
            alignSelf: "center",
            transition: "all 0.3s"
          }}
        >
          <TextHeader expected="experience">{t("header.experience")}</TextHeader>
        </Link>

        <Link
          to="/skill"
          style={{
            background: pages === "skill" ? "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)" : "transparent",
            color: pages === "skill" ? "#fff" : "#b0c4d4",
            borderRadius: "12px",
            padding: "7px 18px",
            margin: "0 2px",
            fontWeight: pages === "skill" ? 700 : 500,
            boxShadow: pages === "skill" ? "0 2px 12px 0 rgba(0,198,255,0.10)" : "none",
            textDecoration: "none",
            alignSelf: "center",
            transition: "all 0.3s"
          }}
        >
          <TextHeader expected="skill">{t("header.skills")}</TextHeader>
        </Link>

        <Link
          to="/projects"
          style={{
            background: pages === "projects" ? "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)" : "transparent",
            color: pages === "projects" ? "#fff" : "#b0c4d4",
            borderRadius: "12px",
            padding: "7px 18px",
            margin: "0 2px",
            fontWeight: pages === "projects" ? 700 : 500,
            boxShadow: pages === "projects" ? "0 2px 12px 0 rgba(0,198,255,0.10)" : "none",
            textDecoration: "none",
            alignSelf: "center",
            transition: "all 0.3s"
          }}
        >
          <TextHeader expected="projects">{t("header.projects")}</TextHeader>
        </Link>

        <Link
          to="/certificates"
          style={{
            background: pages === "certificates" ? "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)" : "transparent",
            color: pages === "certificates" ? "#fff" : "#b0c4d4",
            borderRadius: "12px",
            padding: "7px 18px",
            margin: "0 2px",
            fontWeight: pages === "certificates" ? 700 : 500,
            boxShadow: pages === "certificates" ? "0 2px 12px 0 rgba(0,198,255,0.10)" : "none",
            textDecoration: "none",
            alignSelf: "center",
            transition: "all 0.3s"
          }}
        >
          <TextHeader expected="certificates">{t("header.certificates")}</TextHeader>
        </Link>

        <Link
          to="/updates"
          style={{
            background: pages === "updates" ? "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)" : "transparent",
            color: pages === "updates" ? "#fff" : "#b0c4d4",
            borderRadius: "12px",
            padding: "7px 18px",
            margin: "0 2px",
            fontWeight: pages === "updates" ? 700 : 500,
            boxShadow: pages === "updates" ? "0 2px 12px 0 rgba(0,198,255,0.10)" : "none",
            textDecoration: "none",
            alignSelf: "center",
            transition: "all 0.3s"
          }}
        >
          <TextHeader expected="updates">{t("header.updates")}</TextHeader>
        </Link>

        
      </ContentTextHeader>
      <MenuImgHeader>
          <div style={{ position: 'relative' }} ref={menuRef}>
            <IconButton
              aria-label="Menu"
              style={{ backgroundColor: scrolled > 30 ? "black" : "transparent" }}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <HamburgerMenuIcon />
            </IconButton>
            {menuOpen && (
              <DropdownMenu style={{ right: 0, top: 50 }}>
                <DropdownLabel>Páginas</DropdownLabel>
                <DropdownItem
                  as={Link}
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  style={pages === "" ? {
                    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                  } : {}}
                >
                  {t("header.home")}
                </DropdownItem>
                <DropdownItem
                  as={Link}
                  to="/experience"
                  onClick={() => setMenuOpen(false)}
                  style={pages === "experience" ? {
                    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                  } : {}}
                >
                  {t("header.experience")}
                </DropdownItem>
                <DropdownItem
                  as={Link}
                  to="/skill"
                  onClick={() => setMenuOpen(false)}
                  style={pages === "skill" ? {
                    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                  } : {}}
                >
                  {t("header.skills")}
                </DropdownItem>
                <DropdownItem
                  as={Link}
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  style={pages === "projects" ? {
                    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                  } : {}}
                >
                  {t("header.projects")}
                </DropdownItem>
                <DropdownItem
                  as={Link}
                  to="/certificates"
                  onClick={() => setMenuOpen(false)}
                  style={pages === "certificates" ? {
                    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                  } : {}}
                >
                  {t("header.certificates")}
                </DropdownItem>
                <DropdownItem
                  as={Link}
                  to="/updates"
                  onClick={() => setMenuOpen(false)}
                  style={pages === "updates" ? {
                    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                  } : {}}
                >
                  {t("header.updates")}
                </DropdownItem>
                <DropdownSeparator />
                <DropdownLabel>Idioma</DropdownLabel>
                <DropdownItem onClick={() => { i18n.changeLanguage("pt-BR"); setMenuOpen(false); }} style={i18n.language === "pt-BR" ? {
                  background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                  color: "#fff", fontWeight: 700,
                  boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                } : {}}>
                  {t("header.portuguese")}
                </DropdownItem>
                <DropdownItem onClick={() => { i18n.changeLanguage("en-US"); setMenuOpen(false); }} style={i18n.language === "en-US" ? {
                  background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
                  color: "#fff", fontWeight: 700,
                  boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)"
                } : {}}>
                  {t("header.english")}
                </DropdownItem>
              </DropdownMenu>
            )}
          </div>
        </MenuImgHeader>
    </Hheader>
  );
}
