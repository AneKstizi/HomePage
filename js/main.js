TweenMax.staggerFrom('.heart', 1, {
    opacity: 0,
    ease: Expo.easeInOut
  }, 0.3
)

TweenMax.to('.overlay__text', 1, {
    delay: .9,
    opacity: 1,
    ease: Expo.easeInOut
  }
)

TweenMax.to('.overlay', 1, {
    delay: 2,
    top: '-100%'
  }
)

TweenMax.staggerFrom('.header__nav__wrap__link', .4, {
    delay: 2.7,
    opacity: 0,
    ease: Expo.easeInOut
  }, 0.1
)

TweenMax.from('.header__logo__img', 1, {
    delay: 2.5,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
  }
)

TweenMax.from('.btn--singIn', 1.5, {
   delay: 2.5,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
  }
)

TweenMax.from('.header__wrapp__text', 1, {
    delay: 2.5,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  }
)

TweenMax.from('.header__content__wrapp__img', 1, {
    delay: 2.5,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
 }
)