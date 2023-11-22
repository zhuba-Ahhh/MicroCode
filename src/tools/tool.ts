export const createHtml = (title: string, html: string) => {
  const linkNode = document.createElement('a');
  linkNode.download = `${title}.html`;
  linkNode.style.display = 'none';
  const blob = new Blob([html]);
  linkNode.href = URL.createObjectURL(blob);

  document.body.appendChild(linkNode);
  linkNode.click();

  document.body.removeChild(linkNode);
};
