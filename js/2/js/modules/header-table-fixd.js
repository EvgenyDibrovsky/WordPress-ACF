export function headerTableFixed() {
  if (document.querySelector('.tableContainer')) {
    document.querySelector('.tableContainer').addEventListener('scroll', function () {
      const translate = 'translate(0,' + this.scrollTop + 'px)';
      this.querySelector('thead').style.transform = translate;
    });
  }
}
