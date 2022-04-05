import { styled, keyframes } from '@stitches/react';
import { mauve, blackA } from '@radix-ui/colors';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

const slideRightAndFade = keyframes({
'0%': { opacity: 0, transform: 'translateX(-2px)' },
'100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
'0%': { opacity: 0, transform: 'translateY(-2px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
'0%': { opacity: 0, transform: 'translateX(2px)' },
'100%': { opacity: 1, transform: 'translateX(0)' },
});

const itemStyles = {
all: 'unset',
fontSize: 13,
lineHeight: 1,
color: 'black',
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
    color: '#909096',
    pointerEvents: 'none',
},

'&:focus': {
    backgroundColor: 'black',
    color: 'white',
},
};

export const Box = styled('div', {});

export const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: mauve.mauve11,
  ':focus > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 },
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundColor: 'black',
  transition: 'all 0.9s',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: 'white!important',
               color: 'black' 
             },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});


export const StyledContent = styled(DropdownMenuPrimitive.Content, {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 5,
    boxShadow:
      '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    '@media (prefers-reduced-motion: no-preference)': {
      animationDuration: '400ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationFillMode: 'forwards',
      willChange: 'transform, opacity',
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
      },
    },
  });
  
export const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
export const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
export const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
export const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
    '&[data-state="open"]': {
    backgroundColor: 'black',
    color: 'white',
    },
    ...itemStyles,
});

export const StyledLabel = styled(DropdownMenuPrimitive.Label, {
    paddingLeft: 25,
    fontSize: 12,
    lineHeight: '25px',
    color: mauve.mauve11,
});

export const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
    height: 1,
    backgroundColor: 'black',
    margin: 5,
});

export const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
    fill: 'white',
});