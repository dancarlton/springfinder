export const Header = () => {
  return (
    <>
      <nav className='nav'>
        <img
          src='/src/assets/springfinder-logo.png'
          alt='SpringFinder Logo'
          className='nav__logo'
        />
        <ul className='nav__list'>
          <li className='nav__list-item'>Home</li>
          <li className='nav__list-item'>Activity</li>
          <li className='nav__list-item'>Destination</li>
          <li className='nav__list-item'>Contact</li>
        </ul>
        <ul className="icons">
  <li className="icon__item">
    <img className="icon__image" src="/src/assets/magnifying-glass.png" alt="Magnifying Glass" />
  </li>
  <li className="icon__item">
    <img className="icon__image" src="/src/assets/translate.png" alt="Translate" />
  </li>
  <li className="icon__item">
    <img className="icon__image" src="/src/assets/user-profile.png" alt="User Profile" />
  </li>
</ul>
      </nav>
    </>
  )
}
a
