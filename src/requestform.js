import React from "react";
import './requestform.css';

function Request(){
    return(
        <div className= "allm">
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
        <header>

            <ul>
                <li>
                    <span class="fig">REISS & CO</span>
                </li>

                <li>
                    <div class="search-container">
                        <input id="in-search" type="search" placeholder="Search for Department"/>
                </div>
            </li>

            <li>
                <p class="person-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         class="bi bi-person" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>

                </p>
            </li>
            <li>
                <p id="accnt">My Account</p>
            </li>
            <li>
                <p class="love-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </p>
            </li>
            <li>
                <p class="cart-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-cart2" viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                </p>
            </li>
        </ul>
</header>
    <body>
    <div class="container">
        <h1 class="text-center">
            <br />
                Make a request
        </h1>
        <br />
            <form action="/sendemail" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <input class="form-control" id="inside" type="email" name="to" required placeholder="To:"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="subject" placeholder="Subject:" required id=""/>
                </div>
                <div class="form-group">
                    <textarea required class="form-control" name="body" id="textbody" cols="30" rows="10" placeholder="Body:"></textarea>
                </div>
                <label for="attachment">Attachment:</label>
                <div class="form-group">
                    <input type="file" class="form-control" name="image" id=""/>
                </div>
                <div class="form-group">
                    <button id="btn-block" type="submit" class="btn btn-block btn-danger">
                        Send Message
                    </button>
                </div>
                <div class="container-fluid">
                    <input type="checkbox" class="form-check-input" id="flexCheck" name="vehicle1" value="Bike"/><br />
                        <p>Wilson Dzah</p>
                        <p id="firstmail">wdzah@reissco.com.gh</p>
                        <p>Industrial Health and Safety</p>
                </div>
                <div class="container-fluid">
                    <input type="checkbox" class="form-check-input" id="flex" name="vehicle1" value="Bike" /><br />
                        <p>Wilson Dzah</p>
                        <p id="secmail">wdzah@reissco.com.gh</p>
                        <p>Agriculture</p>
                </div>
                <div class="container-fluid">
                    <input type="checkbox" class="form-check-input" id="flex-new" name="vehicle1" value="Bike" /><br />
                        <p>Wilson Dzah</p>
                        <p id="thmail">wdzah@reissco.com.gh</p>
                        <p>Vetenary</p>
                </div>
            </form>
    </div>
    </body>
    </div>
    );
}

export default Request;