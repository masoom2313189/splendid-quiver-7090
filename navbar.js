
function navbar() {
    return `
    <div id="navbar-1">
        <div>
            <a href="https://www.facebook.com/thehindu"><i class="fa fa-facebook-f"></i></a>
            <a href="https://twitter.com/The_Hindu"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/school/the-hindu/"><i class="fa fa-linkedin-square"></i></a>
            <a href="https://www.instagram.com/the_hindu/?ref=badge"><i class="fa fa-instagram"></i></a>
            <a href="https://t.me/THnewsupdates"><i class="fa fa-telegram"></i></a>
            <a href="https://www.thehindu.com/newsletter-subscription/"><i class="fa fa-envelope"></i></a>
            <a href="https://www.thehindu.com/social/"><i class="fa fa-mobile-phone"></i></a>
            <a href="https://epaper.thehindu.com/?utm_source=thehindu&utm_medium=header&utm_campaign=landingpage">ePaper</a>
        </div>
        <div>
            <input type="text" placeholder="Search here" id="search">
            <i class="fa fa-search"></i>
        </div>
    </div>
    <div id="navbar-2">
        <img src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="Error">
        <div>
            <a href="">LATEST NEWS</a>
            <a href="#">WEDNESDAY, AUGUST 24, 2022</a>
            <a href="https://epaper.thehindu.com/?utm_source=thehindu&utm_medium=header&utm_campaign=landingpage">E-PAPER</a>
        </div>
    </div>

    <div id="main-navbar">
    <nav id="navbar-3">
        <div class="wrapper">
            <ul class="nav-links">
                <i class="fa fa-bars" aria-hidden="true"></i>
                <li><a href="#">TODAY'S PAPER</a></li>
                <li>
                    <a href="./news.html">NEWS</a>
                        <ul class="drop-menu">
                        <li><a href="#">INDIA</a></li>
                        <li><a href="#">WORLD</a></li>
                        <li><a href="#">STATES</a></li>
                        <li><a href="#">CITIES</a></li>
                </ul>
                </li>
                <li>
                    <a href="#">OPINION</a>
                        <ul class="drop-menu">
                        <li><a href="#">CARTOONS</a></li>
                        <li><a href="#">COLUMNS</a></li>
                        <li><a href="#">EDITORIAL</a></li>
                        <li><a href="#">INTERVIEW</a></li>
                        <li><a href="#">LEAD</a></li>
                        <li><a href="#">READER'S EDITOR</a></li>
                        <li><a href="#">COMMENT</a></li>
                        <li><a href="#">OPEN PAGE</a></li>
                        <li><a href="#">LETTERS</a></li>
                </ul>
                </li>
                <li>
                    <a href="./business.html">BUSINESS</a>
                        <ul class="drop-menu">
                        <li><a href="#">AGRI-BUSINESS</a></li>
                        <li><a href="#">INDUSTRY</a></li>
                        <li><a href="#">ECONOMY</a></li>
                        <li><a href="#">MARKETS</a></li>
                        <li><a href="#">BUDGET 2022</a></li>
                        <li><a href="#">STOCK QUOTES</a></li>
                </ul>
                </li>
                <li>
                    <a href="./sports.html">SPORTS</a>
                        <ul class="drop-menu">
                        <li><a href="#">CRIKET</a></li>
                        <li><a href="#">FOOTBALL</a></li>
                        <li><a href="#">HOCKEY</a></li>
                        <li><a href="#">TENNIS</a></li>
                        <li><a href="#">ATHLETICS</a></li>
                        <li><a href="#">MOTOTSPORTS</a></li>
                        <li><a href="#">RACES</a></li>
                        <li><a href="#">OTHER SPORTS</a></li>
                </ul>
                </li>
                <li>
                    <a href="entertainment.html">ENTERTAINMENT</a>
                        <ul class="drop-menu">
                        <li><a href="#">ART</a></li>
                        <li><a href="#">DANCE</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">MUSIC</a></li>
                        <li><a href="#">REVIEWS</a></li>
                        <li><a href="#">THEATRE</a></li>
                </ul>
                </li>
                <li><a href="./crossword.html">CROSSWORD+</a></li>
                <li><a href="#">SCIENCE</a></li>
            </ul>
        </div>
    </nav>
    <div id="link-button">
        <a href="#">GET TRAIL</a>
        <a href="#">SUBSCRIBE NOW</a>
        <a href="login.html" target="_self">LOG IN</a>
    </div>
</div>
    <div id="navbar-4">
        <p>TRENDING TODAY</p>
        <a href="#">MONKEYPOX</a>
        <a href="#">CORONAVIRUS</a>
        <a href="#">INDIA AT 75</a>
        <img src="https://www.thehindu.com/theme/images/th-online/housing.png" alt="Error">
    </div>`;
}

export default navbar;