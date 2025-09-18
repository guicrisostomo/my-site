import styled, { keyframes } from 'styled-components';

// Animação fade para o menu
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-12px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  position: relative;
  z-index: 20;
  padding: 0 24px;
  @media (max-width: 700px) {
    padding: 0 8px;
  }
`;

export const IconButton = styled.button`
  all: unset;
  font-family: 'Fira Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
  border-radius: 50%;
  height: 44px;
  width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
  box-shadow: 0 2px 10px 0 rgba(0,198,255,0.10);
  cursor: pointer;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  border: 2px solid rgba(255,255,255,0.08);
  &:hover {
    background: linear-gradient(135deg, #0072ff 0%, #00c6ff 100%);
    color: #222;
    box-shadow: 0 4px 16px 0 rgba(0,198,255,0.18);
    border: 2px solid #00c6ff;
  }
`;

export const DropdownMenu = styled.div`
  min-width: 220px;
  background: rgba(20, 20, 30, 0.98);
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
  padding: 16px 0;
  position: absolute;
  top: 60px;
  right: 24px;
  z-index: 100;
  animation: ${fadeIn} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1.5px solid rgba(0,198,255,0.10);
  backdrop-filter: blur(12px) saturate(160%);
  @media (max-width: 700px) {
    right: 4px;
    min-width: 160px;
    padding: 10px 0;
  }
`;

export const DropdownItem = styled.button`
  all: unset;
  font-family: 'Fira Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
  font-size: 1rem;
  color: #fff;
  border-radius: 10px;
  padding: 12px 28px;
  margin: 0 8px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  text-align: left;
  border: 1.5px solid transparent;
  background: rgba(255,255,255,0.02);
  &:hover {
    background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
    color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,198,255,0.10);
    border: 1.5px solid #00c6ff;
  }
  &:disabled {
    color: #909096;
    pointer-events: none;
    background: none;
    border: 1.5px dashed #909096;
  }
`;

export const DropdownSeparator = styled.div`
  height: 1.5px;
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  margin: 10px 0;
  opacity: 0.25;
  border-radius: 2px;
`;

export const DropdownLabel = styled.div`
  font-size: 0.95rem;
  color: #b0c4d4;
  padding: 8px 28px 2px 28px;
  font-family: 'Fira Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
  letter-spacing: 1px;
  opacity: 0.85;
cursor: 'pointer',
borderRadius: 3,
display: 'flex',
alignItems: 'center',
height: 25,
padding: '0 5px',
position: 'relative',
paddingLeft: 25,
userSelect: 'none',
transition: 'all 0.5s',
'&[data-disabled]': {
    color: #909096;
    pointer-events: none;
    background: none;
    border: 1.5px dashed #909096;
  }
`;
