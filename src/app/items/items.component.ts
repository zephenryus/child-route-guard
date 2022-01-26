import { Component, OnInit } from "@angular/core";
import { Md5 } from "ts-md5";

import * as data from "./names.json";


@Component({
    selector: "app-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
    items: any[] = [];

    constructor () {
        const md5 = new Md5();

        for (let i = 0; i < 50; i++) {
            this.items.push({
                id: String(md5.appendStr(String((new Date()).getMilliseconds())).end()).substring(1, 8),
                name: data.names[~~(Math.random() * 250)],
                accountNumber: ~~(Math.random() * 10000)
            });
        }
    }

    ngOnInit (): void {
    }

}
