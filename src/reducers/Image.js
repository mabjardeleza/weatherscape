import { IMAGE } from '../actions';

const initialImage = {
  image: {
    urls: {
      full: '',
    },
    user: {
      name: '',
      links: {
        html: '',
      },
    },
  },
  size: {
    width: null,
    height: null,
  },
  loading: false,
  error: false,
};

export default function image(state = initialImage, action) {
  switch (action.type) {
    case IMAGE.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case IMAGE.SUCCESS:
      return {
        ...state,
        image: action.payload,
        loading: false,
        error: false,
      };

    case IMAGE.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case IMAGE.RESIZE:
      return {
        ...state,
        size: action.payload,
      };

    default:
      return state;
  }
}
