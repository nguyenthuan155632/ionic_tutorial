# NOTE (Udemy)

> ## S2 - L29 
### [Reference Link](https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/v4/t/lecture/6347514?start=0)

```html
<ion-button (click)="onUsersPage()"></ion-button>
<ion-button (click)="onHomePage()"></ion-button>
```
```javascript
onUsersPage() {
    this.navCtrl.push(UsesrPage);
}

onHomePage() {
    this.navCtrl.pop();
}
```
`Change to use Navigation Directives`

```html
<ion-button [navPush]="usersPage"></ion-button>
<ion-button [navPop]></ion-button>
```
```javascript
import { UsersPage } from './users/users';

usersPage: UsersPage;
```

> ## S2 - L31
### [Reference Link](https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/v4/t/lecture/6347520?start=0)
##### [PAGE LIFECYCLE](https://saniyusuf.com/ionic-by-component-page-lifecycle/)
### `Lifecycle`
| Functions           | Effect  |
|-                    |-|
| `ionViewDidLoad`    | Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The `ionViewDidLoad` event is good place to put your setup code for the page.  | 
|  `ionViewWillEnter` | Runs when the page is about to enter and become the active page.  |
| `ionViewDidEnter`   | Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.  |
| `ionViewWillLeave`  | Runs when the page is about to leave and no longer be the active page.  |
| `ionViewDidLeave`   | Runs when the page has finished leaving and is no longer the active page.  |
| `ionViewWillUnload` | Runs when the page is about to be destroyed and have its elements removed.  |
| `ionViewCanEnter`   | Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter  |
| `ionViewCanLeave`   | Runs before the view can leave. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave
  |

![Page LifeCycle](http://saniyusuf.com/wp-content/uploads/2016/12/Ionic-Page-Lifecylce.png)

> ## S2 - L48
### [Reference Link](https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/v4/t/lecture/6347572?start=0)

`Passing Data between Pages by NavParams`

```javascript
// Parent page

```
```javascript
// Child page
// ngOnInit() {
//    this.quote = this.navParams.data;
// }
ionViewDidLoad() {
    this.quote = this.navParams.data;
}
```
```html
<!-- Add elvis operator (?) to use `quote` approach (when quote initial in ionViewDidLoad()) -->
<!--<ion-title>{{ quote.category }}</ion-title> -->
<ion-title>{{ quote?.category }}</ion-title>
```

> ## S2 - L62
### [Reference Link](https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/v4/t/lecture/6347686?start=0)
`View Hooks LifeCycle`
|Functions      |Effect|
|-              |-|
|`willEnter`    |Observable, fired when Component is about to become active|
|`didEnter`     |Observable, fired when Component has become active|
|`willLeave`    |Observable, fired when Component is about to become inactive|
|`didLeave`     |Observable, fired when Component has become inactive|
|`willUnload`   |Observable, fired when Component has been destroyed|
|`onWillDismiss`|Called when current ViewController will be dismissed|
|`onDidDismiss` |Called when current ViewController was dismissed|


> ## S2 - L67
### [Reference Link](https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/v4/t/lecture/6347706?start=0)
Change theme definition in `theme/variables.scss`

Override theme in `Shared Variables`
```less
$text-color: #000099;
$content-padding: 8px; // default 16px
```

Add custom theme in `Named Color Variables`
```less
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  custom:     #fff  // custom color
);
```
Use custom theme:
```html
<ion-item color="custom">Hello</ion-item>
```

> ## S2 - L70
### [Reference Link](https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/v4/t/lecture/6347712?start=0)
Use `MenuToggle` alternate for `MenuController (open/close/toggle)`
```typescript
openMenu() {
   this.menuCtrl.open();
 }

 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }
```
```html
<button ion-button (click)="toggleMenu()">Toggle Menu</button>
```
`[INTO]`
```html
<button ion-button menuToggle>Toggle Menu</button>
```

> ## S2 - L92
`Lists & Performance Issues`

When using lists in your application, you can hit performance issues - especially if those lists are very long and complex.

Typically, such lists are not rendered as whole but only in fragments - only the part currently shown on the screen. In web apps (and therefore in your Angular app), this does not work like this - lists are loaded as whole (unless you implement you own lazy-loading mechanism).

Ionic 2 offers a special directive you may use to fix potential performance issues => `VirtualScroll`.
On a basic list, you use it like this:
```html
<ion-list [virtualScroll]="items">
    <ion-item *virtualItem="let item">
        {‌{ item }}
    </ion-item>
</ion-list>
```
This will ensure, that only the visible part of the screen gets rendered. Dive into the above article to learn more about this functionality.

> ## S2 - L98
`Step-by-step Guide for Building for iOS and Android`

#### More information can be found in the Ionic 2 

Docs: [https://ionicframework.com/docs/intro/deploying/](https://ionicframework.com/docs/intro/deploying/)

Also have a look at the official Cordova Docs (for the different platforms):
* **Android:** [https://cordova.apache.org/docs/en/latest/guide/platforms/android/](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)
* **iOS:** [https://cordova.apache.org/docs/en/latest/guide/platforms/ios/](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)

`[ionic build]` vs `[ionic run]`  vs `[ionic emulate]`  - When to use what?

We have three commands which all have something to do with building our app (for real devices or simulators).

`[ionic build ios]` or `[ionic build android]` builds the app for the specified platform. "Build" means: It converts our web app into a real native application (=> the Cordova build process is triggered).

You need to run this command if you plan to open the built project in Android Studio or XCode.

`[ionic run ios]` or `[ionic run android]` also builds the project but then also ships the project to a connected device. Use this command if you don't want to use Android Studio or XCode to launch the app on your device.

**Important**: _When running your app on an iOS device for the first time you MUST launch it through XCode first (because your app needs to get signed). You will also need to accept this app on your phone._ 

Find more information here: 
[https://ionicframework.com/docs/setup/deploying/#ios-devices](https://ionicframework.com/docs/setup/deploying/#ios-devices)

If you don't want to use your real device (or you don't have one), you can use a simulator.

`[ionic emulate ios]` or `[ionic emulate android]` runs your app on an existing simulator or launches an simulator if none is present. For Android, this will only work if you created a virtual device using the Android Virtual Device Tool. 

Find more information about this here: [https://developer.android.com/studio/run/managing-avds.html](https://developer.android.com/studio/run/managing-avds.html)