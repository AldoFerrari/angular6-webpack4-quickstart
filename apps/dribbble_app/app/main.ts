import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS, Jsonp, JSONP_PROVIDERS} from 'angular2/http'
import {ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF, LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS} from 'angular2/router'


import {HomeComponent} from './components/home/home';
import {PostComponent} from './components/post/post';

@RouteConfig([
    {path: '/snaps', component: HomeComponent, as: 'Home', useAsDefault: true},
    {path: '/snaps/:id', component: PostComponent, as: 'Post'}
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
export class APP {
    
}

bootstrap(APP, [JSONP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
,provide(APP_BASE_HREF, {useValue: '/'})]);