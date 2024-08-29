export const scrollIfOnSamePage = (path) => {
  if (window.location.pathname === path) {
    const page = document.querySelector('.App');
    page.scrollIntoView({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const offset = 64; // 64px is the height of the fixed header

  // element.getBoundingClientRect().top => distance from the top of the element to the top of the viewport
  // window.scrollY => distance from the top of the document to the top of the viewport
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const handleLinkClick = (id, location, navigate, setTargetSection) => {
  if (location.pathname !== '/') {
    setTargetSection(id);
    navigate('/');
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
