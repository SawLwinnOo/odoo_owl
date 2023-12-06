/** @odoo-module **/

import {registry} from "@web/core/registry";
import {FormController } from "@web/views/form/form_controller";
import { formView } from "@web/views/form/form_view";
import {useService} from "@web/core/utils/hooks";


class employeeFormController extends FormController{
    setup(){
        super.setup();
        console.log('This is employee form inherit.')
        this.action = useService("action")
    }

    openWebsite(url){
        this.action.doAction({
            type: "ir.actions.act_url",
            target: "self",
            url
        })
    }


}

export const employeeFormView ={
    ...formView,
    Controller: employeeFormController,
}
employeeFormController.template = "owl.EmployeeFormView"
registry.category("views").add('employee_form_views', employeeFormView)