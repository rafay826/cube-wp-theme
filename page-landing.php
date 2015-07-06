<?php

/*
    Template Name: Landing Page
*/

?>


<?php get_header(); ?>

<?php include('includes/landing-heading.php') ?>

<div itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement" class="page-container">

<?php
    
    $args = array( 'post_type' => 'weddings', 'posts_per_page' => 1 );
    $weddings = new WP_Query( $args );
?>
  <?php  
    if( have_posts()): while( have_posts()): the_post(); ?>

    <div>
        <h1 class="landing-h1"><strong><?php the_title(); ?></strong></h1>
    </div>
    <div class="landing-p"><p><?php the_content(); ?></p></div>

<?php endwhile; else: ?>
<?php _e('Sorry, no posts matched your criteria'); ?>
<?php endif; ?>
    
    <button class="read-more-bttn">Go Back!</button>

</div>

<?php get_footer(); ?>
