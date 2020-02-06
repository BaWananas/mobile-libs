import {EventEmitter, Input} from '@angular/core';
import {Group} from '../../../models/Group';
import {TableOptions} from '../../../../shared/models/table/TableOptions';
import {ITableFactory} from '../../../../shared/services/ITableFactory';
import {TableColumn} from '../../../../shared/models/table/TableColumn';

export abstract class GroupsListCommon {

  public static columnsIds = ['id', 'associationId', 'name', 'description'];
  public static columnsTitles = ['#ID', '#Association', 'Name', 'Description'];

  protected tableFactory: ITableFactory;
  @Input() refreshEvent: EventEmitter<Group[]>;
  @Input() data: Group[];
  @Input() options: TableOptions<Group>;

  protected constructor(tableFactory: ITableFactory) {
    this.tableFactory = tableFactory;
  }

  public getColumns(): TableColumn[] {
    return this.tableFactory.getColumns(GroupsListCommon.columnsTitles, GroupsListCommon.columnsIds);
  }
}
