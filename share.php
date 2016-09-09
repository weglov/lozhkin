<?php $array = [
		1 => "Мой диагноз: сердцеразбитость.",
		2 => "Мой диагноз: обострение плохофилии.",
		3 => "Мой диагноз: психологический дальтонизм.",
		4 => "Мой диагноз: острая котиковая недостаточность. ",
		5 => "Мой диагноз: хроническая любвеневезучесть.",
		6 => "Мой диагноз: гиперкотиковиноз.",
		7 => "Мой диагноз: тяжелая виновиноватость.",
		8 => "Мой диагноз: вялотекущая дэдлайносжигачка",
		9 => "Мой диагноз: вирус тяжелого советоотрицания",
		10 => "Мой диагноз: патологическое отрицание действительности.",
		11 => "Мой диагноз: воспаление жизнелюбия.",
		12 => "Мой диагноз: латентный пессимизм.",
		13  => "Мой диагноз: хроническое заедание бытия."
]; 
$n = $_GET['n'];
?>
<!doctype html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Юмор и котики – средство от всех бед</title>
    <meta property="og:url" content="http://lozhkin.ren.tv/share.php?n=<?php if (isset($n)) { echo $n; } ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Юмор и котики – средство от всех бед" />
    <meta property="og:description" content="<?php print($array[$n]) ?>" />
    <meta property="og:image" content="http://lozhkin.ren.tv/result/<?php if (isset($n)) { echo $n; } ?>.jpg" />

<meta property="fb:app_id" content="1469802533285677" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@rentvchannel">
<meta name="twitter:creator" content="@rentvchannel">
<meta name="twitter:title" content="Юмор и котики – средство от всех бед">
<meta name="twitter:description" content="<?php print($array[$n]) ?>">
<meta name="twitter:image" content="http://lozhkin.ren.tv/result/<?php if (isset($n)) { echo $n; } ?>.jpg">

</head>

<body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-5054140-10', 'auto');
  ga('send', 'pageview');
</script>
<script>
	ga('send', 'event', 'ЛОЖКИН', '<?php if (isset($n)) { echo $n; } ?>', 'Клик');
	location.href="http://lozhkin.ren.tv/";
</script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
	(function (d, w, c) {
		(w[c] = w[c] || []).push(function() {
			try {
				w.yaCounter38798990 = new Ya.Metrika({
					id:38798990,
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true
				});
			} catch(e) { }
		});

		var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script"),
			f = function () { n.parentNode.insertBefore(s, n); };
		s.type = "text/javascript";
		s.async = true;
		s.src = "https://mc.yandex.ru/metrika/watch.js";

		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else { f(); }
	})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/38798990" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</body>

</html>
