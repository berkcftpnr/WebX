// Çalışıp çalışmadığından emin değilim

 window.onload = function() {
    var headerHtml = '<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><div class="nav navbar-brand"><a class="brand-style" href="index.html">WebX Creators</a></div><ul class="nav navbar-nav"><li class="active"><a href="index.html">Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"> Oyunlar <span class="caret"></span></a><ul class="dropdown-menu"><li> <a href="#"> Oyun 1 </a></li><li> <a href="#"> Oyun 2 </a></li><li> <a href="#"> Oyun 3 </a></li><li> <a href="#"> Oyun 4 </a></li></ul></li><!-- Siteler menüsü de dropdown yapılacak. 4 tane site ekle--><li class="dropdown"><a href="dropdown-toggle" data-toggle="dropdown" href="#"> Siteler <span class="caret"></span></a><ul class="dropdown-menu"><li> <a href="#"> Site 1 </a></li><li> <a href="#"> Site 2 </a></li><li> <a href="#"> Site 3 </a></li><li><a href="www.google.com"> Google </a></li></ul></li><li><a href="about_us.html">About Us</a></li><li><a href="contact_us.html">Iletisim</a></li></ul><!-- Arama çubuğunu sağa daya --><ul class="nav navbar-nav navbar-right"><li><form class="navbar-form navbar-left" style="align:right;" action="/action_page.php"><div class="form-group"><input type="text" class="form-control" style="" placeholder="WebX`de ara..."></div><span type="submit" class="btn btn-default glyphicon glyphicon-search"></span></form></li></ul></div></div></nav>';

    //dinamik yapılacak
    //var footerHtml = document.getElementById('')

    document.getElementById("header").innerHTML += headerHtml;
    document.getElementById("footer").innerHTML += footerHtml;
};


//'<div class="col-md-3"><p>Başlık 1</p><hr class="footer-hr"></div><divclass="col-md-3"><p>Başlık 2</p><hr class="footer-hr"></div><div class="col-md-3"><p>Başlık 3</p><hr class="footer-hr"></div><div class="col-md-3"><p>Başlık 4</p><hr class="footer-hr"></div>';
