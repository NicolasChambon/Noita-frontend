import { store } from '../store';
import { setTargetSection } from '../actions/global/globalActions';

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

export const handleLinkClick = (id, location, navigate) => {
  if (location.pathname !== '/') {
    navigate('/');
    store.dispatch(setTargetSection(id));
  } else {
    scrollToSection(id);
  }
};

export const scrollUpInstantly = () => {
  const page = document.querySelector('.App');
  page.scrollIntoView({
    top: 0,
    left: 0,
  });
};

export const handleLogoClick = () => {
  if (window.location.pathname === '/') {
    const page = document.querySelector('.App');
    page.scrollIntoView({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};
