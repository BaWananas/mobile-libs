import { Component, OnInit } from '@angular/core';
import {GroupsListCommon} from './groups-list.common';
import {Group} from '../../../models/Group';
import {TableFactoryService} from '../../../../shared/services/implementations/table-factory.service';

@Component({
  selector: 'arhs-ui-groups-list',
  templateUrl: './groups-list.component.tns.html',
  styleUrls: []
})
export class GroupsListComponent extends GroupsListCommon implements OnInit {

  constructor(tableFactory: TableFactoryService) {
    super(tableFactory);
  }

  // TODO
  protected refresh(newElements: Group[]): void {
  }

  // TODO
  protected initData(): void {
  }

  // TODO
  protected destroyData(): void {
  }

  ngOnInit(): void {
  }

}