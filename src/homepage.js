import React from 'react';
import image from './images.jpeg';
import './homepage.css';

function HomePage() {
    return (
        <div className="everything">
        <nav className= "nav">
            <div className="nav-center">
                <div className="nav-header">
                    <h3>Reiss & co</h3>
                </div>

                <ul className="links">
                    <form action="/logout" method="post">
                        <li>
                            <a href="index.html">home</a>
                        </li>
                        <li>
                            <a href="newIndex.html">Make a request</a>
                        </li>
                        <li>
                            <a href="projects.html">Get support</a>
                        </li>
                        <li>
                            <button className="logout"> Logout</button>
                        </li>
                        <li>
                            <img className="avatarr" src={image} alt=""/>
                        </li>
                    </form>
                </ul>
            </div>
        </nav>

        <div className="first-wel">
            <p className="amazing">Welcome James</p>

            <div className="mails">
                <table className="normal" style={{width: '100%'}} >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Last name</th>
                        <th>Company</th>
                        <th>Due Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="#">1</a></td>
                        <td> Cyrus</td>
                        <td>Paragon</td>
                        <td>1/5/2021</td>
                        <td className="amount">$520.18</td>
                        <td>
                            <p className="status status-unpaid">inactive</p>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="#">2</a></td>
                        <td> Cyrus</td>
                        <td>Sonic</td>
                        <td>1/4/2021</td>
                        <td className="amount">$415.25</td>
                        <td>
                            <p className="status status-paid">active</p>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="#">3</a></td>
                        <td> Cyrus</td>
                        <td>Innercircle</td>
                        <td>1/2/2021</td>
                        <td className="amount">$1324.84</td>
                        <td>
                            <p className="status status-pending">Pending</p>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="#">4</a></td>
                        <td> Cyrus</td>
                        <td>Varsity Plus</td>
                        <td>12/30/2020</td>
                        <td className="amount">$998.26</td>
                        <td>
                            <p className="status status-pending">Pending</p>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="#">5</a></td>
                        <td> Cyrus</td>
                        <td>Highlander</td>
                        <td>12/18/2020</td>
                        <td className="amount">$1152.35</td>
                        <td>
                            <p className="status status-paid">active</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </div>
        </div>

    );
}

export default HomePage;
