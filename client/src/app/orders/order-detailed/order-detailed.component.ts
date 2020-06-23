import { OrdersService } from './../orders.service';
import { IOrder } from './../../shared/models/order';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private ordersService: OrdersService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@orderDetailed', '');
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.ordersService.getOrderDetailed(+this.activateRoute.snapshot.paramMap.get('id')).subscribe((order: IOrder) => {
      this.order = order;
      this.bcService.set('@orderDetailed', `Order# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

}
