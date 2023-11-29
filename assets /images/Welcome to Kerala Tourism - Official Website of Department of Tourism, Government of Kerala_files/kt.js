// JavaScript Document
jQuery(document).ready(function($){
	$('.hamburger-menu').on('click', function(){
		$('.header').toggleClass('nav-is-visible');
		$('.search-lan-block').toggleClass('visible');
	});	
	$('.hamburger-side-menu').on('click', function(){
		$('.title-block').toggleClass('side-menu-is-visible');
	});	
	$('.hamburger-header').on('click', function(){
		$('.header').toggleClass('nav-now-visible');
		$('.header-menu').toggleClass('nav-is-visible');
	});	
});