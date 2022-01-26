import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsComponent } from "./accounts/accounts.component";
import { CanActivateAccountsGuard } from "./can-activate-accounts.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ItemComponent } from "./item/item.component";
import { ItemsComponent } from "./items/items.component";
import { ReportsComponent } from "./reports/reports.component";

const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {
        path: "items", component: ItemsComponent, children: [
            {
                path: ":id", component: ItemComponent
            }
        ]
    },
    {path: "accounts", component: AccountsComponent, canActivate: [CanActivateAccountsGuard]},
    {path: "reports", component: ReportsComponent},
    {path: "**", component: DashboardComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
