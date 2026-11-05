var url = "https://1613307651-atari-embeds.googleusercontent.com/embeds/519e65e0e56fcef24f03f43ae5831795/inner-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.etOqPKhAhvg.O%2Fd%3D1%2Frs%3DAHpOoo-l5JrVgGKVELwC844E6riBHX86-w%2Fm%3D__features__"
var win = window.open();
win.document.body.style.margin = '0';
win.document.body.style.height = '100vh';
var iframe = win.document.createElement('iframe');
iframe.style.border = 'none';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.margin = '0';
iframe.src = url;
win.document.body.appendChild(iframe);
