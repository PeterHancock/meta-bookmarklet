A bookmarklet that creates a bookmarklet from a JS URL

[meta-bookmarklet](javascript:(function(){var%20bookmarket%3DencodeURIComponent(document.body.innerText)%2Cname%3Dfunction(o)%7Breturn%20o%5Bo.length-1%5D.replace(%2F%5C.js%24%2F%2C%22%22)%7D(document.location.pathname.split(%22%2F%22))%3Bdocument.write(%22%3Cstrong%3EDrag%20bookmarklet%20to%20your%20toolbar%3A%3C%2Fstrong%3E%20%22)%2Cdocument.write('%3Ca%20href%3D%22javascript%3A(function()%7B'%2Bbookmarket%2B'%7D())%3B%22%3E'%2Bname%2B%22%3C%2Fa%3E%22)%3B}()))

---

Useful for extracting a bookmarklet from a raw Gist.
