export const utilsSelector = {
  isShowModalSearch$: (state) => state.utils.isShowModalSearch,
  isShowExtraDropdown$: (state) => state.utils.isShowExtraDropdown,
  isShowMenuDropdown$: (state) => state.utils.isShowMenuDropdown,
};

export const blogSelector = {
  features$: (state) => state.blog.features,
  blogs$: (state) => state.blog.blogs,
  stories$: (state) => state.blog.stories,
  blogById$: (state) => state.blog.blogById,
};
