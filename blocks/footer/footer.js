import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  function toggleClass(element) {
    if (element.classList.contains('title--expanded-mobile')) {
      element.classList.remove('title--expanded-mobile');
    } else {
      element.classList.add('title--expanded-mobile');
    }
  }
  const accordionHeaders = document.querySelectorAll('.vertical-link-text h3');
  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const listItem = header.nextElementSibling;
      toggleClass(header);
      if (listItem.style.display === 'none' || listItem.style.display === '') {
        listItem.style.display = 'block';
      } else {
        listItem.style.display = 'none';
      }
    });
  });
}
