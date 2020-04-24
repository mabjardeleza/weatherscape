export const IMAGE = {
  REQUEST: 'request_image',
  SUCCESS: 'success_image',
  ERROR: 'error_image',
  RESIZE: 'resize_image',
};

export const imageActions = {
  request: (keyword) => ({
    type: IMAGE.REQUEST,
    payload: keyword,
  }),
  success: (imageData) => ({
    type: IMAGE.SUCCESS,
    payload: imageData,
  }),
  error: (error) => ({ type: IMAGE.ERROR, payload: error, error: true }),
  resize: (size) => ({ type: IMAGE.RESIZE, payload: size }),
};
