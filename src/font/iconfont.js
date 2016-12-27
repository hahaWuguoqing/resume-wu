;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M304 608c0 114.88 93.12 208 208 208s208-93.12 208-208-93.12-208-208-208-208 93.12-208 208zM960 256l-224 0c-16-64-32-128-96-128l-256 0c-64 0-80 64-96 128l-224 0c-35.2 0-64 28.8-64 64l0 576c0 35.2 28.8 64 64 64l896 0c35.2 0 64-28.8 64-64l0-576c0-35.2-28.8-64-64-64zM512 892c-156.864 0-284-127.136-284-284s127.136-284 284-284c156.864 0 284 127.136 284 284 0 156.864-127.136 284-284 284zM960 448l-128 0 0-64 128 0 0 64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jineng" viewBox="0 0 1113 1024">' +
    '' +
    '<path d="M275.185868 746.872269l290.321756 0c12.502403 19.338823 26.760462 37.347604 42.853981 53.600727L275.185868 800.472996 275.185868 746.872269zM275.185868 662.068736l251.298298 0c-5.080764-17.290557-8.751682-35.219535-10.986154-53.600727l-240.312144 0L275.185868 662.068736zM275.185868 523.691077l241.11017 0c2.527081-18.327991 6.198-36.336771 11.651175-53.600727l-252.761346 0L275.185868 523.691077zM743.839771 882.935654l0 46.87071c0 22.371321-18.221587 40.592908-40.566307 40.592908L94.167035 970.399273c-22.371321 0-40.539706-18.248188-40.539706-40.592908L53.627328 250.447071l201.847305-167.957813 0 178.305546L149.204208 260.794805l0 53.600727 159.871152 0L309.07536 53.600727l394.171503 0c22.371321 0 40.566307 18.221587 40.566307 40.566307l0 160.323367c17.263956-5.373373 35.246136-9.044291 53.627328-11.544772L797.440499 94.193636C797.4671 42.242161 755.198337 0 703.273464 0L270.796727 0 0 225.335862l0 704.470503c0 51.951474 42.242161 94.193636 94.167035 94.193636l609.079829 0c51.924873 0 94.193636-42.242161 94.193636-94.193636l0-35.325938C779.085907 891.979945 761.103728 888.335628 743.839771 882.935654zM202.432524 470.090349 133.243694 470.090349l0 53.600727L202.432524 523.691077 202.432524 470.090349zM133.243694 800.472996 202.432524 800.472996l0-53.600727L133.243694 746.872269 133.243694 800.472996zM202.432524 608.468009 133.243694 608.468009l0 53.600727L202.432524 662.068736 202.432524 608.468009zM982.316457 487.966125l-42.561372-32.58605-108.132485 141.144149-97.332537-74.588804-32.612651 42.561372 139.867307 107.174854L982.316457 487.966125zM1112.687258 568.726328c0-149.284011-121.459514-270.716924-270.743525-270.716924S571.25341 419.442317 571.25341 568.726328s121.432913 270.716924 270.716924 270.716924S1112.687258 718.010339 1112.687258 568.726328zM1059.05993 568.726328c0 119.703858-97.385738 217.116197-217.116197 217.116197s-217.116197-97.412339-217.116197-217.116197c0-119.703858 97.385738-217.116197 217.116197-217.116197S1059.05993 449.02247 1059.05993 568.726328z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M664.86148 581.098751c73.007781-51.572586 120.688733-136.614447 120.688733-232.797044 0-157.316955-127.523395-284.839327-284.833187-284.839327-157.308769 0-284.83114 127.523395-284.83114 284.839327 0 99.532901 51.066049 187.126888 128.415718 238.054791-144.495952 63.027475-246.36506 205.535143-250.359025 372.294145l40.700981 0c4.297886-161.873738 110.796432-298.273291 257.32774-347.032808 33.510208 13.855566 70.231551 21.517059 108.74675 21.517059 41.827641 0 81.548294-9.017374 117.327172-25.212218 152.564721 45.228087 264.680195 184.55225 269.092691 350.726943l40.705074 0C923.731342 787.079032 816.014038 641.177058 664.86148 581.098751zM500.717026 592.434937c-134.832871 0-244.141416-109.304452-244.141416-244.13323 0-134.839011 109.308545-244.13937 244.141416-244.13937 134.834918 0 244.145509 109.300358 244.145509 244.13937C744.862535 483.131509 635.551944 592.434937 500.717026 592.434937z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M96.269577 449.359334l829.613778 0c17.619286 0 31.908734 14.288424 31.908734 31.907711l0 63.816444c0 17.626449-14.288424 31.908734-31.908734 31.908734L96.269577 576.992223c-17.619286 0-31.907711-14.282285-31.907711-31.908734l0-63.816444C64.361867 463.647759 78.650291 449.359334 96.269577 449.359334z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinleguan-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d=""  ></path>' +
    '' +
    '<path d="M560.172 622.844v78.588c0.428 10.545-4.16 18.702-7.866 31.62-3.674 12.989-10.627 25.185-20.789 36.628-10.202 11.445-23.719 21.191-40.621 29.366-16.907 8.131-37.945 12.837-63.084 14.195-25.572 1.313-48.646-3.316-69.258-13.86-20.576-10.542-36.517-23.865-47.79-39.86-11.266-16.081-16.795-33.657-16.579-52.747 0.215-19.13 8.342-37.044 24.39-53.722 16.050-16.716 33.382-28.352 52.032-34.938 18.617-6.589 36.626-10.237 53.958-10.885 17.333-0.676 32.849 0.53 46.502 3.623 13.66 3.082 26.572 3.939 33.097 6.566v-67.828l-324.24-424.060c-108.775 93.561-177.666 232.197-177.666 386.929 0 281.756 228.407 510.158 510.159 510.158 106.109 0 204.647-32.398 286.271-87.833l-238.512-311.941z"  ></path>' +
    '' +
    '<path d="M512.413 2.3c-98.542 0-190.554 27.943-268.557 76.335l260.291 340.423c-0.066-48.873-0.371-107.297 0.013-165.691 0-12.765 1.031-19.213 7.558-27.345 6.457-8.089 15.12-12.832 25.968-14.15 9.090-1.317 16.578 0.53 22.428 5.613 5.847 5.039 11.805 12.082 17.868 21.078 6.060 9.039 13.551 19.237 22.43 30.642 8.879 11.446 20.897 22.669 36.086 33.623 13.017 10.117 24.39 17.351 34.127 21.758 9.741 4.404 18.869 8.473 27.317 12.196 8.453 3.727 16.799 8.247 25.037 13.516 8.238 5.276 17.332 13.854 27.317 25.713 9.949 11.407 16.048 23.301 18.226 35.62 2.174 12.304 2.281 23.524 0.317 33.615-1.959 10.087-5.1 18.329-9.411 24.729-4.388 6.401-8.061 9.38-11.092 8.924-3.033-0.411-5.74-2.631-8.131-6.587-2.389-3.954-4.206-11.177-5.527-21.76-2.175-17.13-7.7-29.776-16.585-37.907-8.88-8.13-22.643-13.966-41.297-17.474-19.502-3.989-36.729-11.968-51.667-24.093-14.949-12.047-27.426-23.411-37.377-33.914-9.556-9.265-16.906-12.539-22.109-9.904-5.205 2.635-7.027 10.861-7.027 17.898l1.556 76.236v70.937l300.465 392.964c99.646-93.109 161.936-225.692 161.936-372.829-0.001-281.757-228.403-510.163-510.16-510.163z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512m-505.429418 0a10 10 0 1 0 1010.858835 0 10 10 0 1 0-1010.858835 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-music" viewBox="0 0 1047 1024">' +
    '' +
    '<path d="M794.044984 12.245814c-38.959442 8.203294-313.725261 57.412838-375.239016 71.766778-71.769698 16.406588-71.769698 34.864364-71.769698 159.941603s2.049729 395.743601 2.049729 430.600666c0 61.516675-14.355399 92.277202-55.36019 92.277202-32.808796 0-82.01834 2.043889-106.629682 2.043889-125.077239 0-147.628633 254.259775 28.712259 254.259775 20.504585 0 102.522925 0 131.227884-8.198914 28.709339-8.203294 84.073908-30.756148 84.073908-102.527305 0-61.512295 2.046809-438.8025 0-508.521009-2.054108-67.665861 28.706419-69.714129 55.35873-75.869155 18.454857-4.097997 266.563986-55.36019 330.131849-69.712669 51.257813-12.304211 43.060359 34.855605 43.060359 47.161276l0 291.168028c0 55.36165-22.558693 61.515215-34.864364 61.515215-36.903873-2.051188-92.266983-2.051188-123.024591 6.150646-157.891875 45.110087-102.525845 258.360692 14.35394 258.360692 71.765318 0 110.724759 6.155025 151.73247-10.251563 43.058899-18.454857 73.819426-61.512295 73.819426-112.777408 0-53.314841 2.048269-641.800082 2.048269-736.122633C943.730645-30.813085 830.956157 6.096628 794.044984 12.245814L794.044984 12.245814zM794.044984 12.245814"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangmu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M984.858831 314.711753 516.654122 46.541224 46.587765 314.711753 515.723298 582.789201Z"  ></path>' +
    '' +
    '<path d="M46.587765 448.750477 46.587765 515.769839 515.723298 783.847287 984.858831 515.769839 984.858831 448.750477 515.723298 717.01409Z"  ></path>' +
    '' +
    '<path d="M46.587765 649.808563 46.587765 716.827925 515.723298 984.905372 984.858831 716.827925 984.858831 649.808563 515.723298 918.072175Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jingli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M349.392593 286.245926 349.392593 815.407407l203.851852-189.345185 203.851852 189.345185L757.096296 286.245926 349.392593 286.245926 349.392593 286.245926zM669.771852 208.592593l-402.962963 0 0 529.161481 38.874074-38.874074L305.682963 247.466667l364.088889 0L669.771852 208.592593 669.771852 208.592593z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.396249 1024c-282.424324 0-511.37476-228.951459-511.37476-511.37783 0-282.421254 228.951459-511.37476 511.37476-511.37476s511.37476 228.954529 511.37476 511.37476C1022.772033 795.048541 793.820574 1024 511.396249 1024zM511.396249 58.068534c-251.045663 0-454.555683 203.51002-454.555683 454.555683s203.51002 454.555683 454.555683 454.555683 454.555683-203.51002 454.555683-454.555683S762.441912 58.068534 511.396249 58.068534zM511.396249 796.721647c-156.904563 0-284.09743-127.195937-284.09743-284.1005 0-156.901493 127.192867-284.09743 284.09743-284.09743 156.901493 0 284.09743 127.195937 284.09743 284.09743C795.493679 669.52571 668.297742 796.721647 511.396249 796.721647z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M965.485714 570.514286 570.514286 570.514286 570.514286 965.485714C570.514286 997.800229 544.314514 1024 512 1024 479.685486 1024 453.485714 997.800229 453.485714 965.485714L453.485714 570.514286 58.514286 570.514286C26.199771 570.514286 0 544.314514 0 512 0 479.685486 26.199771 453.485714 58.514286 453.485714L453.485714 453.485714 453.485714 58.514286C453.485714 26.199771 479.685486 0 512 0 544.314514 0 570.514286 26.199771 570.514286 58.514286L570.514286 453.485714 965.485714 453.485714C997.800229 453.485714 1024 479.685486 1024 512 1024 544.314514 997.800229 570.514286 965.485714 570.514286Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontbiaozhunmoban01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M685.425 155.291l-39.476-9.712-125.353 509.494c-82.656-65.398-205.016-34.173-243.861 45.712-12.666 25.993-6.017 57.956 0.203 75.088 33.174 91.365 153.169 84.049 233.444 13.191 33.023-29.149 43.258-60.231 62.442-138.206l77.851-316.423c47.18 10.099 113.476 86.864 118.414 142.888 3.104 35.539-7.521 79.317-31.753 105.943-6.149 6.729-24.79 29.283-15.447 27.576 17.396-3.178 25.749-9.744 43.582-26.341 16.189-15.068 31.668-39.888 38.124-56.249 68.914-175.029-135.807-231.792-118.169-372.963z"  ></path>' +
    '' +
    '<path d="M512 981.674c-63.399 0-124.91-12.421-182.825-36.916-55.93-23.656-106.158-57.519-149.287-100.648-43.129-43.128-76.993-93.356-100.649-149.287-24.496-57.914-36.916-119.424-36.916-182.825 0-63.399 12.42-124.91 36.916-182.823 23.657-55.931 57.52-106.158 100.649-149.287 43.129-43.129 93.356-76.993 149.287-100.649 57.914-24.496 119.425-36.916 182.825-36.916s124.909 12.42 182.823 36.916c55.931 23.657 106.158 57.52 149.287 100.649 43.129 43.128 76.993 93.356 100.648 149.287 24.496 57.913 36.916 119.424 36.916 182.823 0 63.401-12.421 124.91-36.916 182.825-23.656 55.93-57.519 106.158-100.648 149.287-43.128 43.129-93.355 76.993-149.287 100.648-57.914 24.495-119.424 36.916-182.823 36.916zM512 73.024c-59.268 0-116.755 11.604-170.865 34.491-52.271 22.109-99.218 53.762-139.538 94.082s-71.973 87.268-94.083 139.538c-22.886 54.108-34.491 111.596-34.491 170.865s11.604 116.755 34.491 170.865c22.109 52.271 53.763 99.219 94.083 139.538s87.267 71.974 139.538 94.082c54.109 22.886 111.597 34.491 170.865 34.491 59.268 0 116.755-11.604 170.865-34.491 52.271-22.109 99.219-53.762 139.538-94.082s71.974-87.267 94.082-139.538c22.886-54.109 34.491-111.597 34.491-170.865s-11.604-116.755-34.491-170.865c-22.109-52.271-53.762-99.219-94.082-139.538s-87.267-71.974-139.538-94.082c-54.109-22.886-111.597-34.491-170.865-34.491z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)