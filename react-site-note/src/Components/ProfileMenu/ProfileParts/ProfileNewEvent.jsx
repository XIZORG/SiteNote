import React, {useState} from 'react';
import s from "../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import {Field, reduxForm} from "redux-form";
import {ProfileInput} from "./ProfileInput";
import {checkDate, checkHolidayName} from "../../../Utils/Validators/profile_validators";
import {NavLink} from "react-router-dom";

const ProfileNewEvent = (props) => {
    let [uptitle_hidden, changeUptitleHidden] = useState(s.uptitle_hidden);

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.profile_new_event}>
                <div className={s.main_title} onClick={() => {
                    changeUptitleHidden(uptitle_hidden === "" ? s.uptitle_hidden : "")
                }}>
                    Новое Событие
                </div>
                <div className={s.uptitle_wrapper + " " + uptitle_hidden}>
                    <div className={s.uptitle}>
                        Данная страница позволяет добавить новое событие, например, праздник. События, добавленные
                        здесь, не
                        привязаны к вашим знакомым. Чтобы добавить событие к человеку, перейдите в панель "Менеджер
                        Знакомых"
                    </div>
                </div>

                <div className={s.input_wrapper}>
                    {props.success ? "" : <>
                        <Field component={ProfileInput} type="text" name="holiday_name" validate={[checkHolidayName]}
                               title="Название Праздника"/>
                        <Field component={ProfileInput} type="text" name="holiday_date" validate={[checkDate]}
                               title="Дата Праздника"/>
                    </>
                    }
                </div>

                {/*<Field type="text" name="event_name" component="input"/>*/}
                {props.success ? "" : <div className={s.btn_add_event_wrapper}>
                    <button disabled={props.isAddEventFetching}>Добавить Новое Событие</button>
                </div>}

                {props.success
                    ? <div className={s.success}>
                        <div className={s.success_text}>
                            Событие успешно добавлено!
                        </div>
                        <div className={s.success_link}>
                            <NavLink to="/profile/new_event" onClick={() => {
                                props.setAddHolidaySuccess(false)
                            }}>Добавить ещё?</NavLink>
                        </div>
                    </div>
                    : ""}

                <div className={s.error_all}>
                    {props.error}
                </div>

            </div>
        </form>
    );
}
export default reduxForm({form: "ProfileNewEvent"})(ProfileNewEvent);
