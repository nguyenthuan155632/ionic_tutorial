# NOTE (Udemy)

## S2 - L29 
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

## S2 - L31
### [Reference Link](https://www.udemy.com/ionic-2-the-practical-guide-to-building-ios-android-apps/learn/v4/t/lecture/6347520?start=0)
##### [PAGE LIFECYCLE](https://saniyusuf.com/ionic-by-component-page-lifecycle/)
### `Lifecycle`
| Functions  | Effect  |
|---|---|
| `ionViewDidLoad`  | Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The `ionViewDidLoad` event is good place to put your setup code for the page.  | 
|  `ionViewWillEnter` | Runs when the page is about to enter and become the active page.  |
| `ionViewDidEnter`  | Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.  |
| `ionViewWillLeave`  | Runs when the page is about to leave and no longer be the active page.  |
| `ionViewDidLeave`  | Runs when the page has finished leaving and is no longer the active page.  |
| `ionViewWillUnload`  | Runs when the page is about to be destroyed and have its elements removed.  |
| `ionViewCanEnter`  | Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter  |
| `ionViewCanLeave`  | Runs before the view can leave. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave
  |

![Page LifeCycle](http://saniyusuf.com/wp-content/uploads/2016/12/Ionic-Page-Lifecylce.png)

## S2 - L48
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
