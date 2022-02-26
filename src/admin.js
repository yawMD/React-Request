import React from 'react';
import './admin.css';
import fash from './fashs.jpeg';

function Admin() {
    return (
        <div>
            <main>
        <header>
            <section className="header-one">
                <div class="head-leftcontainer">
                    <p class="logo_svg"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" class="h-5 w-5"
                                             viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd" />
                    </svg></p>
                    <div class="church_container">
                        <p>Reiss & Co</p>
                        <p class="req">REQUESTS</p>
                    </div>

                </div>
            </section>
            <section class="header-two">
                <div class="second-inner-header">
                    <a href="" class="create dash">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                   class="bi bi-plus" viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>

                        </span>
                        <span>make a request</span>
                    </a>
                    <p className="noti dash"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                              fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                    </p>
                    <p className="person dash">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                             class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                    </p>
                    <p className="arrow dash">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" class="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                </div>
            </section>
        </header>

        <div className="container-main">
            <section className="container-one">

                <div className="hope_church">
                    <section class="hope_one">
                        <p className="round_lo ma"></p>
                        <p className="hope_ch ma">Admin Dashboard</p>
                        <p className="line ma"></p>
                    </section>
                    <section class="hope_two">
                        <div class="first_">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
  <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z"/>
  <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z"/>
</svg>
                              </span>
                            <span class="r">Request</span>
                        </div>
                        <div class="first_">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
                              </span>
                            <span class="r">Forms</span>
                        </div>
                        <div class="first_">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>
                              </span>
                            <span class="r">Users</span>
                        </div>
                    </section>

                </div>
            </section>
            <section class="container-two">
                <div class="request_display">

                    <section class="nas-one">
                        <p>Requests</p>
                    </section>
                    <section class="nas-two">
                        <div class="cate-one marg">
                            <p class="svg-cont">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="h-5 w-5"
                                     viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clipRule="evenodd" />
                            </svg>
                        </p>
                        <input class="search_input" type="text" placeholder="Search" />
                </div>

                <div class="cate-two marg">
                    <select name="" id="">
                        <option value="">All Request</option>
                    </select>
                </div>

                <div class="cate-two marg">
                    <select name="" id="">
                        <option value="">All
                            status
                        </option>
                    </select>
                </div>
            </section>
        </div>
        <section class="nas-three">

            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <div class="status">
                            <p class="gmail">cindy@gmail.com</p>
                            <p class="active">Pending Approval</p>
                        </div>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>

            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <div class="status ">
                            <p class="gmail">cindy@gmail.com</p>
                            <p class="active pending">Active</p>
                        </div>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>

            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <div class="status">
                            <p class="gmail">cindy@gmail.com</p>
                            <p class="active">Pending Approval</p>
                        </div>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>

            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <div class="status ">
                            <p class="gmail">cindy@gmail.com</p>
                            <p class="active pending">Active</p>
                        </div>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>

            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <p class="gmail">cindy@gmail.com</p>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart-l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>

            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <p class="gmail">cindy@gmail.com</p>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>
            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <p class="gmail">cindy@gmail.com</p>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>
            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <p class="gmail">cindy@gmail.com</p>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>
            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <p class="gmail">cindy@gmail.com</p>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>
            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <p class="gmail">cindy@gmail.com</p>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>
            <div class="data">
                <section class="dat-one">
                    <p class="round-pic">
                        <img src="images/andy-art-bs4qtd2NsGI-unsplash.jpg" alt=""/>
                    </p>
                    <aside>
                        <p class="bible">Women's Bible Study</p>
                        <p class="cindy">Cindy Smith</p>
                        <p class="gmail">cindy@gmail.com</p>
                    </aside>
                </section>
                <section class="dat-two">
                    <p class="heart l_one"><svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg></p>
                    <p class="heart l_two">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <p class="heart l_three">
                        <svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </p>
                    <a href="" class="view heart">View</a>
                </section>
            </div>
        </section>
    </section>
    </div>
</main>
</div>
);
}

export default Admin;
