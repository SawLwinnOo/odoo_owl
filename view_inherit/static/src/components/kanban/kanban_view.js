/** @odoo-module **/

import {registry} from "@web/core/registry";
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { kanbanView } from "@web/views/kanban/kanban_view";
import {useService} from "@web/core/utils/hooks";


class employeeController extends KanbanController{
    setup(){
        super.setup();
        console.log('This is employee kanban controller.')
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
export const employeeKanbanView ={
    ...kanbanView,
    Controller: employeeController,
    buttonTemplate: "owl.employeeKanbanView.Buttons",
}

registry.category("views").add('employee_kanban_views', employeeKanbanView)