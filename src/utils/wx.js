import wepy from 'wepy';

export const toast = (title, duration = 1000) => {
  wepy.showToast({
    title,
    icon: 'none',
    duration,
    mask: true
  });
};
