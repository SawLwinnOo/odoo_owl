/** @odoo-module **/

import {registry} from "@web/core/registry";
import { ListController } from "@web/views/list/list_controller";
import { listView } from "@web/views/list/list_view";
import {useService} from "@web/core/utils/hooks";


class employeeController extends ListController{
    setup(){
        super.setup();
        console.log('This is employee controller.')
        this.action = useService("action")
    }

    openAttendanceView(){
        console.log("Open Attendance view")
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Attendance",
            res_model: "hr.attendance",
            views: [[false, "list"], [false, "form"]]
        })
    }

}
export const employeeListView ={
    ...listView,
    Controller: employeeController,
    buttonTemplate: "owl.EmployeeListView.Buttons",
}

registry.category("views").add('employee_list_views', employeeListView)