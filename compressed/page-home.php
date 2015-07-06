<?php

/*
    Template Name: Home Page
*/

?>
<?php get_header(); ?>
<?php //include('includes/nav.php') ?>
<?PHP  //include('js/scroll-script.js')  ?>
<input type='hidden' id='current_page' />
<input type='hidden' id='show_per_page' />
<div class="pt-wrapper" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
<?php include ('includes/heading.php');?>
<div class="pt-page pt-page-1">
<div class="home-header">
<h1 itemprop="brand" class="animated tada"><strong>FYWAVE</strong></h1>
<h2 itemprop="alternativeHeadline" class="home-slogan">A Beverly Hills Digital Marketing Agency <br> <a itemprop="telephone" href="tel:+1-310-795-4189">(310)-795-4189</a><br><a href="mailto:info@fywave.com">info@fywave.com</a></h2>
<div class="home-phrase">
<h1 class="home-phrase-h1 animated fadeIn" itemprop="headline">
<span data-animation="60" data-goto="2" class="animated zoomInLeft pt-trigger">DESIGN</span>
<span data-animation="58" data-goto="3" class="animated zoomIn pt-trigger">DEVELOP</span>
<span data-animation="59" data-goto="4" class="animated zoomInRight pt-trigger">SEO</span>
</h1>
</div>
</div>
</div>
<?php include ('includes/design.php'); ?>
<?php include ('includes/develop.php'); ?>
<?php include ('includes/marketing.php'); ?>
<?php include ('includes/contact.php'); ?>
</div>
<?php get_footer(); ?>