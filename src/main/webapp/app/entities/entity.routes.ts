
import { Routes } from '@angular/router';
import matchingRoute from "./matching/matching.route";
import supportRoute from "./support/support.route";
import myRoute from "./my/my.route";

const routes: Routes = [
  matchingRoute,
  supportRoute,
  myRoute
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
