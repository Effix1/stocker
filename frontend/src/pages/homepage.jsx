import { NavLink } from 'react-router-dom';
import '../scss/layout/_homepage.scss';

export default function Homepage() {
  return (
    <>
      <div className='content_homepage'>
        <h1 className='content_homepage_title'>c'est la homme page</h1>
        <NavLink to='/index1/plan'>
          <div className='content_homepage_section'>
            <p>section généré par rapport au nombre d'onglet indexé</p>
          </div>
        </NavLink>

        <NavLink to='index1/liste'>
          <div className='content_homepage_section'>
            <p>Liste</p>
          </div>
        </NavLink>
        <div className='content_homepage_section'>
          <p>section</p>
        </div>
        <div className='content_homepage_section'>
          <p>section</p>
        </div>
        <div className='content_homepage_section'>
          <p>section</p>
        </div>
        <div className='content_homepage_section'>
          <p>section</p>
        </div>
      </div>
    </>
  );
}
