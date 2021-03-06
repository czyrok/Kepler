window.$ = window.jQuery = require('jquery')

const fs = require('fs'),
  electron = require('electron'),
  { ipcRenderer, shell } = electron,
  remote = electron.remote,
  win = remote.getCurrentWindow(),
  app = remote.app,
  appVersion = app.getVersion(),
  appName = app.getName(),
  appAuthor = 'Czyrok',
  contextMenu = require('electron-context-menu'),
  dragula = require('dragula'),
  checkInternetConnected = require('check-internet-connected'),
  offLineNavConfig = {
    timeout: 5000,
    retries: 5,
    domain: 'https://google.com'
  }

let frameVisibilityNeedsToChange = 0,
  loading = 0,
  windowInFullscreen = 0,
  settingVisibility = 0,
  setSettingVisibility = 1,
  downloadVisibility = 0,
  setDownloadVisibility = 1,
  downloadDisponibility = 0,

  homePageMode = 'light',
  langApp,
  searchEngine = 'google',
  widthLaunchApp = '1400',
  heightLaunchApp = '800',
  darkSettingPage = 1,
  darkDownloadPage = 1,
  darkHomePage = 0,
  alwaysOnTop = 0,
  isMaximized = 0,

  ctrlActive = false,
  shiftActive = false,
  windowHaveFocus = 1,

  ctrlTabRequest = 0,
  createTabWait = 0,
  CTRLTabMenuVisibility = 0,
  tabID,
  tabGetElement = '',
  tabURL,
  tabNUM = 1,
  URLWebviewForNewWindow,
  webviewHistory = [],
  webview = {},
  changeTabID,
  changeTabNUM = 2,
  lastTab,

  windowFile,
  canSendWindowFile = 0,
  settingFile,
  canSendSettingFile = 0,
  settingFileHasBeenSet = 0,
  windowFileHasBeenSet = 0,

  launchYellowAlert = 0,
  launchRedAlert = 0,
  launchBlueAlert = 0,

  radioName,
  radio = new Audio(),
  radioPlayPause = 0,
  radioVolume,
  musicName,
  musicArtist,
  musicCover,
  nextMusicArtist,
  nextMusicName,
  darkRadioPage = 1,
  radioIsOpen = 0,

  bookmarkMenuNumber = 0,
  bookmarkNumber = 0,
  popupVisible = 0,
  folderSliderStatus = false,
  bookmarkList,
  canSendBookmarkFile = 0,
  bookmarkItemID,
  popupTimeoutActive = false,
  popupTimeoutContinue = true,
  popupCloseTimeoutActive = false,
  popupCloseTimeoutContinue = true,
  folderTimeoutActive = false,
  folderTimeoutContinue = true,
  goTimeoutActive = false,
  goTimeoutContinue = true,
  bookmarkUIVisibilityTimeoutActive = false,
  bookmarkUIVisibilityTimeoutContinue = true,
  bookmarkUIInvisibilityTimeoutActive = false,
  bookmarkUIInvisibilityTimeoutContinue = true,

  firstTab = 0,
  defaultTabURL