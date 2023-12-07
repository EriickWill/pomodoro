
export const progress = (progressBar,progressValue) => {
  progressBar.current.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;

} 