class NavigationWizard {
  currentIndex = 0;

  //Events
  onNext = null;
  onPrevious = null;
  onBackHome = null;

  constructor(className) {
    this.className = className;
    this.screens = Array.from(document.querySelectorAll(`.${className}`));

    //Validation rules
    this.canGoNextCallbacks = {};
    this.canGoPreviousCallbacks = {};

    this.init();
  }

  init() {
    this.screens.forEach((screen, index) => {
      screen.style.display = index === 0 ? 'block' : 'none';
    });

    document.querySelectorAll(`.${this.className}-next`).forEach(btn => {
      btn.addEventListener('click', () => this.next());
    });

    document.querySelectorAll(`.${this.className}-prev`).forEach(btn => {
      btn.addEventListener('click', () => this.previous());
    });

    document.querySelectorAll(`.${this.className}-home`).forEach(btn => {
      btn.addEventListener('click', () => this.home());
    });
  }

  next() {
    if (this.canGoNext()) {
      this.navigate(1);
      if (this.onNext != null) {
        this.onNext();
      }
    }
  }

  previous() {
    if (this.canGoPrevious()) {
      this.navigate(-1);
      if (this.onPrevious != null) {
        this.onPrevious();
      }
    }
  }

  home() {
    if (this.canGoPrevious()) {
      this.screens[this.currentIndex].style.display = 'none';
      this.currentIndex = 0;
      this.screens[this.currentIndex].style.display = 'block';
      if (this.onBackHome != null) {
        this.onBackHome();
      }
    }
  }

  navigate(direction) {
    this.screens[this.currentIndex].style.display = 'none';
    this.currentIndex += direction;
    this.screens[this.currentIndex].style.display = 'block';
  }

  canGoNext() {
    return this.currentIndex < this.screens.length - 1 &&
      ((this.canGoNextCallbacks && this.canGoNextCallbacks[this.currentIndex] !== undefined) ? this.canGoNextCallbacks[this.currentIndex]() : true);
  }

  canGoPrevious() {
    return this.currentIndex > 0 &&
      ((this.canGoPreviousCallbacks && this.canGoPreviousCallbacks[this.currentIndex] !== undefined) ? this.canGoPreviousCallbacks[this.currentIndex]() : true);
  }

  setCanGoNext(screenIndex, callback) {
    this.canGoNextCallbacks[screenIndex] = callback;
  }

  setCanGoPrevious(screenIndex, callback) {
    this.canGoPreviousCallbacks[screenIndex] = callback;
  }
}

export default NavigationWizard;