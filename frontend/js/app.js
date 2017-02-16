'use strict';

/**
 * @ngdoc overview
 * @name minovateApp
 * @description
 * # minovateApp
 *
 * Main module of the application.
 */

  /*jshint -W079 */

var app = angular
  .module('minovateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'picardy.fontawesome',
    'ui.bootstrap',
    'ui.router',
    'ui.utils',
    'angular-loading-bar',
    'angular-momentjs',
    'FBAngular',
    'lazyModel',
    'toastr',
    'angularBootstrapNavTree',
    'oc.lazyLoad',
    'ui.select',
    'ui.tree',
    'textAngular',
    'colorpicker.module',
    'angularFileUpload',
    'ngImgCrop',
    'datatables',
    'datatables.bootstrap',
    'datatables.colreorder',
    'datatables.colvis',
    'datatables.tabletools',
    'datatables.scroller',
    'datatables.columnfilter',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.moveColumns',
    'ngTable',
    'smart-table',
    'angular-flot',
    'angular-rickshaw',
    'easypiechart',
    'uiGmapgoogle-maps',
    'ui.calendar',
    'ngTagsInput',
    'pascalprecht.translate',
    'ngMaterial',
    'localytics.directives',
    'leaflet-directive',
    'wu.masonry',
    'ipsum',
    'angular-intro',
    'dragularModule'
  ])
  .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {

      event.targetScope.$watch('$viewContentLoaded', function () {

        angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);

        setTimeout(function () {
          angular.element('#wrap').css('visibility','visible');

          if (!angular.element('.dropdown').hasClass('open')) {
            angular.element('.dropdown').find('>ul').slideUp();
          }
        }, 200);
      });
      $rootScope.containerClass = toState.containerClass;
    });
  }])

  .config(['uiSelectConfig', function (uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
  }])

  //angular-language
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/dashboard');
    $stateProvider

    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'frontend/views/tmpl/app.html'
    })

    //dashboard
      .state('app.dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl',
       templateUrl: 'frontend/views/tmpl/dashboard.html'
        // resolve: {
        //   plugins: ['$ocLazyLoad', function($ocLazyLoad) {
        //     return $ocLazyLoad.load([
        //       'scripts/vendor/datatables/datatables.bootstrap.min.css',
        //       'scripts/vendor/datatables/datatables.bootstrap.min.css'
        //     ]);
        //   }]
        // }
      })
    
    //mail
      .state('app.mail', {
        abstract: true,
        url: '/mail',
        controller: 'MailCtrl',
        templateUrl: 'frontend/views/tmpl/mail/mail.html'
      })
      //mail/inbox
      .state('app.mail.inbox', {
        url: '/inbox',
        controller: 'MailInboxCtrl',
        templateUrl: 'frontend/views/tmpl/mail/inbox.html'
      })
      //mail/compose
      .state('app.mail.compose', {
        url: '/compose',
        controller: 'MailComposeCtrl',
        templateUrl: 'frontend/views/tmpl/mail/compose.html'
      })
      //mail/single
      .state('app.mail.single', {
        url: '/single',
        controller: 'MailSingleCtrl',
        templateUrl: 'frontend/views/tmpl/mail/single.html'
      })


    //orders
      .state('app.orders', {
        abstract: true,
        url: '/orders',
        controller: 'orderCtrl',
        template: '<div ui-view></div>'
      })
      //orders.unassigned
      .state('app.orders.unassigned', {
        url: '/unassigned',
        controller: 'orderCtrl',
        templateUrl: 'frontend/views/tmpl/orders/unassigned.html'
      })
      //orders.assigned
      .state('app.orders.assigned', {
        url: '/assigned',
        controller: 'orderCtrl',
        templateUrl: 'frontend/views/tmpl/orders/assigned.html'
      })
      //orders.drafted
      .state('app.orders.drafted', {
        url: '/drafted',
        controller: 'orderCtrl',
        templateUrl: 'frontend/views/tmpl/orders/drafted.html'
      })
      //orders.reassigned
      .state('app.orders.reassigned', {
        url: '/reassigned',
        controller: 'orderCtrl',
        templateUrl: 'frontend/views/tmpl/orders/reassigned.html'
      })
      //orders.completed
      .state('app.orders.completed', {
        url: '/completed',
        controller: 'orderCtrl',
        templateUrl: 'frontend/views/tmpl/orders/completed.html'
      })
      //single order page
      .state('app.order', {
        url: '/order',
        controller: 'orderCtrl',
        templateUrl: 'frontend/views/tmpl/orders/order.html'
      })

    //users
      .state('app.user', {
        abstract: true,
        url: '/user',
        controller: 'userCtrl',
        template: '<div ui-view></div>'
      })
      //user.admin
      .state('app.user.admin', {
        url: '/admin',
        controller: 'userCtrl',
        templateUrl: 'frontend/views/tmpl/users/admin.html'
      })
      //user.client 
      .state('app.user.client', {
        url: '/client',
        controller: 'userCtrl',
        templateUrl: 'frontend/views/tmpl/users/client.html'
      })
      //user.qc
      .state('app.user.qc', {
        url: '/qc',
        controller: 'userCtrl',
        templateUrl: 'frontend/views/tmpl/users/qc.html'
      })
      //user.drafter
      .state('app.user.drafter', {
        url: '/drafter',
        controller: 'userCtrl',
        templateUrl: 'frontend/views/tmpl/users/drafter.html'
      })
      
    //invoice 
      .state('app.invoice', {
        abstract: true,
        url: '/invoice',
        controller: 'invoiceCtrl',
        template: '<div ui-view></div>'
      })
      //invoice.paidInvoice
      .state('app.invoice.paid', {
        url: '/paid',
        controller: 'invoiceCtrl',
        templateUrl: 'frontend/views/tmpl/invoices/paidInvoice.html'
      })
      //invoice.unpaidInvoice 
      .state('app.invoice.unpaid', {
        url: '/unpaid',
        controller: 'invoiceCtrl',
        templateUrl: 'frontend/views/tmpl/invoices/unpaidInvoice.html'
      })

    //tables
      .state('app.tables', {
        url: '/tables',
        template: '<div ui-view></div>'
      })
      //tables/bootstrap
      .state('app.tables.bootstrap', {
        url: '/bootstrap',
        controller: 'TablesBootstrapCtrl',
        templateUrl: 'frontend/views/tmpl/tables/bootstrap.html'
      })
      //tables/datatables
      .state('app.tables.datatables', {
        url: '/datatables',
        controller: 'TablesDatatablesCtrl',
        templateUrl: 'frontend/views/tmpl/tables/datatables.html',
        resolve: {
          plugins: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/vendor/datatables/ColReorder/css/dataTables.colReorder.min.css',
              'scripts/vendor/datatables/ColReorder/js/dataTables.colReorder.min.js',
              'scripts/vendor/datatables/Responsive/dataTables.responsive.css',
              'scripts/vendor/datatables/Responsive/dataTables.responsive.js',
              'scripts/vendor/datatables/ColVis/css/dataTables.colVis.min.css',
              'scripts/vendor/datatables/ColVis/js/dataTables.colVis.min.js',
              'scripts/vendor/datatables/TableTools/css/dataTables.tableTools.css',
              'scripts/vendor/datatables/TableTools/js/dataTables.tableTools.js',
              'scripts/vendor/datatables/datatables.bootstrap.min.css'
            ]);
          }]
        }
      })
      //tables/uiGrid
      .state('app.tables.ui-grid', {
        url: '/ui-grid',
        controller: 'TablesUiGridCtrl',
        templateUrl: 'frontend/views/tmpl/tables/ui-grid.html'
      })
      //tables/ngTable
      .state('app.tables.ng-table', {
        url: '/ng-table',
        controller: 'TablesNgTableCtrl',
        templateUrl: 'frontend/views/tmpl/tables/ng-table.html'
      })
      //tables/smartTable
      .state('app.tables.smart-table', {
        url: '/smart-table',
        controller: 'TablesSmartTableCtrl',
        templateUrl: 'frontend/views/tmpl/tables/smart-table.html'
      })
      //tables/fooTable
      .state('app.tables.footable', {
        url: '/footable',
        controller: 'TablesFootableCtrl',
        templateUrl: 'frontend/views/tmpl/tables/footable.html',
        resolve: {
          plugins: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/vendor/footable/dist/footable.all.min.js',
              'scripts/vendor/footable/css/footable.core.min.css'
            ]);
          }]
        }
      })

    //ui
      .state('app.ui', {
        url: '/ui',
        template: '<div ui-view></div>'
      })
      //ui/typography
      .state('app.ui.typography', {
        url: '/typography',
        controller: 'TypographyCtrl',
        templateUrl: 'frontend/views/tmpl/ui/typography.html',
        resolve: {
          plugins: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/vendor/google-code-prettify/prettify.css',
              'scripts/vendor/google-code-prettify/sons-of-obsidian.css',
              'scripts/vendor/google-code-prettify/prettify.js'
            ]);
          }]
        }
      })
      //ui/lists
      .state('app.ui.lists', {
        url: '/lists',
        controller: 'ListsCtrl',
        templateUrl: 'frontend/views/tmpl/ui/lists.html'
      })
      //ui/buttons&icons
      .state('app.ui.buttons-icons', {
        url: '/buttons-icons',
        controller: 'ButtonsIconsCtrl',
        templateUrl: 'frontend/views/tmpl/ui/buttons-icons.html'
      })
      //ui/navs&accordions
      .state('app.ui.navs', {
        url: '/navs',
        controller: 'NavsCtrl',
        templateUrl: 'frontend/views/tmpl/ui/navs.html'
      })
      //ui/modals
      .state('app.ui.modals', {
        url: '/modals',
        controller: 'ModalsCtrl',
        templateUrl: 'frontend/views/tmpl/ui/modals.html'
      })
      //ui/tiles
      .state('app.ui.tiles', {
        url: '/tiles',
        controller: 'TilesCtrl',
        templateUrl: 'frontend/views/tmpl/ui/tiles.html'
      })
      //ui/portlets
      .state('app.ui.portlets', {
        url: '/portlets',
        controller: 'PortletsCtrl',
        templateUrl: 'frontend/views/tmpl/ui/portlets.html'
      })
      //ui/grid
      .state('app.ui.grid', {
        url: '/grid',
        controller: 'GridCtrl',
        templateUrl: 'frontend/views/tmpl/ui/grid.html'
      })
      //ui/widgets
      .state('app.ui.widgets', {
        url: '/widgets',
        controller: 'WidgetsCtrl',
        templateUrl: 'frontend/views/tmpl/ui/widgets.html'
      })
      //ui/alerts & notificationsnpm install -g bower
      .state('app.ui.alerts', {
        url: '/alerts',
        controller: 'AlertsCtrl',
        templateUrl: 'frontend/views/tmpl/ui/alerts.html'
      })
      //ui/general
      .state('app.ui.general', {
        uDashboardrl: '/general',
        controller: 'GeneralCtrl',
        templateUrl: 'frontend/views/tmpl/ui/general.html'
      })
      //ui/tree
      .state('app.ui.tree', {
        url: '/tree',
        controller: 'TreeCtrl',
        templateUrl: 'frontend/views/tmpl/ui/tree.html'
      })
      //ui/masonry
      .state('app.ui.masonry', {
        url: '/masonry',
        controller: 'UiMasonryCtrl',
        templateUrl: 'frontend/views/tmpl/ui/masonry.html'
      })
      //ui/dragula
      .state('app.ui.dragula', {
        url: '/dragula',
        controller: 'UiDragulaCtrl',
        templateUrl: 'frontend/views/tmpl/ui/dragula.html'
      })
    //material
      .state('app.material', {
        url: '/material',
        template: '<div ui-view></div>'
      })
      //material/autocomplete
      .state('app.material.autocomplete', {
        url: '/autocomplete',
        controller: 'mtAutocompleteCtrl',
        templateUrl: 'frontend/views/tmpl/material/autocomplete.html'
      })
      //material/bottom-sheet
      .state('app.material.bottom-sheet', {
        url: '/bottom-sheet',
        controller: 'mtBottomSheetCtrl',
        templateUrl: 'frontend/views/tmpl/material/bottom-sheet.html'
      })
      //material/buttons
      .state('app.material.buttons', {
        url: '/buttons',
        controller: 'mtButtonsCtrl',
        templateUrl: 'frontend/views/tmpl/material/buttons.html'
      })
      //material/cards
      .state('app.material.cards', {
        url: '/cards',
        controller: 'mtCardsCtrl',
        templateUrl: 'frontend/views/tmpl/material/cards.html'
      })
      //material/checkbox
      .state('app.material.checkbox', {
        url: '/checkbox',
        controller: 'mtCheckboxCtrl',
        templateUrl: 'frontend/views/tmpl/material/checkbox.html'
      })
      //material/chips
      .state('app.material.chips', {
        url: '/chips',
        controller: 'mtChipsCtrl',
        templateUrl: 'frontend/views/tmpl/material/chips.html'
      })
      //material/content
      .state('app.material.content', {
        url: '/content',
        controller: 'mtContentCtrl',
        templateUrl: 'frontend/views/tmpl/material/content.html'
      })
      //material/dialog
      .state('app.material.dialog', {
        url: '/dialog',
        controller: 'mtDialogCtrl',
        templateUrl: 'frontend/views/tmpl/material/dialog.html'
      })
      //material/divider
      .state('app.material.divider', {
        url: '/divider',
        controller: 'mtDividerCtrl',
        templateUrl: 'frontend/views/tmpl/material/divider.html'
      })
      //material/fab-speed-dial
      .state('app.material.fab-speed-dial', {
        url: '/fab-speed-dial',
        controller: 'mtFabSpeedDialCtrl',
        templateUrl: 'frontend/views/tmpl/material/fab-speed-dial.html'
      })
      //material/fab-toolbar
      .state('app.material.fab-toolbar', {
        url: '/fab-toolbar',
        controller: 'mtFabToolbarCtrl',
        templateUrl: 'frontend/views/tmpl/material/fab-toolbar.html'
      })
      //material/grid-list
      .state('app.material.grid-list', {
        url: '/grid-list',
        controller: 'mtGridListCtrl',
        templateUrl: 'frontend/views/tmpl/material/grid-list.html'
      })
      //material/inputs
      .state('app.material.inputs', {
        url: '/inputs',
        controller: 'mtInputsCtrl',
        templateUrl: 'frontend/views/tmpl/material/inputs.html'
      })
      //material/list
      .state('app.material.list', {
        url: '/list',
        controller: 'mtListCtrl',
        templateUrl: 'frontend/views/tmpl/material/list.html'
      })
      //material/menu
      .state('app.material.menu', {
        url: '/menu',
        controller: 'mtMenuCtrl',
        templateUrl: 'frontend/views/tmpl/material/menu.html'
      })
      //material/progress-circular
      .state('app.material.progress-circular', {
        url: '/progress-circular',
        controller: 'mtProgressCircularCtrl',
        templateUrl: 'frontend/views/tmpl/material/progress-circular.html'
      })
      //material/progress-linear
      .state('app.material.progress-linear', {
        url: '/progress-linear',
        controller: 'mtProgressLinearCtrl',
        templateUrl: 'frontend/views/tmpl/material/progress-linear.html'
      })
      //material/radio-button
      .state('app.material.radio-button', {
        url: '/radio-button',
        controller: 'mtRadioButtonCtrl',
        templateUrl: 'frontend/views/tmpl/material/radio-button.html'
      })
      //material/select
      .state('app.material.select', {
        url: '/select',
        controller: 'mtSelectCtrl',
        templateUrl: 'frontend/views/tmpl/material/select.html'
      })
      //material/sidenav
      .state('app.material.sidenav', {
        url: '/sidenav',
        controller: 'mtSidenavCtrl',
        templateUrl: 'frontend/views/tmpl/material/sidenav.html'
      })
      //material/slider
      .state('app.material.slider', {
        url: '/slider',
        controller: 'mtSliderCtrl',
        templateUrl: 'frontend/views/tmpl/material/slider.html'
      })
      //material/subheader
      .state('app.material.subheader', {
        url: '/subheader',
        controller: 'mtSubheaderCtrl',
        templateUrl: 'frontend/views/tmpl/material/subheader.html'
      })
      //material/swipe
      .state('app.material.swipe', {
        url: '/swipe',
        controller: 'mtSwipeCtrl',
        templateUrl: 'frontend/views/tmpl/material/swipe.html'
      })
      //material/switch
      .state('app.material.switch', {
        url: '/switch',
        controller: 'mtSwitchCtrl',
        templateUrl: 'frontend/views/tmpl/material/switch.html'
      })
      //material/tabs
      .state('app.material.tabs', {
        url: '/tabs',
        controller: 'mtTabsCtrl',
        templateUrl: 'frontend/views/tmpl/material/tabs.html'
      })
      //material/toast
      .state('app.material.toast', {
        url: '/toast',
        controller: 'mtToastCtrl',
        templateUrl: 'frontend/views/tmpl/material/toast.html'
      })
      //material/toolbar
      .state('app.material.toolbar', {
        url: '/toolbar',
        controller: 'mtToolbarCtrl',
        templateUrl: 'frontend/views/tmpl/material/toolbar.html'
      })
      //material/tooltip
      .state('app.material.tooltip', {
        url: '/tooltip',
        controller: 'mtTooltipCtrl',
        templateUrl: 'frontend/views/tmpl/material/tooltip.html'
      })
      //material/whiteframe
      .state('app.material.whiteframe', {
        url: '/whiteframe',
        controller: 'mtWhiteframeCtrl',
        templateUrl: 'frontend/views/tmpl/material/whiteframe.html'
      })
    
    //forms
      .state('app.forms', {
        url: '/forms',
        template: '<div ui-view></div>'
      })
      //forms/common
      .state('app.forms.common', {
        url: '/common',
        controller: 'FormsCommonCtrl',
        templateUrl: 'frontend/views/tmpl/forms/common.html',
        resolve: {
          plugins: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/vendor/slider/bootstrap-slider.js',
              'scripts/vendor/touchspin/jquery.bootstrap-touchspin.js',
              'scripts/vendor/touchspin/jquery.bootstrap-touchspin.css',
              'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
            ]);
          }]
        }
      })
      //forms/validate
      .state('app.forms.validate', {
        url: '/validate',
        controller: 'FormsValidateCtrl',
        templateUrl: 'frontend/views/tmpl/forms/validate.html'
      })
      //forms/wizard
      .state('app.forms.wizard', {
        url: '/wizard',
        controller: 'FormWizardCtrl',
        templateUrl: 'frontend/views/tmpl/forms/wizard.html'
      })
      //forms/upload
      .state('app.forms.upload', {
        url: '/upload',
        controller: 'FormUploadCtrl',
        templateUrl: 'frontend/views/tmpl/forms/upload.html',
        resolve: {
          plugins: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
            ]);
          }]
        }
      })
      //forms/imgcrop
      .state('app.forms.imgcrop', {
        url: '/imagecrop',
        controller: 'FormImgCropCtrl',
        templateUrl: 'frontend/views/tmpl/forms/imgcrop.html',
        resolve: {
          plugins: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
            ]);
          }]
        }
      })
    
    
    //layouts
      .state('app.layouts', {
        url: '/layouts',
        template: '<div ui-view></div>'
      })
      //layouts/boxed
      .state('app.layouts.boxed', {
        url: '/boxed',
        controller: 'BoxedlayoutCtrl',
        templateUrl: 'frontend/views/tmpl/layouts/boxed.html',
        containerClass: 'boxed-layout'
      })
      //layouts/fullwidth
      .state('app.layouts.fullwidth', {
        url: '/fullwidth',
        controller: 'FullwidthlayoutCtrl',
        templateUrl: 'frontend/views/tmpl/layouts/fullwidth.html'
      })
      //layouts/sidebar-sm
      .state('app.layouts.sidebar-sm', {
        url: '/sidebar-sm',
        controller: 'SidebarsmlayoutCtrl',
        templateUrl: 'frontend/views/tmpl/layouts/sidebar-sm.html',
        containerClass: 'sidebar-sm-forced sidebar-sm'
      })
      //layouts/sidebar-xs
      .state('app.layouts.sidebar-xs', {
        url: '/sidebar-xs',
        controller: 'SidebarxslayoutCtrl',
        templateUrl: 'frontend/views/tmpl/layouts/sidebar-xs.html',
        containerClass: 'sidebar-xs-forced sidebar-xs'
      })
      //layouts/offcanvas
      .state('app.layouts.offcanvas', {
        url: '/offcanvas',
        controller: 'OffcanvaslayoutCtrl',
        templateUrl: 'frontend/views/tmpl/layouts/offcanvas.html',
        containerClass: 'sidebar-offcanvas'
      })
      //layouts/hz-menu
      .state('app.layouts.hz-menu', {
        url: '/hz-menu',
        controller: 'HzmenuCtrl',
        templateUrl: 'frontend/views/tmpl/layouts/hz-menu.html',
        containerClass: 'hz-menu'
      })
      //layouts/rtl-layout
      .state('app.layouts.rtl', {
        url: '/rtl',
        controller: 'RtlCtrl',
        templateUrl: 'frontend/views/tmpl/layouts/rtl.html',
        containerClass: 'rtl'
      })
   
    //calendar
    .state('app.calendar', {
      url: '/calendar',
      controller: 'CalendarCtrl',
      templateUrl: 'frontend/views/tmpl/calendar.html'
    })
    //app core pages (errors, login,signup)
    .state('core', {
      abstract: true,
      url: '/core',
      template: '<div ui-view></div>'
    })
    //login
    .state('core.login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'frontend/views/tmpl/pages/login.html'
    })
    //signup
    .state('core.signup', {
      url: '/signup',
      controller: 'SignupCtrl',
      templateUrl: 'frontend/views/tmpl/pages/signup.html'
    })
    //forgot password
    .state('core.forgotpass', {
      url: '/forgotpass',
      controller: 'ForgotPasswordCtrl',
      templateUrl: 'frontend/views/tmpl/pages/forgotpass.html'
    })
    //page 404
    .state('core.page404', {
      url: '/page404',
      templateUrl: 'frontend/views/tmpl/pages/page404.html'
    })
    //page 500
    .state('core.page500', {
      url: '/page500',
      templateUrl: 'frontend/views/tmpl/pages/page500.html'
    })
    //page offline
    .state('core.page-offline', {
      url: '/page-offline',
      templateUrl: 'frontend/views/tmpl/pages/page-offline.html'
    })
    //locked screen
    .state('core.locked', {
      url: '/locked',
      templateUrl: 'frontend/views/tmpl/pages/locked.html'
    })
    //example pages
    .state('app.pages', {
      url: '/pages',
      template: '<div ui-view></div>'
    })
    //gallery page
    .state('app.pages.gallery', {
      url: '/gallery',
      controller: 'GalleryCtrl',
      templateUrl: 'frontend/views/tmpl/pages/gallery.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/mixitup/jquery.mixitup.js'
          ]);
        }]
      }
    })
    //timeline page
    .state('app.pages.timeline', {
      url: '/timeline',
      controller: 'TimelineCtrl',
      templateUrl: 'frontend/views/tmpl/pages/timeline.html'
    })
    //chat page
    .state('app.pages.chat', {
      url: '/chat',
      controller: 'ChatCtrl',
      templateUrl: 'frontend/views/tmpl/pages/chat.html'
    })
    //search results
    .state('app.pages.search-results', {
      url: '/search-results',
      controller: 'SearchResultsCtrl',
      templateUrl: 'frontend/views/tmpl/pages/search-results.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/slider/bootstrap-slider.js'
          ]);
        }]
      }
    })
    //profile page
    .state('app.pages.profile', {
      url: '/profile',
      controller: 'ProfileCtrl',
      templateUrl: 'frontend/views/tmpl/pages/profile.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
          ]);
        }]
      }
    })
    //intro page
    .state('app.pages.intro', {
      url: '/intro',
      controller: 'IntroPageCtrl',
      templateUrl: 'frontend/views/tmpl/pages/intro.html'
    })
    //documentation
    .state('app.help', {
      url: '/help',
      controller: 'HelpCtrl',
      templateUrl: 'frontend/views/tmpl/help.html'
    });
  }]);

