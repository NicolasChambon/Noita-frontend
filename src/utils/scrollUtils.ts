// Dependencies
import { Location, NavigateFunction } from 'react-router-dom';

// Store
import { store } from '../store';

// Actions
import { setTargetSection } from '../actions/global/globalActions';

// Types
import { SectionId } from '../types/sectionId.type';

export const scrollIfOnSamePage = (path: string): void => {
  if (window.location.pathname === path) {
    const page: Element | null = document.querySelector('.App');
    page?.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }
};

export const scrollToSection = (id: string): void => {
  const element: Element | null = document.getElementById(id);
  const offset = 64; // 64px is the height of the fixed header

  if (element) {
    // element.getBoundingClientRect().top => distance from the top of the element to the top of the viewport
    // window.scrollY => distance from the top of the document to the top of the viewport
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const handleLinkClick = (
  id: SectionId,
  location: Location,
  navigate: NavigateFunction,
): void => {
  if (location.pathname !== '/') {
    navigate('/');
    store.dispatch(setTargetSection(id));
  } else {
    scrollToSection(id);
  }
};

export const scrollUpInstantly = () => {
  const page = document.querySelector('.App');
  page?.scrollIntoView({
    block: 'start',
    inline: 'nearest',
  });
};

export const handleLogoClick = () => {
  if (window.location.pathname === '/') {
    const page = document.querySelector('.App');
    page?.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }
};
