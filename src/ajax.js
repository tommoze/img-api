export default async url => {
  const request = await fetch(url);
  const response = await request.json();

  return response;
};

export const getUrl = state =>
  state.api.prefix +
  state.filters.type.active +
  state.api.suffix +
  state.filters.search.values[state.filters.search.active];
