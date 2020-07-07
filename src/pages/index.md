---
title: 'Home Page '
template: blocks
blocks:
  - template: block__hero_carousel
    component: hero_carousel
    title: Title
    subtitle: Subtitle
    sliderImage1: '/src/images/placeholder.jpg'
    sliderImage2: '/src/images/placeholder.jpg'
    sliderImage3: '/src/images/placeholder.jpg'
  - template: block__feature
    component: feature
    image: '/src/images/placeholder.jpg'
    background: primary
    orientation: reverse
    title: Block Title
    content:
      'Normal text. <em>italics</em>. <span style="text-decoration: underline;">underline</span>.
      <strong>bold</strong>.'
  - template: block__3col
    component: 3col
    title: 3 Column Block
    col1:
      title: col 1
      content: content
      image: '/src/images/placeholder.jpg'
    col2:
      title: col 2
      content: content
      image: '/src/images/placeholder.jpg'
    col3:
      title: col 3
      content: content
      image: '/src/images/placeholder.jpg'
  - template: block__cta
    component: cta
    background: primary
    title: Call to action
    subtitle: call to action subtitle
    button:
      url: '/'
      text: button
---
