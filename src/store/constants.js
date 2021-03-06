export const mode = Object.freeze({
  REPEAT: 'REPEAT',
  LOOP: 'LOOP',
  SHUFFLE: 'SHUFFLE',
});

export const themesMode = Object.freeze({
  LIGHT: 'LIGHT',
  DARK: 'DARK',
});

export const globalPlayer = Object.freeze({
  CHANGE_MODE: 'CHANGE_MODE',
  CHANGE_IS_PLAYING: 'CHANGE_IS_PLAYING',
  CHANGE_SONG: 'CHANGE_SONG',
  CHANGE_PLAYLIST: 'CHANGE_PLAYLIST',
  GET_LYRIC_REQUEST: 'GET_LYRIC_REQUEST',
  GET_LYRIC_FAILURE: 'GET_LYRIC_FAILURE',
  GET_LYRIC_SUCCESS: 'GET_LYRIC_SUCCESS',
});
