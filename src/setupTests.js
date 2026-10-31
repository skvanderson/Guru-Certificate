// O jsdom não implementa window.scrollTo e registra erro ao chamá-lo.
window.scrollTo = () => {};
