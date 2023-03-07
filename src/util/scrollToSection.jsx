export function scrollToSection (elementRef){
  window.scrollTo({
    top: elementRef.current.offsetTop - 50,
    behavior: 'smooth',
  });
};