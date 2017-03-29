/* global FB */
export default function facebookShare () {
  const picture = 'url'
  const caption = 'caption goes here'
  const name = 'name here'
  const description = 'description'
  const link = 'http://ekstrabladet.dk/sport/haandbold/aendrer-dansk-haandbold-nyt-format-fra-naeste-saeson/6593417'

  if (navigator.userAgent.includes('Mobi') && !navigator.userAgent.includes('Safari')) {
    const shareurl = `https://www.facebook.com/dialog/feed?app_id=123629220366&display=touch&picture=${encodeURIComponent(picture)}&description=${encodeURIComponent(description)}&name=${encodeURIComponent(name)}&caption=${encodeURIComponent(caption)}&link=${link}&redirect_uri=${link}`
    window.open(shareurl, 'Del')
  } else {
    FB.ui({
      method: 'feed',
      name,
      link,
      picture,
      caption,
      description
    })
  }
}
