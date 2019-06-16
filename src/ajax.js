const getUrl = ({ api: { prefix, suffix }, filters: { type, search } }) =>
  prefix + type.active + suffix + search.values[search.active];

export default state => fetch(getUrl(state)).then(response => response.json());
