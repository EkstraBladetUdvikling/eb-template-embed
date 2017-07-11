export default function () {
  if (navigator.appVersion.indexOf('MSIE') !== -1) {
    document.getElementsByTagName('body')[0].innerHTML = `<p style="text-align: center; padding: 30px;"><strong>Desværre understøttes din browser ikke</strong><br><br>Microsoft har <a style="color: #990000;" href="https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support">stoppet support af din browser</a>.<br><br><a style="color: #990000; font-weight: bold;" href="http://outdatedbrowser.com/da">Download en ny browser her</a>.</p>`
  }
}
