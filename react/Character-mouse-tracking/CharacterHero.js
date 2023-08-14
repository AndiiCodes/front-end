import Spline from '@splinetool/react-spline';

export default function CharacterHero() {
  return (
    <div>
    <div className='container'>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Links</li>
      <li>Contact</li>
    </ul>
  </nav>
  <h1>Hi, I'm </h1>
  <h2>@AndiiCodes</h2>
  <div className='spline-container'>
    <Spline scene="https://prod.spline.design/sfmkTjYZ6z5Q5JR7/scene.splinecode"
     className='bg' />
  </div>
  
</div>

</div>


  );
}
