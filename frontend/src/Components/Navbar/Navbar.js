import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" >Sunil kumar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <a class="navbar-toggler-icon"></a>
    </button>
    </div>
    <div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/'><a class="nav-link active" aria-current="page" >Home</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/feature'><a class="nav-link" >Features</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/'><a class="nav-link" >Pricing</a></Link>
        </li>
        
        <li class="nav-item">
        <Link to='/about'><a class="nav-link" >About</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/disabled'> <a class="nav-link " >Disabled</a></Link>
        </li>
      </ul> 
    </div>
  </div>
</nav>
        
       );
}

export default Navbar;