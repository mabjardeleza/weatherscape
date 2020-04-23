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

    default:
      return state;
  }
}
