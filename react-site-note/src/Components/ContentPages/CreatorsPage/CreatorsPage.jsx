import s from '../../../Styles/SCSS/ContentPages/creators_page.module.css'
import creator1 from './../../../Styles/Images/Creators/PersonCardOleg.jpg';
import creator2 from './../../../Styles/Images/Creators/PersonCardEvgeniy.jpg';
import N_logo from './../../../Styles/Images/N_logo.svg';

const CreatorsPage = (props) => {
    return (
        <div className={s.creators_page}>
            <div className={s.information}>
                <div className={s.information_title}>Мы верим, что технологии должны помогать людям.</div>
                <div className={s.information_stairs}>
                    <div className={s.stair}>
                        <div className={s.stair_title}>Lorem</div>
                        <div className={s.stair_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                            labore laborum, optio quam quo unde? Aliquam beatae dolorem excepturi exercitationem fuga
                            laudantium, mollitia necessitatibus neque odit, officia quia ratione suscipit!
                        </div>
                    </div>
                    <div className={s.stair}>
                        <div className={s.stair_title}>Lorem</div>
                        <div className={s.stair_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            asperiores, consectetur dolor doloribus eaque, facilis fugit ipsum iste iusto labore
                            necessitatibus perferendis quibusdam rem, repellendus sequi soluta sunt totam voluptatem.
                        </div>
                    </div>
                    <div className={s.stair}>
                        <div className={s.stair_title}>Lorem</div>
                        <div className={s.stair_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus architecto autem consequatur consequuntur ea ex ipsa iure magni natus odio
                            praesentium, quaerat quidem quo quos ratione rem vel vero, voluptas.
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.aboutCreators}>
                <div className={s.aboutCreators_title}>Наша команда</div>
                <div className={s.personCards}>
                    <div className={s.personCard}>
                        <div className={s.personCard_image}>
                            <img src={creator1} alt=""/>
                        </div>
                        <div className={s.personCard_name}>Олег Чумаченко</div>
                        <div className={s.personCard_speciality}>Front-end Web Developer</div>
                        <div className={s.personCard_description}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium at deserunt in neque praesentium totam ullam! Assumenda eligendi molestiae
                            recusandae?
                        </div>
                    </div>
                    <div className={s.personCard}>
                        <div className={s.personCard_image}>
                            <img src={creator2} alt=""/>
                        </div>
                        <div className={s.personCard_name}>Евгений Щебетовский</div>
                        <div className={s.personCard_speciality}>Back-end Web Developer</div>
                        <div className={s.personCard_description}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad dicta ex incidunt ipsum, iste itaque quam reiciendis repudiandae soluta ut.
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.footer}>
                <div className={s.footer_title}>Оставайтесь на связи</div>
                <div className={s.footer_socials}>
                    <a href="/">
                        <img src={N_logo} alt=""/>
                    </a>
                    <a href="/">
                        <img src={N_logo} alt=""/>
                    </a>
                    <a href="/">
                        <img src={N_logo} alt=""/>
                    </a>
                    <a href="/">
                        <img src={N_logo} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default CreatorsPage;