
import "./NavBar.css";
import CardWidget from "./CartWidget"
const NavBar = (props) => {
    console.log(props);

    return (
        <div class="barrasup">
            <nav>
                <div class="barra" id="barra">
                    <a href="#barra">
                      <CardWidget/> 
                    </a>
                    <div class="menu" id="close">
                        <p>
                            <strong>
                                Menu
                            </strong>

                        </p>

                        <a href="index.html">Inicio</a>

                        <a href="social.html">Social</a>

                        <a href="media.html">Media</a>

                        <a href="news.html">News</a>

                        <a href="donate.html">Donate</a>

                        <a href="#close" id="cerrar">Cerrar</a>
                    </div>
                </div>
            </nav>
        </div>

    );
};
export default NavBar;