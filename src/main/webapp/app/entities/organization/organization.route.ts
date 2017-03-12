import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { OrganizationComponent } from './organization.component';
import { OrganizationDetailComponent } from './organization-detail.component';
import { OrganizationPopupComponent } from './organization-dialog.component';
import { OrganizationDeletePopupComponent } from './organization-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class OrganizationResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const organizationRoute: Routes = [
  {
    path: 'organization',
    component: OrganizationComponent,
    resolve: {
      'pagingParams': OrganizationResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'c4SgApp.organization.home.title'
    }
  }, {
    path: 'organization/:id',
    component: OrganizationDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'c4SgApp.organization.home.title'
    }
  }
];

export const organizationPopupRoute: Routes = [
  {
    path: 'organization-new',
    component: OrganizationPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'c4SgApp.organization.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'organization/:id/edit',
    component: OrganizationPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'c4SgApp.organization.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'organization/:id/delete',
    component: OrganizationDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'c4SgApp.organization.home.title'
    },
    outlet: 'popup'
  }
];
