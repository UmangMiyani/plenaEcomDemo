import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  productArr: [],
  cartArr: [],
};

export const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    addFeedArr(state, action) {
      state.productArr = action.payload;
    },
    updateFeedLikes(state, action) {
      const index = action.payload.index;
      state.productArr[index].liked = !state.productArr[index].liked;
    },
    setCartArr(state, action) {
      let product = action.payload;
      product.itemCount = 0;
      let index = state.cartArr?.findIndex(x => x?.id === product?.id);
      if (index !== -1) {
        state.cartArr[index].itemCount = state.cartArr[index].itemCount + 1;
      } else {
        product.itemCount = 1;
        state.cartArr = [...state.cartArr, product];
      }
    },
    removeFromCart(state, action) {
      state.cartArr = action.payload;
    },
    decreaseCartItem(state, action) {
      let index = action.payload.index;
      state.cartArr[index].itemCount = state.cartArr[index].itemCount - 1;
    },

    setFeedArr(state, action) {
      state.feedArr = [...state.feedArr, ...action.payload];
    },
    updateIndex(state, action) {
      state.feedArr = action.payload;
    },
    updateComments(state, action) {
      const index = action.payload;
      state.feedArr[index].comments_count =
        state.feedArr[index].comments_count + 1;
    },
    decreaseFeedCommentCount(state, action) {
      const index = action.payload;
      state.feedArr[index].comments_count =
        state.feedArr[index].comments_count - 1;
    },
    changeFeedType(state, action) {
      state.feedType = action.payload;
    },
    refereshFeedArr(state, action) {
      state.feedArr = action.payload;
    },
    clearFeedArr(state) {
      state.feedArr = [];
    },
    setPostDetail(state, action) {
      state.postDetail = action.payload;
    },
    updateShareCount(state, action) {
      const index = action.payload;
      state.feedArr[index].share_count = state.feedArr[index].share_count + 1;
    },
    updatePollSelected(state, action) {
      const index = action.payload.index;
      const updateVoteFeedArr = state.feedArr.map((e, i) => {
        if (index === i) {
          const obj = {
            ...e,
            vote_by_user: action.payload.pollId,
            poll_options: e.poll_options.map(res => {
              if (res?.id === action.payload.pollId.id) {
                res.votes_count = res.votes_count + 1;
              }
              return res;
            }),
          };
          return obj;
        } else {
          return e;
        }
      });
      state.feedArr = updateVoteFeedArr;
    },
    updateNewMemberSectionShow(state, action) {
      state.newMemberSectionShow = action.payload;
    },
    setNewMemberArr(state, action) {
      state.newMemberArr = action.payload;
    },
    addNewMemberArr(state, action) {
      state.newMemberArr = [...state.newMemberArr, ...action.payload];
    },
    removeFromNewMember(state, action) {
      state.newMemberArr = action.payload;
    },
    updateNewMemberComments(state, action) {
      const index = action.payload;
      state.newMemberArr[index].comments_count =
        state.newMemberArr[index].comments_count + 1;
    },
    decreaseNewMemberCommentCount(state, action) {
      const index = action.payload;
      state.newMemberArr[index].comments_count =
        state.newMemberArr[index].comments_count - 1;
    },
    updateNewMemberLikes(state, action) {
      const index = action.payload.index;
      const isLiked = action.payload.isTrue;
      state.newMemberArr[index].likes_count = isLiked
        ? state.newMemberArr[index].likes_count - 1
        : state.newMemberArr[index].likes_count + 1;
      state.newMemberArr[index].liked = !state.newMemberArr[index].liked;
    },
    updateTopComment(state, action) {
      const index = action.payload.index;
      state.feedArr[index].top_comment = action.payload.topComment;
    },
    updateShowTimeStampOnPost(state, action) {
      state.showTimestampOnPosts = action.payload;
    },
    setShowUpdatePopup(state, action) {
      state.showUpdatePopup = action.payload;
    },
    setShowRatingPopup(state, action) {
      state.showRatingPopup = action.payload;
    },
    setInternalAnalytics(state, action) {
      state.internalAnalytics = action.payload;
    },
    handlePostNotification(state, action) {
      let index = action.payload.index;
      let followed = action.payload.followed;
      state.feedArr[index].followed = followed;
    },
    addCompanyFeedArr(state, action) {
      state.companyFeedArr = action.payload;
    },
    setCompanyFeedArr(state, action) {
      state.companyFeedArr = [...state.companyFeedArr, ...action.payload];
    },
    removeFromCompanyFeedArr(state, action) {
      state.companyFeedArr = action.payload;
    },
    updateCompanyFeedComments(state, action) {
      const index = action.payload;
      state.companyFeedArr[index].comments_count =
        state.companyFeedArr[index].comments_count + 1;
    },
    updateCompanyFeedLikes(state, action) {
      const index = action.payload.index;
      const isLiked = action.payload.isTrue;
      state.companyFeedArr[index].likes_count = isLiked
        ? state.companyFeedArr[index].likes_count - 1
        : state.companyFeedArr[index].likes_count + 1;
      state.companyFeedArr[index].liked = !state.companyFeedArr[index].liked;
    },
    decreaseCompanyFeedCommentCount(state, action) {
      const index = action.payload;
      state.companyFeedArr[index].comments_count =
        state.companyFeedArr[index].comments_count - 1;
    },
    updateCompanyFeedShareCount(state, action) {
      const index = action.payload;
      state.companyFeedArr[index].share_count =
        state.companyFeedArr[index].share_count + 1;
    },
    updateCompanyFeedTopComment(state, action) {
      const index = action.payload.index;
      state.companyFeedArr[index].top_comment = action.payload.topComment;
    },
    handleCompanyFeedPostNotification(state, action) {
      let index = action.payload.index;
      let followed = action.payload.followed;
      state.companyFeedArr[index].followed = followed;
    },
    removeCompanyFeedFromFeed(state, action) {
      state.companyFeedArr = action.payload;
    },
    updateElementOnRefresh(state, action) {
      let index = action.payload.index;
      let element = action.payload.postDetail;
      let updateFeed = state.feedArr.map((x, i) => {
        if (index === i) {
          return element;
        } else {
          return x;
        }
      });
      state.feedArr = updateFeed;
    },
    clearCompanyFeedArr(state) {
      state.feedArr = [];
    },
    setIntraCompanyFeed(state, action) {
      state.intraCompanyFeed = action.payload;
    },
    setShowVerifyPopup(state, action) {
      state.showVerifyPopup = action.payload;
    },
    setIsCompanyEmailVerified(state, action) {
      state.isCompanyEmailVerified = action.payload;
    },
    setShowFABbtn(state, action) {
      state.showFABbtn = action.payload;
    },
  },
});

export const {
  setFeedArr,
  addFeedArr,
  setCartArr,
  decreaseCartItem,
  removeFromCart,
  changeFeedType,
  clearFeedArr,
  refereshFeedArr,
  setPostDetail,
  updateIndex,
  updateComments,
  decreaseFeedCommentCount,
  updateFeedLikes,
  removeFromFeed,
  updateShareCount,
  updatePollSelected,
  updateNewMemberSectionShow,
  addNewMemberArr,
  setNewMemberArr,
  updateNewMemberComments,
  decreaseNewMemberCommentCount,
  updateNewMemberLikes,
  removeFromNewMember,
  updateTopComment,
  updateShowTimeStampOnPost,
  setShowUpdatePopup,
  setShowRatingPopup,
  setInternalAnalytics,
  handlePostNotification,
  addCompanyFeedArr,
  setCompanyFeedArr,
  removeFromCompanyFeedArr,
  updateElementOnRefresh,
  clearCompanyFeedArr,
  setIntraCompanyFeed,
  setShowVerifyPopup,
  setIsCompanyEmailVerified,
  setShowFABbtn,
  updateCompanyFeedLikes,
  updateCompanyFeedComments,
  decreaseCompanyFeedCommentCount,
  updateCompanyFeedShareCount,
  updateCompanyFeedTopComment,
  handleCompanyFeedPostNotification,
  removeCompanyFeedFromFeed,
} = homeSlice.actions;
