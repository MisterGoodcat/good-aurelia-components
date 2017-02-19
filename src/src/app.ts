import { bindable } from "aurelia-framework";
import { RouterConfiguration, Router, RouteConfig } from "aurelia-router";

export class App {
  private _router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): void {
    this._router = router;
    config.title = "Good-Aurelia-Components ;)";

    config.map([            
      { route: "/", name: "default", moduleId: "demo/main", nav: true },
      { route: "demo/autocomplete", name: "autocompletedemo", moduleId: "demo/auto-complete-demo", nav: true },
    ]);
  }
}