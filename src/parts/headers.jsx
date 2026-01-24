import About from '../components/About.jsx';
import Experience from '../components/Experience.jsx';
import Projects from '../components/Projects.jsx';
import Contacts from '../components/Contacts.jsx';

let i = 0;

function func() {
    ++i;
    return i
}

let block = 'block block';

const headers = [{name:'Наверх', url:'/portfolio/', block:<About />, nameLink:'top', className:block+func()},
            {name:'Опыт работы', url:'#experience', block:<Experience />,  nameLink:'experience', className:block+func()},
            {name:'Проекты', url:'#projects', block:<Projects />,  nameLink:'projects', className:block+func()},
            {name:'Контакты', url:'#contacts', block:<Contacts />,  nameLink:'contacts', className:block+func()}          
            ]


export default headers