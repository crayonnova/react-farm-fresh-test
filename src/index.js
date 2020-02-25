import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));

function scrollBanner(banner) {
	let scrollPos = $(window).scrollTop();
	banner.css({
		// 'background-size' : (scrollPos*0.1-10) + 1920
		'background-size' : 2000 - (scrollPos/3)+'px',
		'background-position' : 'center ' + (0 + scrollPos/2)+'px'
	});
}

$(document).ready(function(){
	
	$(window).scroll(function() {
	
		scrollBanner($('.Banner'));

	});

});
