export default {
  filters: {
    type: {
      values: {
        cat: "",
        dog: ""
      },
      active: "cat",
      refresh: true
    },
    search: {
      values: {
        all: "&",
        gif: "&mime_types=gif"
      },
      active: "all",
      refresh: true
    },
    image: {
      values: {
        contain: { objectFit: "contain" },
        cover: { objectFit: "cover" }
      },
      active: "contain"
    }
  },
  list: [],
  api: {
    prefix: "https://api.the",
    suffix: "api.com/v1/images/search?limit=12"
  }
};
