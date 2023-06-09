import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ServerStatus} from "./serverStatus";
import {Server} from "./server";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  @Input() server: Server;
  @Output() removeServerById = new EventEmitter<number>();
  @Output() updateServerData = new EventEmitter<Server>();

  getServerStatus = (index: number) => ServerStatus[index];

  onClickChangeStatus() {
    if (this.server.status === ServerStatus.offline) {
      this.server.status = ServerStatus.online;
    } else {
      this.server.status = ServerStatus.offline;
    }
    this.updateServerData.emit(this.server);
  }

  onClickRemoveServerById(id: number) {
    this.removeServerById.emit(id);
  }
}
