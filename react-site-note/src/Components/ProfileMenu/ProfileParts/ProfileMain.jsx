import s from "../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import {NavLink} from "react-router-dom";
import avatar from './../../../Styles/Images/matthew.png'


const ProfileMain = (props) => {

    let holidays = props.holidays.map(item => {
       return <div className={s.holiday} key={item.holiday_name}>
           <div className={s.holiday_title}>{item.holiday_name}</div>
           <div className={s.holiday_date}>{item.holiday_date}</div>
       </div>
    });

    return (
        <div className={s.profile_main}>
            <div className={s.title}>Профиль Пользователя</div>
            <div className={s.calendar_scroller_title}>Быстрый календарь</div>
            <div className={s.calendar_scroller}>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ПН</div>
                    <div className={s.calendar_item_date}>26</div>
                    <div className={s.calendar_item_stars}>***</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ВТ</div>
                    <div className={s.calendar_item_date}>27</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>СР</div>
                    <div className={s.calendar_item_date}>28</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ЧТ</div>
                    <div className={s.calendar_item_date}>29</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ПТ</div>
                    <div className={s.calendar_item_date}>30</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>СБ</div>
                    <div className={s.calendar_item_date}>31</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ВС</div>
                    <div className={s.calendar_item_date}>1</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ПН</div>
                    <div className={s.calendar_item_date}>2</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ПН</div>
                    <div className={s.calendar_item_date}>2</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ПН</div>
                    <div className={s.calendar_item_date}>2</div>
                </div>
                <div className={s.calendar_scroller_item}>
                    <div className={s.calendar_item_day}>ПН</div>
                    <div className={s.calendar_item_date}>2</div>
                </div>
            </div>
            <div className={s.calendar_scroller_footer}>
                <NavLink to={"/profile/calendar"} className={s.btn_open_full_calendar}>
                    Открыть календарь
                </NavLink>
            </div>

            <div className={s.holidays_title}>Ближайшие Праздники</div>
            <div className={s.holidays_wrapper}>

                <div className={s.nearest_happy_birthdays_wrapper  + " " + s.border_blue}>
                    <div className={s.happy_birthdays_title}>Дни Рождения</div>
                    <div className={s.nearest_happy_birthdays}>

                        <div className={s.person}>
                            <div className={s.person_avatar}>
                                <img src={avatar} alt="_"/>
                            </div>
                            <div className={s.person_name}>Валерий Остапчук</div>
                            <div className={s.person_birthdate}>01.02.21</div>
                        </div>
                        <div className={s.person}>
                            <div className={s.person_avatar}>
                                <img src={avatar} alt="_"/>
                            </div>
                            <div className={s.person_name}>Григорий Малютин</div>
                            <div className={s.person_birthdate}>10.02.21</div>
                        </div>

                    </div>

                </div>

                <div className={s.nearest_holidays_wrapper  + " " + s.border_blue}>
                    <div className={s.nearest_holidays_title}>Праздники</div>
                    <div className={s.nearest_holidays}>
                        {holidays}
                    </div>
                </div>
            </div>

            <div className={s.btn_new_event_wrapper}>
                <NavLink to="/profile/new_event">
                    Новое Событие
                </NavLink>
            </div>

        </div>
    );
}
export default ProfileMain;