import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class HeaderMenu extends React.Component {
    constructor(props) {
        let isAuthorized = sessionStorage.getItem("isAuthorized");
        let mb_id = sessionStorage.getItem("ss_mb_id");
        super(props);
        this.state = {
            isAuthorized: isAuthorized,
            mb_id: mb_id,
            menu: this.props.menu,
            submenu: this.props.submenu,
            wrid: this.props.wrid
        }

    };

    componentDidMount() {
        let menu = this.state.menu;
        let wrid = this.state.wrid;
        let submenu = this.state.submenu;

        if (menu === undefined) {
            menu = "home";
        }

        if (wrid !== undefined) {
            //$(".header_bg").hide();
        }

        if (submenu === undefined) {
            $("#menu li").removeClass("active");
            $("#menu_" + menu).addClass("active");
        } else {
            $("#menu li").removeClass("active");
            $("#" + menu + "_" + submenu).addClass("active");
        }







    }
    render() {
        const mainMenu = [
            {
                id: 1,
                idName: "menu_home",
                href: "/",
                mText: "홈"
            },
            {
                id: 2,
                idName: "menu_board",
                href: "/board",
                mText: "커뮤니티"
            },
            {
                id: 3,
                idName: "menu_club",
                href: "/club",
                mText: "동호회"
            },
            {
                id: 4,
                idName: "menu_market",
                href: "/market",
                mText: "중고마켓"
            },
            {
                id: 5,
                idName: "menu_shop",
                href: "/shop",
                mText: "가격비교"
            }
        ];

        const clubMenu = [
            {
                id: 1,
                idName: "club_home",
                href: "/club/home/" + this.state.wrid,
                mText: "동호회정보"
            },
            {
                id: 2,
                idName: "club_board",
                href: "/club/board/" + this.state.wrid,
                mText: "게시판"
            },
            {
                id: 3,
                idName: "club_picture",
                href: "/club/picture/" + this.state.wrid,
                mText: "사진첩"
            }
        ];

        let menuList;

        if (this.state.menu === "club" && this.state.wrid) {
            menuList = clubMenu.map((menu) => (<li key={menu.id} id={menu.idName}><Link to={menu.href}>{menu.mText}</Link></li>));
        } else {
            menuList = mainMenu.map((menu) => (<li key={menu.id} id={menu.idName}><Link to={menu.href}>{menu.mText}</Link></li>));
        }


        return (
            <ul className='menu'>
                {menuList}
            </ul >)
    }
}

export default HeaderMenu;