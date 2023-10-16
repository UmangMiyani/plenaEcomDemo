import { API_CONSTANT, get, post } from '../../services';
import {
  trackCommunityJoinTap,
  trackCommunityLeaveTap
} from '../../utils/MixpanelTrackEvent';
import {
  addCompanyFeedArr,
  addFeedArr,
  addNewMemberArr,
  setCompanyFeedArr,
  setFeedArr,
  setNewMemberArr,
  setPostDetail
} from './reducer';

const getFeedAction = (dispatch, query, fetchMore) => {
  return new Promise((resolve, reject) => {
    get(`${API_CONSTANT.FETCH_FEED}${query}`)
      .then((res) => {
        if (fetchMore) {
          dispatch(setFeedArr(res?.data.data?.results));
        } else {
          dispatch(addFeedArr(res?.data.data?.results));
        }
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getPostDetailAction = (dispatch, query) => {
  return new Promise((resolve, reject) => {
    get(`${API_CONSTANT.FETCH_POST}${query}`)
      .then((res) => {
        dispatch(setPostDetail(res.data.data?.results[0]));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getPostCommentAction = (dispatch, query) => {
  return new Promise((resolve, reject) => {
    get(`${API_CONSTANT.FETCH_POST_COMMENTS}${query}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const joinCommunityAction = (dispatch, data) => {
  return new Promise((resolve, reject) => {
    post(API_CONSTANT.JOIN_COMMUNITY, data)
      .then((response) => {
        resolve(response);
        trackCommunityJoinTap();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const leaveCommunityAction = (dispatch, data) => {
  return new Promise((resolve, reject) => {
    post(API_CONSTANT.LEAVE_COMMUNITY, data)
      .then((response) => {
        resolve(response);
        trackCommunityLeaveTap();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const createCommentReplyAction = (dispatch, data) => {
  return new Promise((resolve, reject) => {
    post(API_CONSTANT.CREATE_COMMENT_REPLY, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const createCommentAction = (dispatch, data) => {
  return new Promise((resolve, reject) => {
    post(API_CONSTANT.CREATE_COMMENT, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getNewMemberAction = (dispatch, query, fetchMore) => {
  return new Promise((resolve, reject) => {
    get(`${API_CONSTANT.MEETNEWMEMBER}${query}`)
      .then((res) => {
        if (fetchMore) {
          dispatch(addNewMemberArr(res?.data.data?.results));
        } else {
          dispatch(setNewMemberArr(res?.data.data?.results));
        }
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getMentionUserAction = (queryParam) => {
  return new Promise((resolve, reject) => {
    get(`${API_CONSTANT.MENTION_USER}${queryParam}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const appRatingAction = (params) => {
  return new Promise((resolve, reject) => {
    post(`${API_CONSTANT.RATING}`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getCompanyFeedAction = (dispatch, query, fetchMore) => {
  return new Promise((resolve, reject) => {
    get(`${API_CONSTANT.FETCH_POST}${query}`)
      .then((res) => {
        if (fetchMore) {
          dispatch(setCompanyFeedArr(res?.data.data?.results));
        } else {
          dispatch(addCompanyFeedArr(res?.data.data?.results));
        }
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export {
  getFeedAction,
  getPostDetailAction,
  joinCommunityAction,
  leaveCommunityAction,
  getPostCommentAction,
  createCommentReplyAction,
  createCommentAction,
  getNewMemberAction,
  getMentionUserAction,
  appRatingAction,
  getCompanyFeedAction
};
