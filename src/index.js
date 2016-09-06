import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
import './landing.css';
import Quiz from './quiz/index';
import "jquery-colorbox";

	ReactDOM.render(
	  <Quiz />,
	  document.getElementById('quiz')
	);

	jQuery('#epsiode').find('li').click(function(event) {
		var social = {
			'fb': 'http://www.facebook.com/dialog/share?app_id=87741124305&href=https%3A//www.youtube.com/attribution_link%3Fa%3D8Qi3FXvgYIs%26u%3D%252Fwatch%253Fv%253D[text]%2526feature%253Dplayer_embedded&display=popup&redirect_uri=https://www.youtube.com/facebook_redirect',
			'vk': 'https://vk.com/share.php?url=https%3A//www.youtube.com/attribution_link%3Fa%3DFEkVc1n5Nqg%26u%3D%252Fwatch%253Fv%253D[text]%2526feature%253Dshare',
			'twi': 'https://twitter.com/intent/tweet?url=https%3A//youtu.be/[text]&text=%D0%92%D0%B0%D1%81%D1%8F%20%D0%9B%D0%BE%D0%B6%D0%BA%D0%B8%D0%BD.%20%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8%20%D0%BD%D0%B0%20%D0%A0%D0%95%D0%9D%20%D0%A2%D0%92&via=YouTube&related=YouTube,YouTubeTrends,YTCreators'
		}
		var id = $(this).data('id');
		if (event.target.nodeName === 'BUTTON') {
			var url = social[event.target.className].replace(/\[text\]/g, id)
			window.open(url, '', "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600");
		}
		
	
	});