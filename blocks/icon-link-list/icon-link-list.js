import { generateIconDOM } from '../icon/icon.js';

export default function decorate(block) {
  const panelContainer = document.createElement('div');
  panelContainer.classList.add('icon-link-list-container');

  // get all children elements
  const panels = [...block.children];

  // loop through all children blocks
  [...panels].forEach((panel) => {
    // generate the  panel
    const [iconType, ...rest] = panel.children;
    const classesText = iconType.textContent.trim();
    if (classesText) {
      const iconDOM = generateIconDOM([iconType, ...rest]);
      panel.textContent = '';
      panel.classList.add('icon', 'block', classesText);
      panel.append(iconDOM);
      panelContainer.append(panel);
    }
  });
  block.textContent = '';
  block.append(panelContainer);
}